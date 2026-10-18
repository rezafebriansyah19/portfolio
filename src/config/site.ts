export interface LocalizedString {
  id: string;
  en: string;
}

export interface SitePrinciple {
  title: LocalizedString;
  desc: LocalizedString;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'instagram' | 'twitter' | 'youtube' | 'facebook' | string;
  name: string;
  url: string;
  handle?: string;
  active: boolean;
}

export interface SiteContact {
  /**
   * Nomor WhatsApp resmi format internasional tanpa tanda + atau spasi (cocok untuk link wa.me)
   */
  whatsappNumber: string;
  /**
   * Format tampilan yang ramah pengguna
   */
  displayWhatsapp: string;
  /**
   * Tautan langsung ke WhatsApp
   */
  whatsappUrl: string;
  /**
   * Alamat email resmi kontak
   */
  email: string;
  location: LocalizedString;
}

export interface NavLink {
  path: string;
  labelKey: string;
}

export interface PortfolioConfig {
  status: 'curating' | 'ready';
  notice: LocalizedString;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  domain: string;
  siteUrl: string;
  tagline: LocalizedString;
  shortBio: LocalizedString;
  principles: SitePrinciple[];
  contact: SiteContact;
  socials: SocialLink[];
  portfolio: PortfolioConfig;
  navLinks: NavLink[];
}

export const SITE_CONFIG: SiteConfig = {
  name: 'SIDQAVEN',
  legalName: 'SIDQAVEN — Digital Solutions & Creative Studio',
  domain: 'sidqaven.or.id',
  siteUrl: 'https://sidqaven.or.id',
  tagline: {
    id: 'Membangun Solusi Digital Penuh Makna.',
    en: 'Building Digital Solutions with Purpose.',
  },
  shortBio: {
    id: 'Studio pengembangan digital & kreatif yang berfokus menghadirkan website, aplikasi mobile, UI/UX, dan undangan digital berkualitas tinggi.',
    en: 'Digital & creative development studio focused on delivering high-quality websites, mobile applications, UI/UX, and digital invitations.',
  },
  principles: [
    {
      title: { id: 'Integritas', en: 'Integrity' },
      desc: {
        id: 'Kami menjunjung kejujuran dalam komunikasi, estimasi pengerjaan, dan spesifikasi teknologi.',
        en: 'We uphold honesty in communication, project estimates, and technology specifications.',
      },
    },
    {
      title: { id: 'Pengetahuan', en: 'Knowledge' },
      desc: {
        id: 'Keputusan arsitektur dan desain didasarkan pada riset kebutuhan pengguna dan standar industri.',
        en: 'Architectural and design decisions are grounded in user research and industry standards.',
      },
    },
    {
      title: { id: 'Inovasi', en: 'Innovation' },
      desc: {
        id: 'Menerapkan teknologi modern yang relevan, efisien, dan siap berkembang untuk masa depan.',
        en: 'Applying modern technologies that are relevant, efficient, and ready for future scale.',
      },
    },
    {
      title: { id: 'Pelayanan', en: 'Service' },
      desc: {
        id: 'Mendampingi klien dari tahap penjajakan kebutuhan hingga implementasi dan pemeliharaan.',
        en: 'Guiding clients from requirement discovery through implementation and maintenance.',
      },
    },
  ],
  contact: {
    whatsappNumber: '6285603088178',
    displayWhatsapp: '+62 856-0308-8178',
    whatsappUrl: 'https://wa.me/6285603088178',
    email: 'rezatengku21@gmail.com',
    location: {
      id: 'Indonesia',
      en: 'Indonesia',
    },
  },
  // Media sosial belum ditentukan secara resmi (dikosongkan agar tidak membuat tautan fiktif)
  socials: [],
  portfolio: {
    status: 'curating',
    notice: {
      id: 'Daftar studi kasus & portofolio produksi resmi sedang dalam proses kurasi dan dokumentasi.',
      en: 'Official client case studies & production portfolio are currently being curated and documented.',
    },
  },
  navLinks: [
    { path: '/', labelKey: 'nav.home' },
    { path: '/services', labelKey: 'nav.services' },
    { path: '/portfolio', labelKey: 'nav.portfolio' },
    { path: '/about', labelKey: 'nav.about' },
    { path: '/contact', labelKey: 'nav.contact' },
  ],
};
