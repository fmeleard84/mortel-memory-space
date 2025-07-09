export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featured_image?: string;
  category_id?: string;
  status: 'draft' | 'published';
  published_at?: string;
  created_at: string;
  updated_at: string;
  category?: BlogCategory;
  tags?: BlogTag[];
}

export interface BlogArticleWithRelations {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featured_image?: string;
  category_id?: string;
  status: string; // Allow any string from Supabase
  published_at?: string;
  created_at: string;
  updated_at: string;
  blog_categories?: BlogCategory;
  blog_article_tags?: Array<{
    blog_tags: BlogTag;
  }>;
}