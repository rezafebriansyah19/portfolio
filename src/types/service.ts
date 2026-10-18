export type ServiceCategory = 'website' | 'mobile' | 'uiux' | 'invitation';

export interface ServiceItem {
  id: ServiceCategory;
  title: {
    id: string;
    en: string;
  };
  shortDescription: {
    id: string;
    en: string;
  };
  fullDescription: {
    id: string;
    en: string;
  };
  icon: string;
  benefits: {
    id: string[];
    en: string[];
  };
  problemsSolved: {
    id: string[];
    en: string[];
  };
  deliverables: {
    id: string[];
    en: string[];
  };
  workflow: {
    id: { step: string; desc: string }[];
    en: { step: string; desc: string }[];
  };
}
