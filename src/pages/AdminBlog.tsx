import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { BlogArticleWithRelations } from '@/types/blog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminBlog() {
  const { toast } = useToast();
  const [articles, setArticles] = useState<BlogArticleWithRelations[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    
    const { data, error } = await supabase
      .from('blog_articles')
      .select(`
        *,
        blog_categories(*),
        blog_article_tags(
          blog_tags(*)
        )
      `)
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les articles",
        variant: "destructive",
      });
    } else if (data) {
      setArticles(data);
    }

    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    
    // Delete article tags first (cascade should handle this, but being explicit)
    await supabase
      .from('blog_article_tags')
      .delete()
      .eq('article_id', id);

    // Delete the article
    const { error } = await supabase
      .from('blog_articles')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de supprimer l'article",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Article supprimé",
        description: "L'article a été supprimé avec succès",
      });
      fetchArticles();
    }

    setDeletingId(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestion du Blog</h1>
          <p className="text-muted-foreground">Gérez vos articles de blog</p>
        </div>
        <Button asChild>
          <Link to="/admin/blog/nouveau">
            <Plus className="h-4 w-4 mr-2" />
            Nouvel article
          </Link>
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Rechercher</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher dans les articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Articles Table */}
      <Card>
        <CardHeader>
          <CardTitle>Articles ({filteredArticles.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredArticles.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-6xl text-muted-foreground mb-4">📝</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Aucun article</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm ? 'Aucun article ne correspond à votre recherche.' : 'Commencez par créer votre premier article.'}
              </p>
              {!searchTerm && (
                <Button asChild>
                  <Link to="/admin/blog/nouveau">
                    <Plus className="h-4 w-4 mr-2" />
                    Créer un article
                  </Link>
                </Button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Titre</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Catégorie</TableHead>
                    <TableHead>Tags</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredArticles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{article.title}</div>
                          {article.excerpt && (
                            <div className="text-sm text-muted-foreground line-clamp-1">
                              {article.excerpt}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={article.status === 'published' ? 'default' : 'secondary'}
                        >
                          {article.status === 'published' ? 'Publié' : 'Brouillon'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {article.blog_categories?.name || 'Sans catégorie'}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {article.blog_article_tags?.slice(0, 2).map((articleTag) => (
                            <Badge key={articleTag.blog_tags.id} variant="outline" className="text-xs">
                              {articleTag.blog_tags.name}
                            </Badge>
                          ))}
                          {article.blog_article_tags && article.blog_article_tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{article.blog_article_tags.length - 2}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{formatDate(article.created_at)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {article.status === 'published' && (
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/souffle/article/${article.slug}`} target="_blank">
                                <Eye className="h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/admin/blog/modifier/${article.id}`}>
                              <Edit className="h-4 w-4" />
                            </Link>
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                disabled={deletingId === article.id}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Supprimer l'article</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Êtes-vous sûr de vouloir supprimer l'article "{article.title}" ? 
                                  Cette action est irréversible.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Annuler</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDelete(article.id)}
                                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                >
                                  Supprimer
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}