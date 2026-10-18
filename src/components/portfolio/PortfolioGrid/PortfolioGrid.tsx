import React from 'react';
import type { PortfolioProject } from '../../../types/portfolio';
import { ProjectCard } from '../../common/ProjectCard/ProjectCard';
import { Button } from '../../common/Button/Button';
import { useLanguage } from '../../../i18n';
import styles from './PortfolioGrid.module.scss';

export interface PortfolioGridProps {
  projects: PortfolioProject[];
  onResetFilter?: () => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  projects,
  onResetFilter,
}) => {
  const { t } = useLanguage();

  if (projects.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon} aria-hidden="true">
          📁
        </div>
        <h3 className={styles.emptyTitle}>{t.portfolio.emptyState.title}</h3>
        <p className={styles.emptyDesc}>{t.portfolio.emptyState.desc}</p>
        {onResetFilter && (
          <Button variant="outline" size="sm" onClick={onResetFilter}>
            {t.portfolio.emptyState.reset}
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
};
