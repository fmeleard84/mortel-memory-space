import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { BlogArticleWithRelations } from '@/types/blog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, Tag, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const [article, setArticle] = useState<BlogArticleWithRelations | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<BlogArticleWithRelations[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  const fetchArticle = async () => {
    if (!slug) return;

    setLoading(true);
    
    // Fetch the article
    const { data: articleData, error } = await supabase
      .from('blog_articles')
      .select(`
        *,
        blog_categories(*),
        blog_article_tags(
          blog_tags(*)
        )
      `)
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error || !articleData) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    setArticle(articleData);

    // Fetch related articles (same category, exclude current article)
    if (articleData.category_id) {
      const { data: relatedData } = await supabase
        .from('blog_articles')
        .select(`
          *,
          blog_categories(*),
          blog_article_tags(
            blog_tags(*)
          )
        `)
        .eq('category_id', articleData.category_id)
        .eq('status', 'published')
        .neq('id', articleData.id)
        .order('published_at', { ascending: false })
        .limit(3);

      if (relatedData) {
        setRelatedArticles(relatedData);
      }
    }

    setLoading(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article?.title,
          text: article?.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Lien copié",
          description: "Le lien de l'article a été copié dans le presse-papiers",
        });
      } catch (error) {
        toast({
          title: "Erreur",
          description: "Impossible de copier le lien",
          variant: "destructive",
        });
      }
    }
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

  if (notFound) {
    return <Navigate to="/souffle" replace />;
  }

  if (!article) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link to="/souffle" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au blog
              </Link>
            </Button>
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Partager
            </Button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {article.featured_image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={article.featured_image}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          )}

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              {article.published_at && formatDate(article.published_at)}
              {article.blog_categories && (
                <>
                  <span>•</span>
                  <Badge variant="secondary">{article.blog_categories.name}</Badge>
                </>
              )}
            </div>

            <h1 className="mortel-titre-hero text-foreground mb-6 leading-tight">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="mortel-text-introdution text-muted-foreground leading-relaxed mb-6">
                {article.excerpt}
              </p>
            )}

            {/* Tags */}
            {article.blog_article_tags && article.blog_article_tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {article.blog_article_tags.map((articleTag) => (
                  <Badge key={articleTag.blog_tags.id} variant="outline">
                    <Tag className="h-3 w-3 mr-1" />
                    {articleTag.blog_tags.name}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="max-w-4xl mx-auto mt-16 pt-8 border-t">
            <h2 className="mortel-title text-foreground mb-8">Articles similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Card key={relatedArticle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {relatedArticle.featured_image && (
                    <div className="aspect-video">
                      <Link to={`/souffle/article/${relatedArticle.slug}`}>
                        <img
                          src={relatedArticle.featured_image}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                          style={{ borderRadius: '20px' }}
                        />
                      </Link>
                    </div>
                  )}
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" />
                      {relatedArticle.published_at && formatDate(relatedArticle.published_at)}
                    </div>
                    <h3 className="mortel-title text-foreground mb-2 line-clamp-2" style={{ fontSize: '1.1rem', textTransform: 'none' }}>
                      {relatedArticle.title}
                    </h3>
                    {relatedArticle.excerpt && (
                      <p className="mortel-text text-sm text-muted-foreground mb-3 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                    )}
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to={`/souffle/article/${relatedArticle.slug}`}>
                        Lire l'article
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}