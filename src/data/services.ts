import type { ServiceItem } from '../types/service';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'website',
    title: {
      id: 'Website Development',
      en: 'Website Development',
    },
    shortDescription: {
      id: 'Pembangunan website profil perusahaan, UMKM, institusi pendidikan, yayasan, katalog bisnis, dan aplikasi web kustom yang cepat dan responsif.',
      en: 'High-performance websites for corporate profiles, SMBs, educational foundations, business catalogs, and custom responsive web applications.',
    },
    fullDescription: {
      id: 'Kami merancang dan mengembangkan website modern dengan standar rekayasa perangkat lunak yang ketat. Fokus kami adalah menghadirkan website yang cepat dibuka, aman, ramah SEO, dan merefleksikan kredibilitas lembaga atau bisnis Anda secara profesional.',
      en: 'We architect and build modern web applications adhering to rigorous software engineering standards. Our focus is delivering lightning-fast, secure, SEO-friendly websites that convey authentic authority and credibility.',
    },
    icon: 'Globe',
    benefits: {
      id: [
        'Desain eksklusif dan profesional tanpa menggunakan template pasaran yang kaku',
        'Struktur kode bersih dan teroptimasi untuk kecepatan akses di koneksi seluler',
        'Struktur SEO dasar yang rapi dan terindeks dengan baik di mesin pencari',
        'Mudah diperbarui dan siap diintegrasikan dengan domain atau hosting mandiri',
      ],
      en: [
        'Tailored, bespoke design avoiding rigid and generic stock templates',
        'Clean, optimized source code guaranteeing swift mobile network loading',
        'Structured baseline SEO hierarchy ensuring proper search engine discovery',
        'Effortless content updates and seamless integration with independent hosting',
      ],
    },
    problemsSolved: {
      id: [
        'Website lama lambat dan sulit dibuka dari perangkat smartphone',
        'Profil bisnis belum memiliki kredibilitas digital yang meyakinkan calon mitra atau klien',
        'Struktur navigasi membingungkan sehingga pengunjung gagal menemukan informasi penting',
        'Ketergantungan pada platform sewa pihak ketiga dengan biaya berulang yang tidak efisien',
      ],
      en: [
        'Legacy websites suffering from slow loading and broken mobile layouts',
        'Lack of an authoritative digital identity to instill confidence in enterprise partners',
        'Cluttered navigation structures causing visitors to bounce without converting',
        'Over-reliance on rented proprietary platforms with unpredictable recurring overhead',
      ],
    },
    deliverables: {
      id: [
        'Website Profil Perusahaan & Bisnis Profesional',
        'Website UMKM & Katalog Produk/Layanan',
        'Website Institusi Pendidikan, Pesantren, dan Yayasan Sosial',
        'Landing Page Kampanye Produk / Layanan Spesifik',
        'Aplikasi Web Kustom & Portal Operasional Ringan',
        'Dokumentasi Penggunaan & Penyerahan Kode Sumber Lengkap',
      ],
      en: [
        'Corporate Profile & Professional Business Websites',
        'SMB & Commercial Product/Service Catalog Sites',
        'Educational Institution, Foundation, & Non-Profit Portals',
        'Focused Campaign Landing Pages with High Conversion Architecture',
        'Custom Web Applications & Operational Portals',
        'Complete Source Code Handover & Deployment Documentation',
      ],
    },
    workflow: {
      id: [
        { step: 'Brief & Struktur Konten', desc: 'Pengumpulan materi profil, struktur halaman, dan tujuan utama website.' },
        { step: 'Desain Antarmuka', desc: 'Pembuatan wireframe dan mockup antarmuka visual yang disesuaikan dengan identitas brand.' },
        { step: 'Pengembangan Kode', desc: 'Implementasi desain menjadi kode responsif dengan performa optimal.' },
        { step: 'Pengujian & Peluncuran', desc: 'Audit kecepatan, uji kompatibilitas browser, serta konfigurasi domain & server.' },
      ],
      en: [
        { step: 'Scoping & Information Architecture', desc: 'Content inventory, hierarchy definition, and strategic conversion mapping.' },
        { step: 'UI Layout Crafting', desc: 'Wireframing and visual mockups aligned with your brand identity and typography.' },
        { step: 'Frontend & Architecture Build', desc: 'Clean, modular development optimized for Core Web Vitals and accessibility.' },
        { step: 'QA & Production Deployment', desc: 'Cross-browser testing, mobile verification, DNS mapping, and final launch.' },
      ],
    },
  },
  {
    id: 'mobile',
    title: {
      id: 'Mobile App Development',
      en: 'Mobile App Development',
    },
    shortDescription: {
      id: 'Pengembangan aplikasi mobile Android dan iOS untuk kebutuhan operasional bisnis, pemesanan, dan layanan internal yang stabil.',
      en: 'Robust Android and iOS mobile applications engineered for business operations, client booking, and reliable field services.',
    },
    fullDescription: {
      id: 'Kami membantu organisasi dan pelaku usaha membangun aplikasi mobile multiplatform dengan antarmuka yang intuitif dan arsitektur yang tangguh. Solusi difokuskan pada aplikasi operasional, katalog interaktif, dan sistem pencatatan berbasis mobile.',
      en: 'We assist businesses and organizations in designing and developing resilient cross-platform mobile apps for Android and iOS. Our solutions focus on operational utilities, interactive catalogs, and streamlined internal workflows.',
    },
    icon: 'Smartphone',
    benefits: {
      id: [
        'Performa responsif dan pengalaman pengguna yang mulus pada berbagai ukuran layar',
        'Arsitektur kode modular menggunakan framework modern yang teruji',
        'Manajemen state yang efisien dan konsumsi baterai yang terkontrol',
        'Penanganan mode offline dan penyimpanan lokal yang aman',
      ],
      en: [
        'Fluid gestures and responsive interfaces tailored for varying device sizes',
        'Modular, maintainable codebase utilizing battle-tested mobile frameworks',
        'Disciplined state management with minimal background battery consumption',
        'Offline resilience with robust local data caching and security measures',
      ],
    },
    problemsSolved: {
      id: [
        'Proses operasional lapangan masih bergantung pada formulir kertas atau spreadsheet manual',
        'Kebutuhan aksesibilitas cepat dari staf atau pelanggan yang selalu bergerak di luar kantor',
        'Kurangnya notifikasi langsung dan pembaruan status secara real-time',
      ],
      en: [
        'Field workflows burdened by physical paperwork and fragmented spreadsheets',
        'Staff and customers needing instantaneous access from smartphones on the go',
        'Absence of centralized real-time updates and push communication channels',
      ],
    },
    deliverables: {
      id: [
        'Perencanaan Arsitektur & User Flow Aplikasi Mobile',
        'Aplikasi Android (.apk / .aab) & iOS (siap deploy)',
        'Aplikasi Operasional Tim Internal & Pencatatan Lapangan',
        'Aplikasi Layanan Pemesanan & Monitoring Status',
        'Integrasi REST API & Layanan Backend Terkait',
      ],
      en: [
        'System Architecture & Mobile User Flow Specifications',
        'Android (.apk / .aab) & iOS Production Build Packages',
        'Internal Field Operations & Data Entry Applications',
        'Service Booking & Live Status Tracking Interfaces',
        'REST API Integration & Associated Cloud Connector Setup',
      ],
    },
    workflow: {
      id: [
        { step: 'Spesifikasi Fungsional', desc: 'Pemetaan fitur inti, skenario pengguna, dan integrasi backend yang dibutuhkan.' },
        { step: 'Perancangan UX Mobile', desc: 'Penyusunan alur navigasi layar, tap target yang ergonomis, dan prototipe interaktif.' },
        { step: 'Pengembangan & Integrasi', desc: 'Pengkodean aplikasi, integrasi database/API, dan validasi fungsional.' },
        { step: 'Uji Coba Perangkat Nyata', desc: 'Pengujian performa pada perangkat Android dan iOS nyata sebelum serah terima.' },
      ],
      en: [
        { step: 'Functional Specification', desc: 'Defining core feature boundaries, screen states, and API contracts.' },
        { step: 'Mobile UX Architecture', desc: 'Ergonomic tap-target layouts, smooth screen transitions, and interactive prototypes.' },
        { step: 'Build & API Integration', desc: 'Code implementation, state architecture, and API endpoint synchronization.' },
        { step: 'Device Testing & Delivery', desc: 'Real-hardware performance auditing across Android and iOS versions.' },
      ],
    },
  },
  {
    id: 'uiux',
    title: {
      id: 'UI/UX Design',
      en: 'UI/UX Design',
    },
    shortDescription: {
      id: 'Riset alur pengguna, wireframing, perancangan antarmuka visual modern, design system terpadu, dan prototipe interaktif siap uji.',
      en: 'User flow research, low-fidelity wireframing, modern interface design, cohesive design systems, and interactive testable prototypes.',
    },
    fullDescription: {
      id: 'Desain yang baik bukan sekadar tampilan visual yang menarik, melainkan solusi yang mempermudah pengguna mencapai tujuannya tanpa kebingungan. Kami merancang desain antarmuka berbasis riset yang siap diterjemahkan oleh tim pengembang tanpa friksi.',
      en: 'Great design is fundamentally about clarity and ease of use rather than superficial decoration. We engineer user-centric interfaces rooted in usability research, accompanied by design tokens ready for development handoff.',
    },
    icon: 'Layout',
    benefits: {
      id: [
        'Mengurangi risiko kesalahan fitur dan biaya perbaikan di tahap pengembangan',
        'Design system yang konsisten, memudahkan penambahan fitur di masa depan',
        'Prototipe interaktif yang dapat diuji langsung ke calon pengguna atau pemangku kepentingan',
        'Handoff desain terorganisir dengan spesifikasi token warna, tipografi, dan aset siap pakai',
      ],
      en: [
        'Eliminates expensive engineering rework through early usability validation',
        'Standardized design system ensuring visual coherence across future updates',
        'Clickable interactive prototypes suitable for stakeholder demos and user testing',
        'Organized Figma handoff with color tokens, typography scales, and exportable assets',
      ],
    },
    problemsSolved: {
      id: [
        'Aplikasi memiliki banyak fitur tetapi sulit dipahami dan membingungkan pengguna baru',
        'Tampilan antarmuka terlihat kuno dan tidak mencerminkan kualitas layanan profesional',
        'Tim teknis mengalami hambatan karena tidak memiliki panduan desain yang terstandarisasi',
      ],
      en: [
        'Feature-rich applications suffering from steep learning curves and high abandonment',
        'Outdated aesthetic diminishing market credibility against modern competitors',
        'Development friction arising from ambiguous mockups and missing edge cases',
      ],
    },
    deliverables: {
      id: [
        'User Journey Map & Wireframe Low-Fidelity',
        'High-Fidelity Interface Design (Figma)',
        'Design System (Color Tokens, Typography, Komponen Reusable)',
        'Prototipe Interaktif Klik untuk Demonstrasi',
        'Aset Grafis & Panduan Implementasi Pengembang',
      ],
      en: [
        'User Journey Maps & Low-Fidelity Wireframes',
        'High-Fidelity UI Screens & Component Layouts (Figma)',
        'Cohesive Design System (Color Tokens, Typography, Reusable UI Kit)',
        'Interactive Clickable Prototypes for Usability Demonstrations',
        'Exported Vector Assets & Developer Handoff Documentation',
      ],
    },
    workflow: {
      id: [
        { step: 'Riset & Perumusan Alur', desc: 'Menganalisis profil target pengguna dan menyusun wireframe kerangka dasar.' },
        { step: 'Eksplorasi Gaya Visual', desc: 'Menentukan palet warna, tipografi, dan gaya visual yang elegan dan berkarakter.' },
        { step: 'Desain Antarmuka Lengkap', desc: 'Merancang seluruh status layar (normal, aktif, kosong, error) secara teliti.' },
        { step: 'Prototyping & Dokumentasi', desc: 'Menghubungkan interaksi dan menyusun spesifikasi untuk implementasi teknis.' },
      ],
      en: [
        { step: 'Research & Wireframing', desc: 'Synthesizing target user needs and structuring clear low-fidelity screen flows.' },
        { step: 'Visual Direction Exploration', desc: 'Curating color palettes, typography systems, and refined component styles.' },
        { step: 'Comprehensive Screen Design', desc: 'Detailing every state including loading, empty, and error feedback.' },
        { step: 'Prototyping & Spec Handoff', desc: 'Wiring interactive transitions and generating developer documentation.' },
      ],
    },
  },
  {
    id: 'invitation',
    title: {
      id: 'Digital Invitations',
      en: 'Digital Invitations',
    },
    shortDescription: {
      id: 'Undangan digital berbasis website untuk pernikahan dan acara khusus dengan desain anggun, galeri foto, rute lokasi, dan RSVP.',
      en: 'Tailored web-based digital invitations for weddings and milestone celebrations, featuring elegant layouts, galleries, maps, and RSVP.',
    },
    fullDescription: {
      id: 'Hadirkan momen istimewa Anda dalam format undangan digital yang berkelas, personal, dan mudah diakses dari perangkat manapun. Tanpa iklan pihak ketiga yang mengganggu, undangan dirancang khusus dengan memperhatikan keanggunan tipografi dan kemudahan navigasi bagi tamu undangan.',
      en: 'Celebrate your meaningful milestones with bespoke digital invitations crafted with editorial elegance. Free of intrusive third-party ads, every invitation is custom-built with refined typography, responsive media galleries, and effortless navigation for your guests.',
    },
    icon: 'Mail',
    benefits: {
      id: [
        'Desain eksklusif dan estetik tanpa watermark atau iklan mengganggu',
        'Dukungan personalisasi nama tamu undangan secara dinamis',
        'Integrasi peta lokasi digital (Google Maps) yang akurat dan mudah diakses',
        'Kapasitas galeri foto berkualitas tinggi dengan waktu pemuatan yang cepat',
        'Formulir konfirmasi kehadiran (RSVP) dan ucapan selamat yang tertata',
      ],
      en: [
        'Bespoke, ad-free editorial aesthetic without third-party platform watermarks',
        'Dynamic guest personalization allowing tailored URL links for every invitee',
        'Direct interactive map navigation via Google Maps integration',
        'Fast-loading photo galleries optimized for mobile data connections',
        'Structured RSVP confirmation forms and curated guestbook wishes',
      ],
    },
    problemsSolved: {
      id: [
        'Undangan cetak membutuhkan biaya tinggi dan waktu distribusi yang lama ke luar kota',
        'Undangan template gratisan sering dipenuhi iklan pihak ketiga dan performa lambat',
        'Tamu kesulitan menemukan titik lokasi acara atau tanggal pelaksanaan yang tepat',
      ],
      en: [
        'Physical paper invitations incurring high printing costs and logistical delays',
        'Generic web templates plagued by intrusive banner ads and sluggish loading',
        'Guests struggling to locate precise venue coordinates and schedule milestones',
      ],
    },
    deliverables: {
      id: [
        'Website Undangan Digital Kustom (Mobile-First)',
        'Fitur Personalisasi Nama Tamu Otomatis',
        'Bagian Jadwal Acara, Hitung Mundur, & Panduan Lokasi',
        'Galeri Foto Kenangan / Pre-Wedding Teroptimasi',
        'Formulir RSVP & Buku Ucapan Digital',
        'Musik Latar Opsional dengan Kontrol Pemutaran yang Sopan',
      ],
      en: [
        'Bespoke Mobile-First Digital Invitation Web Page',
        'Dynamic Guest Name Customization Engine',
        'Event Timeline, Countdown Timer, & Direct Venue Map Actions',
        'Optimized High-Resolution Photo Gallery Showcase',
        'RSVP Confirmation Module & Digital Guestbook',
        'Optional Background Soundtrack with Respectful User Playback Controls',
      ],
    },
    workflow: {
      id: [
        { step: 'Pengumpulan Data Acara', desc: 'Informasi mempelai/tuan rumah, tanggal, waktu, lokasi, dan foto dokumentasi.' },
        { step: 'Penyusunan Desain', desc: 'Penyesuaian tema warna, font, dan ornamen grafis sesuai nuansa acara.' },
        { step: 'Penyusunan Kode & Fitur', desc: 'Pemasangan fitur interaktif (hitung mundur, RSVP, peta) dan optimasi media.' },
        { step: 'Uji Coba & Link Tamu', desc: 'Pemberian tautan uji coba sebelum undangan disebarkan kepada para tamu.' },
      ],
      en: [
        { step: 'Event Brief Gathering', desc: 'Collecting event schedules, venue coordinates, biographies, and gallery assets.' },
        { step: 'Aesthetic Tailoring', desc: 'Aligning typography, color schemes, and subtle ornaments with the event tone.' },
        { step: 'Feature Implementation', desc: 'Configuring countdown, RSVP logic, Google Maps redirection, and media compression.' },
        { step: 'Review & Distribution Links', desc: 'Testing responsive layouts and providing personalized shareable URLs.' },
      ],
    },
  },
];
