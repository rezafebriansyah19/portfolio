import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../../../config/site';
import { useLanguage } from '../../../i18n';
import { SERVICES_DATA } from '../../../data/services';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const { t, getLocalized } = useLanguage();
  const currentYear = new Date().getFullYear();

  const serviceLinks = SERVICES_DATA.map((service) => ({
    name: getLocalized(service.title),
    to: `/services#${service.id}`,
  }));

  const pageLinks = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.services, to: '/services' },
    { label: t.nav.pricing, to: '/pricing' },
    { label: t.nav.payment, to: '/payment' },
    { label: t.nav.portfolio, to: '/portfolio' },
    { label: t.nav.about, to: '/about' },
    { label: t.nav.process, to: '/#process' },
    { label: t.nav.contact, to: '/contact' },
    { label: t.footer.privacyPolicy, to: '/privacy-policy' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.topGrid}`}>
        {/* Brand Information */}
        <div className={styles.brandCol}>
          <Link to="/" className={styles.brandLogo} aria-label="SIDQAVEN Studio Home">
            <div className={styles.logoMark} aria-hidden="true">
              S
            </div>
            <span className={styles.brandName}>{SITE_CONFIG.name}</span>
          </Link>
          <p className={styles.tagline}>{getLocalized(SITE_CONFIG.tagline)}</p>
          <p className={styles.bio}>{getLocalized(SITE_CONFIG.shortBio)}</p>
        </div>

        {/* Services Column */}
        <div className={styles.column}>
          <h3 className={styles.colTitle}>{t.footer.servicesTitle}</h3>
          <ul className={styles.linkList}>
            {serviceLinks.map((item) => (
              <li key={item.to} className={styles.linkItem}>
                <Link to={item.to}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Column */}
        <div className={styles.column}>
          <h3 className={styles.colTitle}>{t.footer.pagesTitle}</h3>
          <ul className={styles.linkList}>
            {pageLinks.map((item) => (
              <li key={item.to} className={styles.linkItem}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact and Social Column */}
        <div className={styles.column}>
          <h3 className={styles.colTitle}>{t.footer.contactTitle}</h3>
          <div className={styles.contactInfo}>
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <MessageSquare size={16} />
              <span>WhatsApp: {SITE_CONFIG.contact.displayWhatsapp}</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className={styles.contactLink}
            >
              <Mail size={16} />
              <span>{SITE_CONFIG.contact.email}</span>
            </a>
          </div>

          {SITE_CONFIG.socials.length > 0 && (
            <>
              <h3 className={styles.colTitle} style={{ marginTop: '0.75rem' }}>
                {t.footer.socialTitle}
              </h3>
              <div className={styles.socialRow}>
                {SITE_CONFIG.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                    aria-label={`${social.name} Profile`}
                  >
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`container ${styles.bottomBar}`}>
        <p>
          &copy; {currentYear} {SITE_CONFIG.name}. {t.footer.rights}
        </p>
        <div className={styles.bottomEthic}>
          <ShieldCheck size={14} color="#D4B36B" />
          <span>{t.footer.noCookieTrackers}</span>
        </div>
      </div>
    </footer>
  );
};
