import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { BlogArticleWithRelations, BlogCategory, BlogTag } from '@/types/blog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Calendar, Tag, User } from 'lucide-react';

export default function BlogHome() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState<BlogArticleWithRelations[]>([]);
  const [heroArticle, setHeroArticle] = useState<BlogArticleWithRelations | null>(null);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [tags, setTags] = useState<BlogTag[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedTag, setSelectedTag] = useState(searchParams.get('tag') || 'all');

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  const fetchData = async () => {
    setLoading(true);
    
    // Fetch categories and tags
    const [categoriesResult, tagsResult] = await Promise.all([
      supabase.from('blog_categories').select('*').order('name'),
      supabase.from('blog_tags').select('*').order('name')
    ]);

    if (categoriesResult.data) setCategories(categoriesResult.data);
    if (tagsResult.data) setTags(tagsResult.data);

    // Build query for articles
    let query = supabase
      .from('blog_articles')
      .select(`
        *,
        blog_categories(*),
        blog_article_tags(
          blog_tags(*)
        )
      `)
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    // Apply filters
    if (searchTerm) {
      query = query.or(`title.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`);
    }
    
    if (selectedCategory && selectedCategory !== 'all') {
      const category = categories.find(c => c.slug === selectedCategory);
      if (category) {
        query = query.eq('category_id', category.id);
      }
    }

    const { data: articlesData } = await query;

    if (articlesData) {
      let filteredArticles = articlesData;

      // Filter by tag if selected
      if (selectedTag && selectedTag !== 'all') {
        filteredArticles = articlesData.filter(article => 
          article.blog_article_tags?.some(at => at.blog_tags.slug === selectedTag)
        );
      }

      // Set hero article (most recent)
      if (filteredArticles.length > 0) {
        setHeroArticle(filteredArticles[0]);
        setArticles(filteredArticles.slice(1));
      } else {
        setHeroArticle(null);
        setArticles([]);
      }
    }

    setLoading(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateSearchParams({ search: searchTerm });
  };

  const updateSearchParams = (params: Record<string, string>) => {
    const newSearchParams = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([key, value]) => {
      if (value && value !== 'all') {
        newSearchParams.set(key, value);
      } else {
        newSearchParams.delete(key);
      }
    });
    setSearchParams(newSearchParams);
  };

  const handleCategoryClick = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    updateSearchParams({ category: categorySlug });
  };

  const handleTagClick = (tagSlug: string) => {
    setSelectedTag(tagSlug);
    updateSearchParams({ tag: tagSlug });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="mortel-titre-hero text-foreground mb-4">SOUFFLE</h1>
            <p className="mortel-text-introdution text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos articles, conseils et témoignages pour vous accompagner dans vos démarches
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </form>

            <div className="flex flex-wrap gap-4 mb-8">
              <Select value={selectedCategory} onValueChange={(value) => {
                setSelectedCategory(value);
                updateSearchParams({ category: value });
              }}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Toutes les catégories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.slug}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTag} onValueChange={(value) => {
                setSelectedTag(value);
                updateSearchParams({ tag: value });
              }}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Tous les tags" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les tags</SelectItem>
                  {tags.map((tag) => (
                    <SelectItem key={tag.id} value={tag.slug}>
                      {tag.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {(searchTerm || (selectedCategory && selectedCategory !== 'all') || (selectedTag && selectedTag !== 'all')) && (
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedTag('all');
                    setSearchParams(new URLSearchParams());
                  }}
                >
                  Effacer les filtres
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Article */}
        {heroArticle && (
          <section className="mb-12">
            <Card className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Image fixe à gauche */}
                {heroArticle.featured_image && (
                  <div className="md:w-1/2 order-1 md:order-1">
                    <Link to={`/souffle/article/${heroArticle.slug}`} className="block h-full">
                      <img
                        src={heroArticle.featured_image}
                        alt={heroArticle.title}
                        className="w-full h-64 md:h-[400px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        style={{ borderRadius: '40px' }}
                      />
                    </Link>
                  </div>
                )}
                
                {/* Contenu structuré à droite */}
                <div className={`${heroArticle.featured_image ? "md:w-1/2" : "w-full"} p-8 order-2 md:order-2 flex flex-col justify-between`}>
                  <div>
                    {/* Métadonnées */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      {heroArticle.published_at && formatDate(heroArticle.published_at)}
                      {heroArticle.blog_categories && (
                        <>
                          <span>•</span>
                          <Badge 
                            variant="secondary" 
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                            onClick={() => handleCategoryClick(heroArticle.blog_categories.slug)}
                          >
                            {heroArticle.blog_categories.name}
                          </Badge>
                        </>
                      )}
                    </div>
                    
                    {/* Titre */}
                    <h2 className="mortel-title text-foreground mb-4" style={{ fontSize: '2rem', lineHeight: '1.2em' }}>
                      {heroArticle.title}
                    </h2>
                    
                    {/* Résumé */}
                    {heroArticle.excerpt && (
                      <p className="mortel-text text-muted-foreground mb-6 text-lg leading-relaxed">
                        {heroArticle.excerpt}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {heroArticle.blog_article_tags?.map((articleTag) => (
                        <Badge 
                          key={articleTag.blog_tags.id} 
                          variant="outline"
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                          onClick={() => handleTagClick(articleTag.blog_tags.slug)}
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {articleTag.blog_tags.name}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Bouton */}
                    <Button asChild className="w-full md:w-auto">
                      <Link to={`/souffle/article/${heroArticle.slug}`}>
                        Lire l'article
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Articles Grid */}
        {articles.length > 0 && (
          <section>
            <h2 className="mortel-title text-foreground mb-8" style={{ fontSize: '1.5rem' }}>
              {heroArticle ? 'Autres articles' : 'Nos articles'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {article.featured_image && (
                    <div className="aspect-video">
                      <Link to={`/souffle/article/${article.slug}`}>
                        <img
                          src={article.featured_image}
                          alt={article.title}
                          className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                          style={{ borderRadius: '20px' }}
                        />
                      </Link>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {article.published_at && formatDate(article.published_at)}
                      {article.blog_categories && (
                        <>
                          <span>•</span>
                          <Badge 
                            variant="secondary" 
                            className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                            onClick={() => handleCategoryClick(article.blog_categories.slug)}
                          >
                            {article.blog_categories.name}
                          </Badge>
                        </>
                      )}
                    </div>
                    <CardTitle className="mortel-title line-clamp-2" style={{ fontSize: '1.1rem', textTransform: 'none' }}>
                      {article.title}
                    </CardTitle>
                    {article.excerpt && (
                      <CardDescription className="mortel-text line-clamp-3">
                        {article.excerpt}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {article.blog_article_tags?.slice(0, 2).map((articleTag) => (
                          <Badge 
                            key={articleTag.blog_tags.id} 
                            variant="outline" 
                            className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                            onClick={() => handleTagClick(articleTag.blog_tags.slug)}
                          >
                            {articleTag.blog_tags.name}
                          </Badge>
                        ))}
                        {article.blog_article_tags && article.blog_article_tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{article.blog_article_tags.length - 2}
                          </Badge>
                        )}
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/souffle/article/${article.slug}`}>
                          Lire
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* No articles message */}
        {!heroArticle && articles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl text-muted-foreground mb-4">📝</div>
            <h2 className="mortel-title text-foreground mb-2">Aucun article trouvé</h2>
            <p className="mortel-text text-muted-foreground mb-6">
              Aucun article ne correspond à vos critères de recherche.
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedTag('all');
                setSearchParams(new URLSearchParams());
              }}
            >
              Voir tous les articles
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}