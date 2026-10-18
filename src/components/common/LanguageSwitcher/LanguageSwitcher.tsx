import React from 'react';
import { useLanguage } from '../../../i18n';
import styles from './LanguageSwitcher.module.scss';

export interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`${styles.switcher} ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        className={`${styles.langBtn} ${language === 'id' ? styles.active : ''}`}
        onClick={() => setLanguage('id')}
        aria-pressed={language === 'id'}
        aria-label="Pilih Bahasa Indonesia"
      >
        ID
      </button>
      <button
        type="button"
        className={`${styles.langBtn} ${language === 'en' ? styles.active : ''}`}
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        aria-label="Select English language"
      >
        EN
      </button>
    </div>
  );
};
