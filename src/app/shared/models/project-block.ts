export interface ProjectOverviewData {
  title: string;
  highlightedTitle?: string;
  impactStatement: string;
}

export interface ProjectMediaItem {
  src: string;
  alt?: string;
  caption?: string;
  variant?: 'standard' | 'mockup';
  hasGlow?: boolean;
}

export interface ProjectMediaData {
  src?: string;
  alt?: string;
  caption?: string;
  variant?: 'standard' | 'mockup';
  hasGlow?: boolean;
  images?: ProjectMediaItem[];
}

export interface ProjectTextSectionData {
  id: string;
  title: string;
  paragraphs: string[];
  listItems?: string[];
}

export interface ProjectChallengeData {
  id: string;
  title: string;
  challenges: string[];
}

export interface ProjectSolutionPart {
  title: string;
  subtitle?: string;
  features: string[];
  techStack?: string[];
}

export interface ProjectSolutionGridData {
  id: string;
  title: string;
  introText?: string;
  solutions: ProjectSolutionPart[];
  techStack?: string[];
}

export interface ProjectProcessStep {
  number: number;
  title: string;
  description: string;
  duration?: string;
}

export interface ProjectProcessTimelineData {
  id: string;
  title: string;
  introText?: string;
  steps: ProjectProcessStep[];
  totalDuration?: string;
}

export interface ProjectMetricItem {
  value: string | number;
  label: string;
  icon?: string;
}

export interface ProjectImpactMetricsData {
  id: string;
  title: string;
  introText?: string;
  metrics: ProjectMetricItem[];
  imageSrc?: string;
  imageAlt?: string;
}

export interface ProjectCtaData {
  id?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
}

export interface ProjectTechStackData {
  id?: string;
  title: string;
  description?: string;
  tags: string[];
}

export interface ProjectHighlightCardItem {
  title?: string;
  text: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
}

export interface ProjectHighlightCardsData {
  id?: string;
  title?: string;
  introText?: string;
  cards: ProjectHighlightCardItem[];
}

export interface ProjectGalleryItem {
  src: string;
  alt?: string;
  caption?: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export interface ProjectGalleryData {
  id?: string;
  title?: string;
  introText?: string;
  images: ProjectGalleryItem[];
}

export interface ProjectC4DiagramData {
  id?: string;
  title?: string;
  introText?: string;
  imageSrc: string;
  imageAlt?: string;
  caption?: string;
}

export type ProjectBlock =
  | { type: 'overview'; data: ProjectOverviewData }
  | { type: 'media'; data: ProjectMediaData }
  | { type: 'text'; data: ProjectTextSectionData }
  | { type: 'challenges'; data: ProjectChallengeData }
  | { type: 'solution'; data: ProjectSolutionGridData }
  | { type: 'c4-diagram'; data: ProjectC4DiagramData }
  | { type: 'process'; data: ProjectProcessTimelineData }
  | { type: 'impact'; data: ProjectImpactMetricsData }
  | { type: 'tech'; data: ProjectTechStackData }
  | { type: 'highlight-cards'; data: ProjectHighlightCardsData }
  | { type: 'gallery'; data: ProjectGalleryData }
  | { type: 'cta'; data: ProjectCtaData };
