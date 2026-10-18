import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, MessageSquare, Code2, Sparkles, Smartphone, Globe, Layout, Mail } from 'lucide-react';
import { useLanguage } from '../../i18n';
import { SERVICES_DATA } from '../../data/services';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { FAQ_DATA } from '../../data/faq';
import { SectionHeading } from '../../components/common/SectionHeading/SectionHeading';
import { ServiceCard } from '../../components/common/ServiceCard/ServiceCard';
import { ProjectCard } from '../../components/common/ProjectCard/ProjectCard';
import { Button } from '../../components/common/Button/Button';
import { Badge } from '../../components/common/Badge/Badge';
import { HeroScene } from '../../components/3d/HeroScene/HeroScene';
import { usePageMetadata } from '../../utils/metadata';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  const { t, getLocalized } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<string | null>('pricing');

  usePageMetadata({
    title: t.hero.headline + ' ' + t.hero.headlineAccent,
    description: t.hero.supporting,
  });

  const featuredProjects = PORTFOLIO_DATA.filter((p) => p.featured).slice(0, 4);

  const heroVisualItems = [
    {
      title: t.hero.visual.webArchitecture,
      subtitle: t.hero.visual.webArchitectureSub,
      badge: t.hero.visual.badgeProduction,
      icon: <Globe size={18} />,
    },
    {
      title: t.hero.visual.mobile,
      subtitle: t.hero.visual.mobileSub,
      badge: t.hero.visual.badgeNative,
      icon: <Smartphone size={18} />,
    },
    {
      title: t.hero.visual.uiux,
      subtitle: t.hero.visual.uiuxSub,
      badge: t.hero.visual.badgeFigma,
      icon: <Layout size={18} />,
    },
    {
      title: t.hero.visual.invitation,
      subtitle: t.hero.visual.invitationSub,
      badge: t.hero.visual.badgeBespoke,
      icon: <Mail size={18} />,
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {/* 1. Hero Section */}
      <section className={styles.heroSection} aria-labelledby="hero-headline">
        <div className={styles.heroGeometric} aria-hidden="true" />
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <Sparkles size={14} />
              <span>{t.hero.tagline}</span>
            </div>

            <h1 id="hero-headline" className={styles.headline}>
              {t.hero.headline}{' '}
              <span className={styles.goldHighlight}>{t.hero.headlineAccent}</span>
            </h1>

            <p className={styles.supporting}>{t.hero.supporting}</p>

            <div className={styles.ctaGroup}>
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowUpRight size={18} />}
              >
                {t.hero.ctaPrimary}
              </Button>
              <Button to="/portfolio" variant="secondary" size="lg">
                {t.hero.ctaSecondary}
              </Button>
            </div>

            {/* Target Audience Segment Chips */}
            <div className={styles.audienceRow} aria-label="Service focus">
              <span className={styles.audienceLabel}>{t.hero.focusLabel}</span>
              <span className={styles.audienceChip}>{t.hero.focusUmkm}</span>
              <span className={styles.audienceChip}>{t.hero.focusEdu}</span>
              <span className={styles.audienceChip}>{t.hero.focusOrg}</span>
              <span className={styles.audienceChip}>{t.hero.focusPersonal}</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualCard}>
              <div className={styles.visualHeader}>
                <div className={styles.visualDots}>
                  <div className={styles.dot} />
                  <div className={styles.dot} />
                  <div className={styles.dot} />
                </div>
                <div className={styles.visualBadge}>{t.hero.visual.badge}</div>
              </div>

              <div className={styles.sceneWrap}>
                <HeroScene />
              </div>

              <div className={styles.visualStack}>
                {heroVisualItems.map((item) => (
                  <div className={styles.visualItem} key={item.title}>
                    <div className={styles.visualItemIcon}>{item.icon}</div>
                    <div className={styles.visualItemText}>
                      <div className={styles.visualItemTitle}>{item.title}</div>
                      <div className={styles.visualItemSub}>{item.subtitle}</div>
                    </div>
                    <Badge variant="gold">{item.badge}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Overview Section */}
      <section className={`${styles.section} ${styles.altSection}`} aria-labelledby="services-title">
        <div className="container">
          <SectionHeading
            badge={t.servicesOverview.badge}
            title={t.servicesOverview.title}
            subtitle={t.servicesOverview.subtitle}
            align="center"
          />

          <div className={styles.servicesGrid}>
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className={styles.sectionBottomLink}>
            <Button to="/services" variant="secondary" size="md" icon={<ArrowUpRight size={16} />}>
              {t.servicesOverview.viewAll}
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects Section */}
      <section className={styles.section} aria-labelledby="featured-projects-title">
        <div className="container">
          <SectionHeading
            badge={t.featuredProjects.badge}
            title={t.featuredProjects.title}
            subtitle={t.featuredProjects.subtitle}
            align="center"
          />

          <div className={styles.servicesGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className={styles.sectionBottomLink}>
            <Button to="/portfolio" variant="secondary" size="md" icon={<ArrowUpRight size={16} />}>
              {t.featuredProjects.viewAll}
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Why SIDQAVEN (Working Principles) */}
      <section className={`${styles.section} ${styles.altSection}`} aria-labelledby="why-us-title">
        <div className="container">
          <SectionHeading
            badge={t.whyUs.badge}
            title={t.whyUs.title}
            subtitle={t.whyUs.subtitle}
            align="center"
          />

          <div className={styles.whyUsGrid}>
            {t.whyUs.principles.map((item, idx) => (
              <div key={idx} className={styles.whyUsCard}>
                <div className={styles.whyUsNumber}>0{idx + 1}</div>
                <h3 className={styles.whyUsTitle}>{item.title}</h3>
                <p className={styles.whyUsDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Process Section */}
      <section className={styles.section} id="process" aria-labelledby="process-title">
        <div className="container">
          <SectionHeading
            badge={t.process.badge}
            title={t.process.title}
            subtitle={t.process.subtitle}
            align="center"
          />

          <div className={styles.processGrid}>
            {t.process.steps.map((step) => (
              <div key={step.number} className={styles.processCard}>
                <div className={styles.processHeader}>
                  <span className={styles.processNumber}>{step.number}</span>
                  <Code2 size={18} color="#D4B36B" />
                </div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className={`${styles.section} ${styles.altSection}`} aria-labelledby="faq-title">
        <div className="container">
          <SectionHeading
            badge={t.faq.badge}
            title={t.faq.title}
            subtitle={t.faq.subtitle}
            align="center"
          />

          <div className={styles.faqList}>
            {FAQ_DATA.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
                >
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span>{getLocalized(faq.question)}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0,
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div id={`faq-answer-${faq.id}`} className={styles.faqAnswer}>
                      <p>{getLocalized(faq.answer)}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Final Consultation CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <Badge variant="gold">{t.ctaSection.badge}</Badge>
            <h2 className={styles.ctaTitle}>{t.ctaSection.title}</h2>
            <p className={styles.ctaSubtitle}>{t.ctaSection.subtitle}</p>
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={<MessageSquare size={18} />}
            >
              {t.ctaSection.button}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
