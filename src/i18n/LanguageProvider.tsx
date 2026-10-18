import React, { useState, useEffect } from 'react';
import { idTranslations } from './id';
import { enTranslations } from './en';
import { LanguageContext } from './context';
import type { Language } from './context';

const STORAGE_KEY = 'sidqaven_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'id' || stored === 'en') {
        return stored;
      }
    } catch {
      // Ignore localStorage errors
    }
    return 'id';
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      document.documentElement.lang = newLang;
    } catch {
      // Ignore localStorage errors
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = language === 'en' ? enTranslations : idTranslations;

  const getLocalized = (obj?: { id?: string; en?: string } | null): string => {
    if (!obj) return '';
    return obj[language] || obj.id || obj.en || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLocalized }}>
      {children}
    </LanguageContext.Provider>
  );
};
