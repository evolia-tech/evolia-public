export interface Testimonial {
  id: number;
  type: 'video' | 'text'; // Le discriminant
  authorName: string;
  authorRole: string;
  companyName: string;
  companyLogo?: string; // Chemin vers le logo
  image: string; // Photo de la personne ou Thumbnail vidéo

  // Contenu
  content?: string; // Le texte complet (pour le type 'text')
  summary?: string; // Le résumé court (pour le type 'video')
  videoUrl?: string; // Lien Youtube/Vimeo (pour le type 'video')
}
