import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { BlogCategory, BlogTag, BlogArticle } from '@/types/blog';
import { slugify } from '@/utils/slugify';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ArrowLeft, Save, Eye, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const blogFormSchema = z.object({
  title: z.string().min(1, 'Le titre est requis'),
  content: z.string().min(1, 'Le contenu est requis'),
  excerpt: z.string().optional(),
  category_id: z.string().optional(),
  status: z.enum(['draft', 'published']),
  featured_image: z.string().optional(),
});

type BlogFormData = z.infer<typeof blogFormSchema>;

export default function BlogForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isEditing = Boolean(id);

  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [tags, setTags] = useState<BlogTag[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const form = useForm<BlogFormData>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: '',
      content: '',
      excerpt: '',
      category_id: '',
      status: 'draft',
      featured_image: '',
    },
  });

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    setLoading(true);

    // Fetch categories and tags
    const [categoriesResult, tagsResult] = await Promise.all([
      supabase.from('blog_categories').select('*').order('name'),
      supabase.from('blog_tags').select('*').order('name')
    ]);

    if (categoriesResult.data) setCategories(categoriesResult.data);
    if (tagsResult.data) setTags(tagsResult.data);

    // If editing, fetch the article
    if (isEditing && id) {
      const { data: article, error } = await supabase
        .from('blog_articles')
        .select(`
          *,
          blog_article_tags(
            blog_tags(*)
          )
        `)
        .eq('id', id)
        .single();

      if (error) {
        toast({
          title: "Erreur",
          description: "Impossible de charger l'article",
          variant: "destructive",
        });
        navigate('/admin/blog');
        return;
      }

      if (article) {
        form.reset({
          title: article.title,
          content: article.content,
          excerpt: article.excerpt || '',
          category_id: article.category_id || 'none',
          status: article.status as 'draft' | 'published',
          featured_image: article.featured_image || '',
        });

        // Set selected tags
        const articleTagIds = article.blog_article_tags?.map(at => at.blog_tags.id) || [];
        setSelectedTags(articleTagIds);
      }
    }

    setLoading(false);
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      form.setValue('featured_image', publicUrl);
      
      toast({
        title: "Image téléchargée",
        description: "L'image a été téléchargée avec succès",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de télécharger l'image",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (data: BlogFormData) => {
    setSaving(true);

    try {
      const slug = slugify(data.title);
      const now = new Date().toISOString();

      const articleData = {
        title: data.title,
        content: data.content,
        excerpt: data.excerpt,
        category_id: data.category_id === 'none' ? null : data.category_id,
        status: data.status,
        featured_image: data.featured_image,
        slug,
        published_at: data.status === 'published' ? now : null,
      };

      let articleId: string;

      if (isEditing && id) {
        // Update existing article
        const { error } = await supabase
          .from('blog_articles')
          .update(articleData)
          .eq('id', id);

        if (error) throw error;
        articleId = id;
      } else {
        // Create new article
        const { data: newArticle, error } = await supabase
          .from('blog_articles')
          .insert(articleData)
          .select()
          .single();

        if (error) throw error;
        articleId = newArticle.id;
      }

      // Update tags
      if (isEditing) {
        // Delete existing tags
        await supabase
          .from('blog_article_tags')
          .delete()
          .eq('article_id', articleId);
      }

      // Insert new tags
      if (selectedTags.length > 0) {
        const tagInserts = selectedTags.map(tagId => ({
          article_id: articleId,
          tag_id: tagId,
        }));

        const { error: tagsError } = await supabase
          .from('blog_article_tags')
          .insert(tagInserts);

        if (tagsError) throw tagsError;
      }

      toast({
        title: isEditing ? "Article modifié" : "Article créé",
        description: `L'article a été ${isEditing ? 'modifié' : 'créé'} avec succès`,
      });

      navigate('/admin/blog');
    } catch (error) {
      console.error('Error saving article:', error);
      toast({
        title: "Erreur",
        description: `Impossible de ${isEditing ? 'modifier' : 'créer'} l'article`,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleTagChange = (tagId: string, checked: boolean) => {
    if (checked) {
      setSelectedTags([...selectedTags, tagId]);
    } else {
      setSelectedTags(selectedTags.filter(id => id !== tagId));
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate('/admin/blog')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {isEditing ? 'Modifier l\'article' : 'Nouvel article'}
            </h1>
          </div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contenu de l'article</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Titre</FormLabel>
                        <FormControl>
                          <Input placeholder="Titre de l'article" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="excerpt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Résumé (optionnel)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Court résumé de l'article" 
                            rows={3}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contenu</FormLabel>
                        <FormControl>
                          <div className="prose-editor">
                            <ReactQuill
                              theme="snow"
                              value={field.value}
                              onChange={field.onChange}
                              style={{ minHeight: '400px' }}
                              modules={{
                                toolbar: [
                                  [{ 'header': [1, 2, 3, false] }],
                                  ['bold', 'italic', 'underline', 'strike'],
                                  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                  ['blockquote', 'code-block'],
                                  ['link', 'image'],
                                  ['clean']
                                ],
                              }}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Publish */}
              <Card>
                <CardHeader>
                  <CardTitle>Publication</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Statut</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionner un statut" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="draft">Brouillon</SelectItem>
                            <SelectItem value="published">Publié</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-2">
                    <Button type="submit" disabled={saving} className="flex-1">
                      <Save className="h-4 w-4 mr-2" />
                      {saving ? 'Enregistrement...' : 'Enregistrer'}
                    </Button>
                    {form.watch('status') === 'published' && form.watch('title') && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          const slug = slugify(form.watch('title'));
                          window.open(`/souffle/article/${slug}`, '_blank');
                        }}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Featured Image */}
              <Card>
                <CardHeader>
                  <CardTitle>Image à la une</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {form.watch('featured_image') && (
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img
                        src={form.watch('featured_image')}
                        alt="Image à la une"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div>
                    <Label htmlFor="image-upload" className="cursor-pointer">
                      <Button type="button" variant="outline" disabled={uploading} asChild>
                        <span>
                          <Upload className="h-4 w-4 mr-2" />
                          {uploading ? 'Téléchargement...' : 'Télécharger une image'}
                        </span>
                      </Button>
                    </Label>
                    <Input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="featured_image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>URL de l'image</FormLabel>
                        <FormControl>
                          <Input placeholder="https://..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Category */}
              <Card>
                <CardHeader>
                  <CardTitle>Catégorie</CardTitle>
                </CardHeader>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="category_id"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionner une catégorie" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="none">Aucune catégorie</SelectItem>
                            {categories.map((category) => (
                              <SelectItem key={category.id} value={category.id}>
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tags.map((tag) => (
                      <div key={tag.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={tag.id}
                          checked={selectedTags.includes(tag.id)}
                          onCheckedChange={(checked) => 
                            handleTagChange(tag.id, checked as boolean)
                          }
                        />
                        <Label htmlFor={tag.id} className="text-sm">
                          {tag.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}