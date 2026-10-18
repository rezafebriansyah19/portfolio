import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { PortfolioProject, ProjectStatus } from '../../../types/portfolio';
import { useLanguage } from '../../../i18n';
import { Badge } from '../Badge/Badge';
import styles from './ProjectCard.module.scss';

export interface ProjectCardProps {
  project: PortfolioProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t, getLocalized } = useLanguage();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const title = getLocalized(project.title);
  const summary = getLocalized(project.summary);

  const getStatusVariant = (status: ProjectStatus): 'real' | 'demo' | 'concept' => {
    switch (status) {
      case 'REAL PROJECT':
        return 'real';
      case 'DEMO PROJECT':
        return 'demo';
      case 'UI/UX CONCEPT':
        return 'concept';
      default:
        return 'real';
    }
  };

  const getStatusLabel = (status: ProjectStatus): string => {
    switch (status) {
      case 'REAL PROJECT':
        return t.portfolio.status.real;
      case 'DEMO PROJECT':
        return t.portfolio.status.demo;
      case 'UI/UX CONCEPT':
        return t.portfolio.status.concept;
      default:
        return status;
    }
  };

  const getCategoryLabel = (category: string): string => {
    switch (category) {
      case 'website':
        return 'Website';
      case 'mobile':
        return 'Mobile App';
      case 'uiux':
        return 'UI/UX Design';
      case 'invitation':
        return 'Digital Invitation';
      default:
        return category;
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x: y, y: x });
  };

  const handlePointerLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className={styles.card}
      style={{
        transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-2px)`,
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className={styles.thumbnailWrapper}>
        <img
          src={project.thumbnail}
          alt={title}
          className={styles.thumbnail}
          loading="lazy"
        />
        <div className={styles.statusBadgeWrapper}>
          <Badge variant={getStatusVariant(project.status)}>
            {getStatusLabel(project.status)}
          </Badge>
        </div>
        <div className={styles.categoryTag}>
          {getCategoryLabel(project.category)}
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>

        {project.technologies && project.technologies.length > 0 && (
          <div className={styles.techRow}>
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className={styles.techItem}>
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className={styles.techItem}>
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        )}

        <div className={styles.viewDetail}>
          <span>{t.common.viewDetail}</span>
          <ArrowUpRight size={14} />
        </div>
      </div>
    </Link>
  );
};
