import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle2, Layers, Briefcase, Award, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../i18n';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import type { ProjectStatus } from '../../types/portfolio';
import { Badge } from '../../components/common/Badge/Badge';
import { Button } from '../../components/common/Button/Button';
import { usePageMetadata } from '../../utils/metadata';
import styles from './ProjectDetail.module.scss';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language, getLocalized } = useLanguage();

  const project = PORTFOLIO_DATA.find((p) => p.slug === slug);

  const title = project ? getLocalized(project.title) : 'Project';
  const summary = project ? getLocalized(project.summary) : '';

  usePageMetadata({
    title: project ? `${title} — Project Detail` : 'Project Not Found',
    description: summary,
  });

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const background = getLocalized(project.background);
  const solution = getLocalized(project.solution);
  const keyFeatures = project.keyFeatures[language] || project.keyFeatures.id;
  const role = getLocalized(project.role);
  const results = project.results ? getLocalized(project.results) : null;

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

  return (
    <article className={styles.projectDetailWrapper}>
      <div className="container">
        {/* Back Link */}
        <div className={styles.backRow}>
          <Link to="/portfolio" className={styles.backBtn}>
            <ArrowLeft size={16} />
            <span>{t.common.backToPortfolio}</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className={styles.heroHeader}>
          <div className={styles.metaRow}>
            <Badge variant={getStatusVariant(project.status)}>
              {getStatusLabel(project.status)}
            </Badge>
            <span className={styles.categoryTag}>
              {project.category.toUpperCase()}
            </span>
          </div>

          <h1 className={styles.title}>{title}</h1>
          <p className={styles.summary}>{summary}</p>

          <div className={styles.actionsRow}>
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                variant="primary"
                size="md"
                icon={<ExternalLink size={16} />}
              >
                {t.common.livePreview}
              </Button>
            )}

            {project.repoUrl && (
              <Button
                href={project.repoUrl}
                variant="secondary"
                size="md"
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                }
              >
                {t.common.sourceCode}
              </Button>
            )}

            <Button
              to={`/contact?service=${project.category}`}
              variant="outline"
              size="md"
            >
              {t.common.requestQuote}
            </Button>
          </div>
        </header>

        {/* Main Mockup Showcase */}
        <div className={styles.mainMockupBox}>
          <img
            src={project.thumbnail}
            alt={title}
            loading="eager"
          />
        </div>

        {/* Content Breakdown Grid */}
        <div className={styles.contentGrid}>
          {/* Main Column */}
          <div className={styles.mainCol}>
            {/* Background / Problem Statement */}
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionBlockTitle}>
                {t.portfolio.detail.background}
              </h2>
              <p className={styles.sectionText}>{background}</p>
            </section>

            {/* Implemented Solution */}
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionBlockTitle}>
                {t.portfolio.detail.solution}
              </h2>
              <p className={styles.sectionText}>{solution}</p>
            </section>

            {/* Key Features */}
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionBlockTitle}>
                {t.portfolio.detail.keyFeatures}
              </h2>
              <ul className={styles.featuresList}>
                {keyFeatures.map((feat, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <CheckCircle2 size={18} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Verified Results (if available) */}
            {results && (
              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionBlockTitle}>
                  <Award size={20} color="#D4B36B" />
                  <span>{t.portfolio.detail.results}</span>
                </h2>
                <p className={styles.sectionText}>{results}</p>
              </section>
            )}

            {/* Screenshots Gallery */}
            {project.screenshots && project.screenshots.length > 0 && (
              <section>
                <h2 className={styles.sectionBlockTitle} style={{ marginBottom: '1.5rem' }}>
                  {t.portfolio.detail.screenshots}
                </h2>
                <div className={styles.screenshotsGrid}>
                  {project.screenshots.map((shot, idx) => (
                    <figure key={idx} className={styles.screenshotCard}>
                      <img
                        src={shot.url}
                        alt={getLocalized(shot.caption)}
                        loading="lazy"
                      />
                      <figcaption className={styles.screenshotCaption}>
                        {getLocalized(shot.caption)}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Column */}
          <aside className={styles.sidebarCol}>
            {/* Tech Stack */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>
                <Layers size={16} style={{ display: 'inline', marginRight: '6px' }} />
                <span>{t.portfolio.detail.techStack}</span>
              </h3>
              <div className={styles.techTags}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Studio Role */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>
                <Briefcase size={16} style={{ display: 'inline', marginRight: '6px' }} />
                <span>{t.portfolio.detail.role}</span>
              </h3>
              <p className={styles.roleText}>{role}</p>
            </div>
          </aside>
        </div>

        {/* Bottom CTA Banner */}
        <div className={styles.bottomCtaBanner}>
          <h2 style={{ color: '#F5F3EE', fontSize: '1.75rem', marginBottom: '0.75rem' }}>
            {t.portfolio.detail.ctaTitle}
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '640px', margin: '0 auto 1.5rem auto' }}>
            {t.portfolio.detail.ctaDesc}
          </p>
          <Button
            to={`/contact?service=${project.category}`}
            variant="primary"
            size="lg"
            icon={<ArrowUpRight size={18} />}
          >
            {t.common.requestQuote}
          </Button>
        </div>
      </div>
    </article>
  );
};
