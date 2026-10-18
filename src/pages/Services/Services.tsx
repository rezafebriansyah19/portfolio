import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Globe, Smartphone, Layout, Mail, CheckCircle2, HelpCircle, Package, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../i18n';
import { SERVICES_DATA } from '../../data/services';
import { SectionHeading } from '../../components/common/SectionHeading/SectionHeading';
import { Button } from '../../components/common/Button/Button';
import { Badge } from '../../components/common/Badge/Badge';
import { usePageMetadata } from '../../utils/metadata';
import styles from './Services.module.scss';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={32} />,
  Smartphone: <Smartphone size={32} />,
  Layout: <Layout size={32} />,
  Mail: <Mail size={32} />,
};

export const Services: React.FC = () => {
  const { t, language, getLocalized } = useLanguage();
  const location = useLocation();

  usePageMetadata({
    title: t.servicesPage.title,
    description: t.servicesPage.subtitle,
  });

  // Support jumping to hash anchor (#website, #mobile, etc.)
  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div>
      {/* Services Header */}
      <section className={styles.headerSection}>
        <div className="container">
          <SectionHeading
            badge={t.servicesPage.badge}
            title={t.servicesPage.title}
            subtitle={t.servicesPage.subtitle}
            align="center"
            as="h1"
          />
        </div>
      </section>

      {/* Services Detailed List */}
      <section className={styles.servicesList}>
        <div className="container">
          {SERVICES_DATA.map((service) => {
            const title = getLocalized(service.title);
            const fullDesc = getLocalized(service.fullDescription);
            const problems = service.problemsSolved[language] || service.problemsSolved.id;
            const deliverables = service.deliverables[language] || service.deliverables.id;
            const workflow = service.workflow[language] || service.workflow.id;
            const icon = iconMap[service.icon] || <Globe size={32} />;

            return (
              <div key={service.id} id={service.id} className={styles.serviceBlock}>
                {/* Header */}
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconBox} aria-hidden="true">
                    {icon}
                  </div>
                  <div className={styles.serviceHeaderText}>
                    <Badge variant="gold">LAYANAN UTAMA</Badge>
                    <h2 className={styles.serviceTitle}>{title}</h2>
                    <p className={styles.serviceDescription}>{fullDesc}</p>
                  </div>
                </div>

                {/* Problems Solved & Deliverables Grid */}
                <div className={styles.detailsGrid}>
                  {/* Problems Solved */}
                  <div className={styles.detailCard}>
                    <h3 className={styles.cardTitle}>
                      <HelpCircle size={18} />
                      <span>{t.servicesPage.problemTitle}</span>
                    </h3>
                    <ul className={styles.checkList}>
                      {problems.map((prob, idx) => (
                        <li key={idx} className={styles.checkItem}>
                          <CheckCircle2 size={16} />
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tangible Deliverables */}
                  <div className={styles.detailCard}>
                    <h3 className={styles.cardTitle}>
                      <Package size={18} />
                      <span>{t.servicesPage.deliverablesTitle}</span>
                    </h3>
                    <ul className={styles.checkList}>
                      {deliverables.map((deliv, idx) => (
                        <li key={idx} className={styles.checkItem}>
                          <CheckCircle2 size={16} />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Typical Workflow */}
                <div className={styles.workflowSection}>
                  <h3 className={styles.workflowTitle}>{t.servicesPage.workflowTitle}</h3>
                  <div className={styles.workflowGrid}>
                    {workflow.map((wf, idx) => (
                      <div key={idx} className={styles.workflowCard}>
                        <div className={styles.workflowStepNum}>LANGKAH 0{idx + 1}</div>
                        <div className={styles.workflowStepName}>{wf.step}</div>
                        <p className={styles.workflowStepDesc}>{wf.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA for this specific service */}
                <div className={styles.serviceAction}>
                  <Button
                    to={`/contact?service=${service.id}`}
                    variant="primary"
                    size="md"
                    icon={<ArrowRight size={16} />}
                  >
                    {t.common.requestQuote}
                  </Button>
                </div>
              </div>
            );
          })}

          {/* Bottom Consultation Banner */}
          <div className={styles.bottomConsultation} style={{ marginTop: '3rem' }}>
            <h2 className={styles.bottomConsultTitle}>{t.servicesPage.ctaHeading}</h2>
            <p className={styles.bottomConsultDesc}>{t.servicesPage.ctaDesc}</p>
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowUpRight size={18} />}
            >
              {t.servicesPage.ctaButton}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
