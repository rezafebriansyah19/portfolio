import React from 'react';
import { Home } from 'lucide-react';
import { useLanguage } from '../../i18n';
import { Button } from '../../components/common/Button/Button';
import { usePageMetadata } from '../../utils/metadata';
import styles from './NotFound.module.scss';

export const NotFound: React.FC = () => {
  const { t } = useLanguage();

  usePageMetadata({
    title: t.notFound.title,
    description: t.notFound.desc,
  });

  return (
    <div className={styles.notFoundWrapper}>
      <div className={styles.contentCard}>
        <div className={styles.code}>{t.notFound.code}</div>
        <h1 className={styles.title}>{t.notFound.title}</h1>
        <p className={styles.desc}>{t.notFound.desc}</p>
        <Button to="/" variant="primary" size="md" icon={<Home size={18} />}>
          {t.notFound.button}
        </Button>
      </div>
    </div>
  );
};
