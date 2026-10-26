import React from 'react';
import { useLanguage } from '../../i18n';
import { usePageMetadata } from '../../utils/metadata';
import styles from './Payment.module.scss';

const paymentMethods = [
  { name: 'BSI', mark: 'BSI', theme: 'bsi', type: 'bank' },
  { name: 'Mandiri', mark: 'M', theme: 'mandiri', type: 'bank' },
  { name: 'BRI', mark: 'BRI', theme: 'bri', type: 'bank' },
  { name: 'GoPay', mark: 'Go', theme: 'gopay', type: 'wallet' },
  { name: 'DANA', mark: 'D', theme: 'dana', type: 'wallet' },
  { name: 'ShopeePay', mark: 'S', theme: 'shopeepay', type: 'wallet' },
  { name: 'SeaBank', mark: 'Sea', theme: 'seabank', type: 'bank' },
] as const;

export const Payment: React.FC = () => {
  const { t } = useLanguage();

  usePageMetadata({
    title: t.payment.title,
    description: t.payment.subtitle,
  });

  return (
    <div className={styles.pageShell}>
      <div className="container">
        <header className={styles.header}>
          <p className={styles.kicker}>{t.payment.badge}</p>
          <h1>{t.payment.title}</h1>
          <p className={styles.subtitle}>{t.payment.subtitle}</p>
        </header>

        <section className={styles.grid} aria-label={t.payment.title}>
          {paymentMethods.map((method) => {
            return (
              <article className={styles.card} key={method.name}>
                <div className={styles.cardHeader}>
                  <div className={styles.logoStage} aria-hidden="true">
                    <span className={`${styles.logoTile} ${styles[method.theme]}`}>
                      <span className={styles.logoMark}>{method.mark}</span>
                    </span>
                  </div>
                  <span className={styles.methodType}>{t.payment.types[method.type]}</span>
                </div>

                <h2>{method.name}</h2>
                <p className={styles.number}>{t.payment.contactForNumber}</p>
              </article>
            );
          })}
        </section>

        <p className={styles.note}>{t.payment.note}</p>
      </div>
    </div>
  );
};
