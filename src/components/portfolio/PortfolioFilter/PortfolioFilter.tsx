import React from 'react';
import type { PortfolioCategory } from '../../../types/portfolio';
import { useLanguage } from '../../../i18n';
import styles from './PortfolioFilter.module.scss';

export interface PortfolioFilterProps {
  activeCategory: PortfolioCategory;
  onSelectCategory: (category: PortfolioCategory) => void;
}

export const PortfolioFilter: React.FC<PortfolioFilterProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const { t } = useLanguage();

  const categories: { key: PortfolioCategory; label: string }[] = [
    { key: 'all', label: t.portfolio.filters.all },
    { key: 'website', label: t.portfolio.filters.website },
    { key: 'mobile', label: t.portfolio.filters.mobile },
    { key: 'uiux', label: t.portfolio.filters.uiux },
    { key: 'invitation', label: t.portfolio.filters.invitation },
  ];

  return (
    <div
      className={styles.filterContainer}
      role="tablist"
      aria-label="Filter portfolio by category"
    >
      {categories.map((cat) => (
        <button
          key={cat.key}
          type="button"
          role="tab"
          aria-selected={activeCategory === cat.key}
          className={`${styles.filterBtn} ${
            activeCategory === cat.key ? styles.active : ''
          }`}
          onClick={() => onSelectCategory(cat.key)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};
