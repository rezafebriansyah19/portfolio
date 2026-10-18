import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Layout, Mail, ArrowRight } from 'lucide-react';
import type { ServiceItem } from '../../../types/service';
import { useLanguage } from '../../../i18n';
import styles from './ServiceCard.module.scss';

export interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={26} />,
  Smartphone: <Smartphone size={26} />,
  Layout: <Layout size={26} />,
  Mail: <Mail size={26} />,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { language, t, getLocalized } = useLanguage();

  const title = getLocalized(service.title);
  const desc = getLocalized(service.shortDescription);
  const benefits = service.benefits[language] || service.benefits.id;
  const icon = iconMap[service.icon] || <Globe size={26} />;

  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper} aria-hidden="true">
        {icon}
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>

      {benefits && benefits.length > 0 && (
        <div className={styles.benefitsBlock}>
          <div className={styles.benefitsLabel}>{t.servicesOverview.keyBenefits}</div>
          <ul className={styles.benefitsList}>
            {benefits.slice(0, 3).map((benefit, idx) => (
              <li key={idx} className={styles.benefitItem}>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.actions}>
        <Link
          to={`/services#${service.id}`}
          className="button-link"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#D4B36B',
            fontSize: '0.875rem',
            fontWeight: 600,
          }}
        >
          <span>{t.common.exploreMore}</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
};
