export interface FeaturedProject {
  id: string;
  name: string;
  category: string;
  type: "Personal Project" | "Client Project" | "Concept Project" | "Web Application";
  description: string;
  technologies: string[];
  features: string[];
  videoSrc: string;
  videoType: "local" | "youtube" | "hosted";
  posterSrc: string;
  liveUrl?: string;
  githubUrl?: string;
  hostingNote: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number;
  tag: string;
}

export interface FictionalConcept {
  id: string;
  name: string;
  category: string;
  conceptNumber: string;
  tagline: string;
  description: string;
  visualIdentity: string;
  palette: { name: string; hex: string }[];
  heroImage: string;
  features: string[];
  menuItems?: { name: string; description: string; price: string }[];
  products?: ProductItem[];
  services?: { name: string; description: string }[];
  hours?: string[];
  location?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export interface ProcessStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface BudgetTier {
  id: string;
  name: string;
  target: string;
  description: string;
  scope: string[];
  timeline: string;
  ctaText: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  label: string;
  conceptName: string;
  image: string;
  description: string;
  characteristics: string[];
  techStack: string[];
}
