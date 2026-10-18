import type { PricingPackage } from '../types/pricing';

export const PRICING_DATA: PricingPackage[] = [
  {
    id: 'website-starter',
    category: 'website',
    name: {
      id: 'Website Starter',
      en: 'Website Starter',
    },
    startingFrom: 'Rp799.000',
    startingFromRaw: 799000,
    targetAudience: {
      id: 'Cocok untuk UMKM yang membutuhkan kehadiran online yang lebih profesional.',
      en: 'Ideal for SMEs needing a more professional online presence.',
    },
    summary: {
      id: 'Solusi cepat untuk bisnis yang ingin tampil lebih kredibel di internet tanpa proses yang rumit.',
      en: 'A fast, practical solution for businesses that want a more credible online presence without unnecessary complexity.',
    },
    features: {
      id: [
        '1 halaman landing page',
        'Maksimal 5 section utama',
        'Responsif untuk mobile, tablet, dan desktop',
        'Tombol WhatsApp dan kontak bisnis',
        'Informasi produk, layanan, atau profil usaha',
        'SEO dasar',
        '1 kali revisi desain sesuai ruang lingkup',
        'Bantuan deployment website',
      ],
      en: [
        '1 landing page',
        'Up to 5 main sections',
        'Responsive for mobile, tablet, and desktop',
        'WhatsApp and business contact button',
        'Product, service, or business profile information',
        'Basic SEO setup',
        '1 design revision cycle within scope',
        'Website deployment support',
      ],
    },
    ctaLabel: {
      id: 'Pilih Website Starter',
      en: 'Choose Website Starter',
    },
    whatsappService: 'Website Starter',
    popular: true,
    note: {
      id: 'Harga belum termasuk domain, hosting, lisensi, maupun layanan pihak ketiga jika ada kebutuhan khusus.',
      en: 'Price excludes domain, hosting, licenses, and third-party services unless explicitly stated.',
    },
  },
  {
    id: 'website-business',
    category: 'website',
    name: {
      id: 'Website Business',
      en: 'Website Business',
    },
    startingFrom: 'Rp1.499.000',
    startingFromRaw: 1499000,
    targetAudience: {
      id: 'Cocok untuk bisnis yang butuh informasi lebih lengkap dan tampilan yang lebih profesional.',
      en: 'Suitable for businesses needing fuller information and a more polished presentation.',
    },
    summary: {
      id: 'Pilihan yang lebih matang untuk bisnis yang ingin menampilkan layanan, profil, dan kontak dengan tampilan lebih solid.',
      en: 'A stronger option for businesses that want a more complete online presence with a cleaner, more established presentation.',
    },
    features: {
      id: [
        'Maksimal 4 halaman sederhana',
        'Desain yang disesuaikan dengan identitas bisnis',
        'Tampilan responsif',
        'Integrasi WhatsApp dan Google Maps bila diperlukan',
        'SEO dasar',
        'Optimasi gambar dasar',
        '2 kali revisi sesuai ruang lingkup',
        'Bantuan deployment website',
      ],
      en: [
        'Up to 4 simple pages',
        'Custom design aligned to brand identity',
        'Responsive interface',
        'WhatsApp and Google Maps integration when needed',
        'Basic SEO setup',
        'Basic image optimization',
        'Up to 2 revision rounds within scope',
        'Website deployment support',
      ],
    },
    ctaLabel: {
      id: 'Pilih Website Business',
      en: 'Choose Website Business',
    },
    whatsappService: 'Website Business',
  },
  {
    id: 'custom-development',
    category: 'website',
    name: {
      id: 'Custom Development',
      en: 'Custom Development',
    },
    startingFrom: 'Rp3.000.000',
    startingFromRaw: 3000000,
    targetAudience: {
      id: 'Cocok untuk kebutuhan website dengan fitur spesifik, sistem internal, atau integrasi kompleks.',
      en: 'Suitable for websites with custom features, internal systems, or complex integrations.',
    },
    summary: {
      id: 'Solusi yang disesuaikan untuk kebutuhan operasional, sistem, dan pengalaman pengguna yang lebih kompleks.',
      en: 'A tailored approach for operational workflows, internal systems, and more complex user journeys.',
    },
    features: {
      id: [
        'Dashboard admin atau panel operasional',
        'Sistem autentikasi pengguna',
        'Pengelolaan data dan database',
        'Sistem pemesanan atau booking',
        'Integrasi API dan layanan pihak ketiga',
        'Sistem informasi internal',
        'Kebutuhan fitur ditentukan setelah analisis kebutuhan',
      ],
      en: [
        'Admin dashboard or operational panel',
        'User authentication system',
        'Data and database management',
        'Booking or ordering system',
        'API and third-party service integrations',
        'Internal information systems',
        'Feature scope finalized after requirement analysis',
      ],
    },
    ctaLabel: {
      id: 'Konsultasikan Proyek',
      en: 'Consult Project',
    },
    whatsappService: 'Custom Development',
    note: {
      id: 'Harga final ditentukan setelah analisis kebutuhan, ruang lingkup, dan kesepakatan teknis.',
      en: 'Final pricing depends on requirement analysis, scope, and technical agreement.',
    },
  },
  {
    id: 'uiux-design',
    category: 'uiux',
    name: {
      id: 'UI/UX Design',
      en: 'UI/UX Design',
    },
    startingFrom: 'Mulai Rp750.000',
    startingFromRaw: 750000,
    targetAudience: {
      id: 'Untuk bisnis atau produk yang memerlukan tampilan lebih jelas dan pengalaman pengguna yang konsisten.',
      en: 'For businesses or products that need clearer interfaces and more consistent user experience.',
    },
    summary: {
      id: 'Desain yang berfokus pada kemudahan penggunaan, informasi yang jelas, dan pengalaman yang terasa lebih profesional.',
      en: 'Design focused on usability, clear information hierarchy, and a more professional end-user experience.',
    },
    features: {
      id: [
        'Landing page UI/UX: mulai Rp750.000',
        'Website UI/UX: mulai Rp1.500.000',
        'Mobile app UI/UX: mulai Rp2.000.000',
        'Wireframe dan prototype interaktif',
        'User flow dan struktur informasi',
        'Desain antarmuka yang konsisten dan mudah dipahami',
      ],
      en: [
        'Landing page UI/UX: from Rp750.000',
        'Website UI/UX: from Rp1.500.000',
        'Mobile app UI/UX: from Rp2.000.000',
        'Wireframes and interactive prototypes',
        'User flow and information structure',
        'Consistent design system and clearer user journeys',
      ],
    },
    ctaLabel: {
      id: 'Pesan Layanan UI/UX',
      en: 'Book UI/UX Service',
    },
    whatsappService: 'UI/UX Design',
  },
  {
    id: 'digital-invitation',
    category: 'invitation',
    name: {
      id: 'Digital Invitation',
      en: 'Digital Invitation',
    },
    startingFrom: 'Mulai Rp350.000',
    startingFromRaw: 350000,
    targetAudience: {
      id: 'Cocok untuk acara pernikahan, syukuran, dan kegiatan formal yang ingin tampil lebih modern.',
      en: 'Ideal for weddings, gatherings, and formal events that want a modern and memorable presentation.',
    },
    summary: {
      id: 'Undangan digital yang rapi, nyaman dibuka, dan siap dibagikan dengan pengalaman yang lebih personal.',
      en: 'A clean, mobile-friendly digital invitation that is easy to share and pleasant to experience.',
    },
    features: {
      id: [
        'Undangan digital pernikahan',
        'Undangan acara dan kegiatan',
        'Halaman undangan dengan info acara dan lokasi',
        'RSVP sesuai kebutuhan paket',
        'Desain yang nyaman dibuka di ponsel',
      ],
      en: [
        'Digital wedding invitation',
        'Event and celebration invitation',
        'Invitation page with event details and location',
        'RSVP setup based on package',
        'Mobile-friendly design and easy sharing',
      ],
    },
    ctaLabel: {
      id: 'Buat Undangan Digital',
      en: 'Create Digital Invitation',
    },
    whatsappService: 'Digital Invitation',
  },
  {
    id: 'mobile-app',
    category: 'mobile',
    name: {
      id: 'Mobile Application Development',
      en: 'Mobile Application Development',
    },
    startingFrom: 'Konsultasi',
    startingFromRaw: 0,
    targetAudience: {
      id: 'Cocok untuk bisnis yang memerlukan aplikasi Android maupun iOS dengan kebutuhan operasional tertentu.',
      en: 'For businesses that require Android or iOS apps with specific operational needs.',
    },
    summary: {
      id: 'Proses konsultasi membantu menilai kebutuhan, fitur, dan kompleksitas aplikasi sebelum estimasi final dibuat.',
      en: 'A consultation-first approach to assess the application requirements, features, and project complexity before final estimates.',
    },
    features: {
      id: [
        'Konsultasi kebutuhan proyek dan target pengguna',
        'Estimasi fitur dan alur pengguna',
        'Arsitektur aplikasi yang sesuai kebutuhan',
        'Integrasi API dan backend bila dibutuhkan',
        'Pengembangan Android dan iOS sesuai kebutuhan',
      ],
      en: [
        'Project scope and user requirements consultation',
        'Feature and user-flow planning',
        'Application architecture aligned to the use case',
        'API and backend integration if required',
        'Android and iOS development tailored to the project',
      ],
    },
    ctaLabel: {
      id: 'Diskusikan Aplikasi',
      en: 'Discuss App Project',
    },
    whatsappService: 'Mobile Application Development',
    note: {
      id: 'Harga final ditentukan berdasarkan kebutuhan proyek, fitur, platform, dan tingkat kompleksitas.',
      en: 'Final pricing depends on project requirements, features, platform, and complexity.',
    },
  },
];
