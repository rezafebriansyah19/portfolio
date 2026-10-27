import React from 'react';
import { SITE_CONFIG } from '../../../config/site';
import { useLanguage } from '../../../i18n';
import styles from './WhatsAppButton.module.scss';

export const WhatsAppButton: React.FC = () => {
  const { t } = useLanguage();
  const label = `${t.common.whatsappChat} - ${SITE_CONFIG.contact.displayWhatsapp}`;

  return (
    <a
      className={styles.button}
      href={SITE_CONFIG.contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20.2 11.6a8.6 8.6 0 0 1-12.7 7.6L3.5 20l.9-3.8a8.6 8.6 0 1 1 15.8-4.6Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="M8.4 7.4c-.5-.6-1.1-.4-1.5 0-.6.7-.8 1.5-.7 2.4.3 2.2 2.7 4.9 5.2 6.4 1.8 1.1 3.4 1.4 4.3.8.7-.4 1.1-1.1 1-1.7-.1-.4-2.1-1.4-2.6-1.5-.4-.1-.8.5-1.2 1-.3.3-.6.3-1 .1-1.6-.7-2.5-1.6-3.2-3.1-.2-.4 0-.6.2-.9l.6-.7c.2-.3.1-.6 0-.9L8.4 7.4Z"
          fill="currentColor"
        />
      </svg>
      <span className={styles.label}>{t.common.whatsappChat}</span>
    </a>
  );
};
