export interface BlogPostItem {
    id: string;
    title: string;
    slug: string;
    imageUrl: string;
    imageAlt: string;
    description: string; // Pour les balises SEO / extraits
    publishedAt: Date;
    category: string;
}