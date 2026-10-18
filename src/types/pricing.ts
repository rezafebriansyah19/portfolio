export type PricingCategory = 'website' | 'mobile' | 'uiux' | 'invitation';

export interface PriceFeatureSet {
  id: string[];
  en: string[];
}

export interface PricingPackage {
  id: string;
  category: PricingCategory;
  name: {
    id: string;
    en: string;
  };
  startingFrom: string;
  startingFromRaw: number;
  targetAudience: {
    id: string;
    en: string;
  };
  summary: {
    id: string;
    en: string;
  };
  features: PriceFeatureSet;
  ctaLabel: {
    id: string;
    en: string;
  };
  whatsappService: string;
  popular?: boolean;
  note?: {
    id: string;
    en: string;
  };
}
