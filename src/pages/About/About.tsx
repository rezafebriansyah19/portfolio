import React from 'react';
import { Compass, Target, Shield, BookOpen, Lightbulb, HeartHandshake, CheckCircle2, ArrowUpRight } from 'lucide-react';
import studioImage from '../../assets/za.png';
import { useLanguage } from '../../i18n';
import { SITE_CONFIG } from '../../config/site';
import { SectionHeading } from '../../components/common/SectionHeading/SectionHeading';
import { Badge } from '../../components/common/Badge/Badge';
import { Button } from '../../components/common/Button/Button';
import { usePageMetadata } from '../../utils/metadata';
import styles from './About.module.scss';

export const About: React.FC = () => {
  const { t, getLocalized } = useLanguage();

  usePageMetadata({
    title: t.about.title,
    description: t.about.narrativeText,
  });

  const principleIcons = [
    <Shield size={24} />,
    <BookOpen size={24} />,
    <Lightbulb size={24} />,
    <HeartHandshake size={24} />,
  ];

  return (
    <div>
      <section className={styles.headerSection}>
        <div className="container">
          <SectionHeading
            badge={t.about.badge}
            title={t.about.title}
            subtitle={t.about.subtitle}
            align="center"
            as="h1"
          />
        </div>
      </section>

      <div className={`container ${styles.aboutContent}`}>
        {/* Core Brand Narrative */}
        <section className={styles.narrativeBox}>
          <div className={styles.narrativeCopy}>
            <div className={styles.narrativeBadge}>
              <Badge variant="gold">FILOSOFI STUDIO</Badge>
            </div>
            <h2 className={styles.narrativeLead}>
              "Teknologi seharusnya mempermudah pekerjaan, memperkuat daya saing bisnis, dan membuka peluang baru."
            </h2>
            <p className={styles.narrativeText}>{t.about.narrativeText}</p>
          </div>

          <figure className={styles.studioVisual}>
            <div className={styles.imageFrame}>
              <img
                className={styles.studioImage}
                src={studioImage}
                alt={t.about.studioImageAlt}
                loading="lazy"
              />
              <div className={styles.imageReflection} aria-hidden="true" />
              <div className={styles.imageCaption}>
                <span className={styles.captionMark} aria-hidden="true">S</span>
                <span>
                  <strong>SIDQAVEN</strong>
                  <small>DIGITAL SOLUTIONS &amp; CREATIVE STUDIO</small>
                </span>
              </div>
            </div>
            <figcaption className={styles.visualCaption}>{t.about.studioImageCaption}</figcaption>
          </figure>
        </section>

        {/* Vision & Mission Grid */}
        <section className={styles.vmGrid}>
          {/* Vision */}
          <div className={styles.vmCard}>
            <div className={styles.vmIcon}>
              <Compass size={24} />
            </div>
            <h2 className={styles.vmTitle}>{t.about.visionTitle}</h2>
            <p className={styles.vmText}>{t.about.visionText}</p>
          </div>

          {/* Mission */}
          <div className={styles.vmCard}>
            <div className={styles.vmIcon}>
              <Target size={24} />
            </div>
            <h2 className={styles.vmTitle}>{t.about.missionTitle}</h2>
            <ul className={styles.missionList}>
              {t.about.missions.map((mission, idx) => (
                <li key={idx} className={styles.missionItem}>
                  <CheckCircle2 size={18} />
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Brand Principles */}
        <section className={styles.principlesSection}>
          <h2 className={styles.principlesTitle}>{t.about.principlesTitle}</h2>

          <div className={styles.principlesGrid}>
            {SITE_CONFIG.principles.map((pr, idx) => (
              <div key={idx} className={styles.principleCard}>
                <div className={styles.principleIcon}>
                  {principleIcons[idx % principleIcons.length]}
                </div>
                <h3 className={styles.principleTitle}>{getLocalized(pr.title)}</h3>
                <p className={styles.principleDesc}>{getLocalized(pr.desc)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <Button
            to="/contact"
            variant="primary"
            size="lg"
            icon={<ArrowUpRight size={18} />}
          >
            {t.nav.discussProject}
          </Button>
        </div>
      </div>
    </div>
  );
};
