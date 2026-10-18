import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import type { PortfolioCategory } from '../../types/portfolio';
import { SectionHeading } from '../../components/common/SectionHeading/SectionHeading';
import { PortfolioFilter } from '../../components/portfolio/PortfolioFilter/PortfolioFilter';
import { PortfolioGrid } from '../../components/portfolio/PortfolioGrid/PortfolioGrid';
import { usePageMetadata } from '../../utils/metadata';
import styles from './Portfolio.module.scss';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  usePageMetadata({
    title: t.portfolio.title,
    description: t.portfolio.subtitle,
  });

  const categoryParam = searchParams.get('category') as PortfolioCategory | null;
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>(
    categoryParam && ['all', 'website', 'mobile', 'uiux', 'invitation'].includes(categoryParam)
      ? categoryParam
      : 'all'
  );

  const handleSelectCategory = (cat: PortfolioCategory) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const filteredProjects =
    activeCategory === 'all'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  return (
    <div>
      <section className={styles.headerSection}>
        <div className="container">
          <SectionHeading
            badge={t.portfolio.badge}
            title={t.portfolio.title}
            subtitle={t.portfolio.subtitle}
            align="center"
            as="h1"
          />
        </div>
      </section>

      <section className={styles.portfolioSection}>
        <div className="container">
          <PortfolioFilter
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
          />

          <PortfolioGrid
            projects={filteredProjects}
            onResetFilter={() => handleSelectCategory('all')}
          />
        </div>
      </section>
    </div>
  );
};
