import { createContext } from 'react';
import type { idTranslations } from './id';

export type Language = 'id' | 'en';
export type Translations = typeof idTranslations;

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  getLocalized: (obj?: { id?: string; en?: string } | null) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
