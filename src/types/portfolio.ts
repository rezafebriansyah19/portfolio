export type PortfolioCategory = 'all' | 'website' | 'mobile' | 'uiux' | 'invitation';

export type ProjectStatus = 'REAL PROJECT' | 'DEMO PROJECT' | 'UI/UX CONCEPT';

export interface ProjectScreenshot {
  url: string;
  caption: {
    id: string;
    en: string;
  };
}

export interface PortfolioProject {
  slug: string;
  title: {
    id: string;
    en: string;
  };
  category: 'website' | 'mobile' | 'uiux' | 'invitation';
  status: ProjectStatus;
  summary: {
    id: string;
    en: string;
  };
  background: {
    id: string;
    en: string;
  };
  solution: {
    id: string;
    en: string;
  };
  keyFeatures: {
    id: string[];
    en: string[];
  };
  technologies: string[];
  role: {
    id: string;
    en: string;
  };
  thumbnail: string;
  screenshots: ProjectScreenshot[];
  liveUrl?: string;
  repoUrl?: string;
  results?: {
    id: string;
    en: string;
  };
  featured?: boolean;
}
