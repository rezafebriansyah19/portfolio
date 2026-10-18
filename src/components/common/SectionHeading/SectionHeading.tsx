import React from 'react';
import { Badge } from '../Badge/Badge';
import styles from './SectionHeading.module.scss';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  as = 'h2',
}) => {
  const TitleTag = as;

  return (
    <div className={`${styles.sectionHeading} ${styles[align]} ${className}`}>
      {badge && (
        <div className={styles.badgeWrapper}>
          <Badge variant="gold">{badge}</Badge>
        </div>
      )}
      <TitleTag className={styles.title}>{title}</TitleTag>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};
