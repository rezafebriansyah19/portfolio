import React from 'react';
import { ShieldCheck, Lock, ScrollText } from 'lucide-react';
import { useLanguage } from '../../i18n';
import { usePageMetadata } from '../../utils/metadata';
import styles from './PrivacyPolicy.module.scss';

const policySections = [
  {
    icon: <Lock size={18} />,
    id: 'information-collected',
    title: {
      id: 'Informasi yang Kami Kumpulkan',
      en: 'Information We Collect',
    },
    text: {
      id: 'Kami dapat mengumpulkan informasi dasar seperti nama, alamat email, nomor WhatsApp, dan detail proyek yang Anda kirimkan melalui formulir kontak atau kanal komunikasi resmi. Informasi ini hanya dipakai untuk keperluan komunikasi, pendampingan proyek, dan penyusunan proposal yang relevan.',
      en: 'We may collect basic details such as your name, email address, WhatsApp number, and project information submitted through our contact form or official communication channels. This information is used only to facilitate communication, support the project discussion, and prepare relevant proposals.',
    },
  },
  {
    icon: <ShieldCheck size={18} />,
    id: 'how-we-use',
    title: {
      id: 'Bagaimana Kami Menggunakan Informasi',
      en: 'How We Use Information',
    },
    text: {
      id: 'Informasi pelanggan digunakan untuk menjawab pertanyaan, mengevaluasi kebutuhan proyek, menyusun brief kerja, dan memastikan komunikasi berjalan dengan jelas. Kami tidak menjual atau menyewakan data pribadi kepada pihak ketiga untuk tujuan pemasaran.',
      en: 'Client information is used to respond to inquiries, assess project needs, prepare work briefs, and maintain clear communication. We do not sell or rent personal data to third parties for marketing purposes.',
    },
  },
  {
    icon: <ScrollText size={18} />,
    id: 'cookies-and-analytics',
    title: {
      id: 'Cookie & Analitik',
      en: 'Cookies & Analytics',
    },
    text: {
      id: 'Website ini berupaya minimalistik dalam penggunaan pelacak. Kami dapat menggunakan alat analitik dasar untuk memahami performa laman dan meningkatkan pengalaman pengguna tanpa memata-matai aktivitas sensitif secara berlebihan.',
      en: 'This website is intentionally minimalist in its tracking practices. We may use basic analytics tools to understand page performance and improve the user experience without overly surveilling private behavior.',
    },
  },
];

export const PrivacyPolicy: React.FC = () => {
  const { t, getLocalized } = useLanguage();

  usePageMetadata({
    title: t.privacyPolicy.title,
    description: t.privacyPolicy.summary,
  });

  return (
    <div className={styles.pageShell}>
      <div className="container">
        <header className={styles.header}>
          <p className={styles.kicker}>{t.privacyPolicy.badge}</p>
          <h1>{t.privacyPolicy.title}</h1>
          <p className={styles.summary}>{t.privacyPolicy.summary}</p>
        </header>

        <div className={styles.grid}>
          {policySections.map((section) => (
            <section key={section.id} id={section.id} className={styles.card}>
              <div className={styles.iconWrap}>{section.icon}</div>
              <h2>{getLocalized(section.title)}</h2>
              <p>{getLocalized(section.text)}</p>
            </section>
          ))}
        </div>

        <section className={styles.noticeCard}>
          <h2>{t.privacyPolicy.contactTitle}</h2>
          <p>
            {t.privacyPolicy.contactText}
            {' '}
            <a href="mailto:rezatengku21@gmail.com" className={styles.mailLink}>
              rezatengku21@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};
