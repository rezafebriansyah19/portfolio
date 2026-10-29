import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { useLanguage } from '../../i18n';
import { usePageMetadata } from '../../utils/metadata';
import styles from './Payment.module.scss';

const paymentMethods = [
  { name: 'BSI', mark: 'BSI', theme: 'bsi', type: 'bank', number: '7284868956' },
  { name: 'Mandiri', mark: 'M', theme: 'mandiri', type: 'bank', number: '1050023950516' },
  { name: 'BRI', mark: 'BRI', theme: 'bri', type: 'bank', number: '3834 0105 1155 537' },
  { name: 'GoPay', mark: 'Go', theme: 'gopay', type: 'wallet', number: '085603088178' },
  { name: 'DANA', mark: 'D', theme: 'dana', type: 'wallet', number: '085603088178' },
  { name: 'ShopeePay', mark: 'S', theme: 'shopeepay', type: 'wallet', number: '085603088178' },
  { name: 'SeaBank', mark: 'Sea', theme: 'seabank', type: 'bank', number: '085603088178' },
] as const;

export const Payment: React.FC = () => {
  const { t } = useLanguage();
  const [copyStatus, setCopyStatus] = useState<{ method: string; success: boolean } | null>(null);

  usePageMetadata({
    title: t.payment.title,
    description: t.payment.subtitle,
  });

  const copyNumber = async (methodName: string, number: string) => {
    try {
      await navigator.clipboard.writeText(number.replace(/\s/g, ''));
      setCopyStatus({ method: methodName, success: true });
    } catch {
      setCopyStatus({ method: methodName, success: false });
    }
  };

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
                <p className={styles.number}>{method.number}</p>
                <button
                  type="button"
                  className={styles.copyButton}
                  onClick={() => void copyNumber(method.name, method.number)}
                >
                  {copyStatus?.method === method.name && copyStatus.success
                    ? <Check size={16} aria-hidden="true" />
                    : <Copy size={16} aria-hidden="true" />}
                  <span>
                    {copyStatus?.method === method.name
                      ? copyStatus.success
                        ? t.payment.copied
                        : t.payment.copyFailed
                      : t.payment.copyNumber}
                  </span>
                </button>
              </article>
            );
          })}
        </section>

        <p className={styles.note}>{t.payment.note}</p>
      </div>
    </div>
  );
};
