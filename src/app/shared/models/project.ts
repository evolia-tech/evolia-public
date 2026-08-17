// shared/models/project.model.ts
export interface KeyResult {
  icon?: string;
  value?: string | number;
  label: string;
}

export interface ProjectSection {
  id: string;
  label: string;
}

export interface Project {
  id: number;
  slug: string;

  // Carrousel
  title: string;

  // Header de la modale
  clientName: string;

  // Image
  image: string;

  // Sidebar
  keyResults: KeyResult[];
  sections: ProjectSection[];

  // SEO
  seoTitle: string;
  seoDescription: string;
  keywords: string;

  // Ordre de priorité d'affichage
  order?: number;

  // Carrousel page d'accueil
  isSpotlighted?: boolean;
}
