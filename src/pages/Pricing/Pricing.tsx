import React, { useMemo, useState } from 'react';
import { ArrowRight, Check, MessageSquare, Sparkles } from 'lucide-react';
import { useLanguage } from '../../i18n';
import { PRICING_DATA } from '../../data/pricing';
import { Button } from '../../components/common/Button/Button';
import { usePageMetadata } from '../../utils/metadata';
import styles from './Pricing.module.scss';

const recommendationMap = {
  website: {
    simple: 'website-starter',
    custom: 'custom-development',
  },
  mobile: {
    simple: 'mobile-app',
    custom: 'mobile-app',
  },
  uiux: {
    simple: 'uiux-design',
    custom: 'uiux-design',
  },
  invitation: {
    simple: 'digital-invitation',
    custom: 'digital-invitation',
  },
} as const;

export const Pricing: React.FC = () => {
  const { t, language, getLocalized } = useLanguage();
  const [needType, setNeedType] = useState<'website' | 'mobile' | 'uiux' | 'invitation'>('website');
  const [complexity, setComplexity] = useState<'simple' | 'custom'>('simple');

  usePageMetadata({
    title: t.pricing.title,
    description: t.pricing.subtitle,
  });

  const recommendation = useMemo(() => {
    const selected = recommendationMap[needType][complexity];
    return PRICING_DATA.find((item) => item.id === selected) ?? PRICING_DATA[0];
  }, [needType, complexity]);

  return (
    <div className={styles.pageShell}>
      <div className="container">
        <header className={styles.header}>
          <p className={styles.kicker}>{t.pricing.badge}</p>
          <h1>{t.pricing.title}</h1>
          <p className={styles.subtitle}>{t.pricing.subtitle}</p>
        </header>

        <section className={styles.summaryBanner}>
          <div>
            <p className={styles.summaryLabel}>{t.pricing.summaryLabel}</p>
            <h2>{t.pricing.summaryTitle}</h2>
          </div>
          <p>{t.pricing.summaryText}</p>
        </section>

        <section className={styles.helperSection}>
          <div className={styles.helperHeader}>
            <Sparkles size={18} />
            <h2>{t.pricing.helperTitle}</h2>
          </div>

          <div className={styles.helperGrid}>
            <div className={styles.helperStep}>
              <span>{t.pricing.helperStep1}</span>
              <div className={styles.optionRow}>
                {(['website', 'mobile', 'uiux', 'invitation'] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`${styles.optionButton} ${needType === option ? styles.active : ''}`}
                    onClick={() => setNeedType(option)}
                  >
                    {t.pricing.options[option]}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.helperStep}>
              <span>{t.pricing.helperStep2}</span>
              <div className={styles.optionRow}>
                <button
                  type="button"
                  className={`${styles.optionButton} ${complexity === 'simple' ? styles.active : ''}`}
                  onClick={() => setComplexity('simple')}
                >
                  {t.pricing.complexity.simple}
                </button>
                <button
                  type="button"
                  className={`${styles.optionButton} ${complexity === 'custom' ? styles.active : ''}`}
                  onClick={() => setComplexity('custom')}
                >
                  {t.pricing.complexity.custom}
                </button>
              </div>
            </div>
          </div>

          <div className={styles.recommendationBox}>
            <div>
              <p className={styles.recLabel}>{t.pricing.recommendationLabel}</p>
              <h3>{getLocalized(recommendation.name)}</h3>
              <p>{t.pricing.recommendationDisclaimer}</p>
            </div>
            <div className={styles.recMeta}>
              <strong>{recommendation.startingFrom}</strong>
              <Button
                to={`/contact?service=${recommendation.id}`}
                variant="primary"
                size="md"
                icon={<ArrowRight size={16} />}
              >
                {t.pricing.recommendationCta}
              </Button>
            </div>
          </div>
        </section>

        <section className={styles.grid}>
          {PRICING_DATA.map((pkg) => (
            <article
              key={pkg.id}
              className={`${styles.card} ${pkg.popular ? styles.featured : ''}`}
            >
              <div className={styles.cardHeader}>
                <div>
                  <p className={styles.cardCategory}>{t.pricing.categories[pkg.category]}</p>
                  <h2>{getLocalized(pkg.name)}</h2>
                </div>
                {pkg.popular && <span className={styles.popularTag}>{t.pricing.popular}</span>}
              </div>

              <div className={styles.priceBlock}>
                <span className={styles.priceLabel}>{t.pricing.startingFrom}</span>
                <p className={styles.price}>{pkg.startingFrom}</p>
              </div>

              <p className={styles.targetAudience}>{getLocalized(pkg.targetAudience)}</p>
              <p className={styles.summary}>{getLocalized(pkg.summary)}</p>

              <ul className={styles.featureList}>
                {(pkg.features[language] || pkg.features.id).map((feature) => (
                  <li key={feature}>
                    <Check size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {pkg.note && <p className={styles.note}>{getLocalized(pkg.note)}</p>}

              <Button
                to={`/contact?service=${pkg.id}`}
                variant={pkg.popular ? 'primary' : 'secondary'}
                size="md"
                fullWidth
                icon={<MessageSquare size={16} />}
              >
                {getLocalized(pkg.ctaLabel)}
              </Button>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};
