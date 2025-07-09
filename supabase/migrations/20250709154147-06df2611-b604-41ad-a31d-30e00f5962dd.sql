-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('blog-images', 'blog-images', true);

-- Create blog categories table
CREATE TABLE public.blog_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog tags table
CREATE TABLE public.blog_tags (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog articles table
CREATE TABLE public.blog_articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image TEXT,
  category_id UUID REFERENCES public.blog_categories(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create junction table for article tags
CREATE TABLE public.blog_article_tags (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  article_id UUID NOT NULL REFERENCES public.blog_articles(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES public.blog_tags(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(article_id, tag_id)
);

-- Enable RLS on all tables
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_article_tags ENABLE ROW LEVEL SECURITY;

-- Public read policies for blog content
CREATE POLICY "Anyone can view published articles" 
ON public.blog_articles 
FOR SELECT 
USING (status = 'published');

CREATE POLICY "Anyone can view categories" 
ON public.blog_categories 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can view tags" 
ON public.blog_tags 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can view article tags" 
ON public.blog_article_tags 
FOR SELECT 
USING (true);

-- Admin policies for full access
CREATE POLICY "Admin can manage articles" 
ON public.blog_articles 
FOR ALL 
USING (true);

CREATE POLICY "Admin can manage categories" 
ON public.blog_categories 
FOR ALL 
USING (true);

CREATE POLICY "Admin can manage tags" 
ON public.blog_tags 
FOR ALL 
USING (true);

CREATE POLICY "Admin can manage article tags" 
ON public.blog_article_tags 
FOR ALL 
USING (true);

-- Create indexes for performance
CREATE INDEX idx_blog_articles_status ON public.blog_articles(status);
CREATE INDEX idx_blog_articles_published_at ON public.blog_articles(published_at);
CREATE INDEX idx_blog_articles_category ON public.blog_articles(category_id);
CREATE INDEX idx_blog_articles_slug ON public.blog_articles(slug);
CREATE INDEX idx_blog_article_tags_article ON public.blog_article_tags(article_id);
CREATE INDEX idx_blog_article_tags_tag ON public.blog_article_tags(tag_id);

-- Create updated_at triggers
CREATE TRIGGER update_blog_categories_updated_at
  BEFORE UPDATE ON public.blog_categories
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_articles_updated_at
  BEFORE UPDATE ON public.blog_articles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage policies for blog images
CREATE POLICY "Blog images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'blog-images');

CREATE POLICY "Admin can upload blog images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Admin can update blog images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'blog-images');

CREATE POLICY "Admin can delete blog images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'blog-images');

-- Insert default category
INSERT INTO public.blog_categories (name, slug, description) 
VALUES ('Général', 'general', 'Articles généraux du blog');

-- Insert some default tags
INSERT INTO public.blog_tags (name, slug) 
VALUES 
  ('Conseils', 'conseils'),
  ('Actualités', 'actualites'),
  ('Guide', 'guide'),
  ('Témoignage', 'temoignage');