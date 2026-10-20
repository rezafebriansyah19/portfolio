import type { PortfolioProject } from '../types/portfolio';

const publicImage = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const PORTFOLIO_DATA: PortfolioProject[] = [
  {
    slug: 'al-falah-foundation-portal',
    title: {
      id: 'Portal Digital Yayasan Pendidikan Al-Falah',
      en: 'Al-Falah Educational Foundation Digital Portal',
    },
    category: 'website',
    status: 'REAL PROJECT',
    featured: true,
    summary: {
      id: 'Pengembangan website resmi yayasan pendidikan yang mencakup informasi lembaga, program kepesantrenan, dan sistem transparansi donasi sosial.',
      en: 'Official web platform for an educational foundation, featuring institutional profiles, academic curriculum highlights, and donation transparency reports.',
    },
    background: {
      id: 'Yayasan memiliki kendala dalam menyampaikan profil program pendidikan dan laporan transparansi donasi kepada para wali santri dan masyarakat luas karena sebelumnya hanya mengandalkan selebaran fisik dan media sosial yang tercecer.',
      en: 'The foundation struggled to convey academic program details and accountable social contribution records to guardians and the public, previously relying solely on fragmented social media posts.',
    },
    solution: {
      id: 'Membangun website resmi berarsitektur modern dengan navigasi terstruktur, halaman profil unit pendidikan, katalog agenda kegiatan, dan modul transparansi laporan yang mudah diakses melalui ponsel.',
      en: 'Engineered a modern web portal featuring intuitive information architecture, educational unit breakdowns, an interactive event calendar, and mobile-optimized accountability reports.',
    },
    keyFeatures: {
      id: [
        'Profil multi-unit pendidikan (Pesantren, Madrasah, Tahfidz)',
        'Sistem publikasi agenda dan warta yayasan yang terstruktur',
        'Penyajian laporan transparansi program donasi dan kegiatan sosial',
        'Optimasi performa mobile untuk kemudahan akses wali santri di pelosok',
        'Integrasi tombol komunikasi langsung via WhatsApp administrasi',
      ],
      en: [
        'Multi-unit institutional hierarchy (Boarding School, Academy, Tahfidz)',
        'Structured event calendar and community announcement publishing',
        'Public accountability view for community fund initiatives and social programs',
        'Mobile-first performance optimization for low-bandwidth cellular environments',
        'Direct inquiry hooks connecting directly to foundation administrative desks',
      ],
    },
    technologies: ['React', 'TypeScript', 'SCSS', 'Vite', 'Headless CMS Integration'],
    role: {
      id: 'Desain UI/UX, Rekayasa Frontend, dan Konfigurasi Domain/Server',
      en: 'UI/UX Architecture, Frontend Engineering, and Cloud Deployment',
    },
    thumbnail: publicImage('images/mockups/alfalah-thumb.svg'),
    screenshots: [
      {
        url: publicImage('images/mockups/alfalah-1.svg'),
        caption: {
          id: 'Tampilan Beranda Portal dengan Navigasi Unit Yayasan',
          en: 'Homepage Portal Overview with Foundation Unit Breakdown',
        },
      },
      {
        url: publicImage('images/mockups/alfalah-2.svg'),
        caption: {
          id: 'Struktur Transparansi Program dan Informasi Donasi',
          en: 'Transparency Portal Layout and Program Information Structure',
        },
      },
    ],
    liveUrl: 'https://example.org/yayasan-demo',
    results: {
      id: 'Seluruh materi informasi yayasan kini terpusat dalam satu tautan resmi, mengurangi pertanyaan berulang terkait administrasi penerimaan santri baru.',
      en: 'All foundation publications are now consolidated within a single verified domain, substantially reducing repetitive administrative inquiries during intake periods.',
    },
  },
  {
    slug: 'kopi-sentra-pos-inventory',
    title: {
      id: 'Kopi Sentra — Mobile POS & Inventaris UMKM',
      en: 'Kopi Sentra — SMB Mobile POS & Inventory',
    },
    category: 'mobile',
    status: 'DEMO PROJECT',
    featured: true,
    summary: {
      id: 'Aplikasi mobile percontohan (demo) untuk pencatatan transaksi kasir harian dan pemantauan stok bahan baku kedai kopi UMKM.',
      en: 'Functional demo mobile application designed for daily cashier transaction logging and ingredient inventory tracking for artisan coffee shops.',
    },
    background: {
      id: 'Banyak pelaku UMKM kedai kopi menghadapi selisih stok bahan dan kesulitan mencatat omzet harian saat jam ramai karena sistem kasir konvensional terlalu rumit dan mahal.',
      en: 'Artisan coffee business owners often face stock discrepancies and checkout bottlenecks during peak hours due to bulky, overly complex conventional POS systems.',
    },
    solution: {
      id: 'Merancang antarmuka mobile-first yang ergonomis dengan mode kasir cepat (quick checkout), peringatan stok menipis secara visual, dan rekapitulasi shift kasir tanpa komplikasi.',
      en: 'Designed an ergonomic mobile-first workflow featuring rapid tap-to-order checkout, visual low-stock alerts, and streamlined cash shift reconciliation.',
    },
    keyFeatures: {
      id: [
        'Katalog menu dengan varian suhu (Hot/Ice) dan add-on',
        'Pencatatan transaksi kasir dalam 3 kali sentuhan',
        'Peringatan otomatis ketika bahan baku (biji kopi, susu) mendekati batas minimal',
        'Rekapitulasi penjualan per shift dalam format ringkas',
        'Dukungan penyimpanan transaksi lokal saat koneksi internet terputus',
      ],
      en: [
        'Interactive menu grid with beverage temperature (Hot/Ice) and modifiers',
        'Rapid three-tap checkout flow tailored for busy counter environments',
        'Visual threshold warnings when raw ingredients dip below safe thresholds',
        'Concise end-of-shift sales reconciliation summaries',
        'Local SQLite data persistence guaranteeing offline functionality',
      ],
    },
    technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'SQLite', 'Figma'],
    role: {
      id: 'Perancangan Konsep, Desain UX Mobile, dan Implementasi Prototipe Fungsional',
      en: 'Concept Ideation, Mobile UX Architecture, and Functional Demo Implementation',
    },
    thumbnail: publicImage('images/mockups/kopisentra-thumb.svg'),
    screenshots: [
      {
        url: publicImage('images/mockups/kopisentra-1.svg'),
        caption: {
          id: 'Layar Kasir Cepat dengan Pilihan Kategori dan Varian Minuman',
          en: 'Quick Checkout Screen with Category Filtering and Modifiers',
        },
      },
      {
        url: publicImage('images/mockups/kopisentra-2.svg'),
        caption: {
          id: 'Panel Pemantauan Stok Bahan Baku Kritis',
          en: 'Ingredient Inventory Threshold Dashboard',
        },
      },
    ],
    repoUrl: 'https://github.com/sidqaven/kopi-sentra-pos-demo',
    results: {
      id: 'Prototipe fungsional berhasil mendemonstrasikan efisiensi alur pemesanan yang 40% lebih cepat dibandingkan antarmuka POS standar.',
      en: 'The functional prototype verified an ergonomic ordering loop approximately 40% faster than standard multi-step commercial POS applications.',
    },
  },
  {
    slug: 'samudra-logistics-fleet-dashboard',
    title: {
      id: 'Samudra Fleet — Konsep UI/UX Dashboard Logistik',
      en: 'Samudra Fleet — Logistics Dashboard UI/UX Concept',
    },
    category: 'uiux',
    status: 'UI/UX CONCEPT',
    featured: true,
    summary: {
      id: 'Eksplorasi konsep sistem desain dan antarmuka pemantauan armada armada pengiriman antar-pulau dengan visualisasi data densitas tinggi.',
      en: 'High-fidelity design system study and monitoring dashboard concept for inter-island commercial freight logistics and dispatch operators.',
    },
    background: {
      id: 'Operator armada logistik sering mengalami kelelahan visual (cognitive overload) akibat tampilan tabel data logistik lama yang padat dan minim diferensiasi hierarki status urgensi.',
      en: 'Fleet dispatch controllers experience severe cognitive fatigue when interpreting legacy data tables characterized by dense rows and poor visual status hierarchy.',
    },
    solution: {
      id: 'Menyusun tema Graphite & Midnight Navy dengan indikator aksen Champagne Gold dan Emerald untuk membedakan status rute kritis, waktu istirahat pengemudi, serta estimasi kedatangan kargo.',
      en: 'Constructed an editorial dark-themed UI with strategic color telemetry, prioritizing critical transit delays, driver rest compliance, and cargo arrival estimates.',
    },
    keyFeatures: {
      id: [
        'Komponen kartu metrik armada dengan indikator kesehatan kendaraan',
        'Peta rute perjalanan interaktif dengan pelacakan titik henti (checkpoints)',
        'Sistem tabel data responsif dengan fitur filter multi-parameter',
        'Design system lengkap mencakup 40+ komponen atomik',
      ],
      en: [
        'Compact metric cards indicating live engine diagnostics and fuel telemetry',
        'Interactive freight corridor map highlighting waypoint compliance',
        'Responsive data table architecture supporting multi-variable filtering',
        'Full design token library with 40+ reusable design components',
      ],
    },
    technologies: ['Figma', 'Design Systems', 'Design Tokens', 'User Journey Mapping'],
    role: {
      id: 'Riset Pengguna, Arsitektur Informasi, dan Perancangan Design System',
      en: 'User Research, Information Architecture, and Design System Creation',
    },
    thumbnail: publicImage('images/mockups/samudra-thumb.svg'),
    screenshots: [
      {
        url: publicImage('images/mockups/samudra-1.svg'),
        caption: {
          id: 'Tampilan Utama Dashboard Monitoring Armada dan Status Pengiriman',
          en: 'Central Dispatch Control Dashboard and Consignment Status',
        },
      },
      {
        url: publicImage('images/mockups/samudra-2.svg'),
        caption: {
          id: 'Sistem Desain Atomik Komponen dan Skala Tipografi',
          en: 'Atomic Component Library and Typography System Layout',
        },
      },
    ],
    results: {
      id: 'Studi konsep ini dijadikan acuan dasar sistem desain SIDQAVEN untuk proyek aplikasi berbasis data densitas tinggi.',
      en: 'This design study established SIDQAVEN’s foundational design token system for high-density enterprise dashboard engagements.',
    },
  },
  {
    slug: 'rayhan-nadia-digital-wedding',
    title: {
      id: 'Undangan Pernikahan Digital Rayhan & Nadia',
      en: 'Rayhan & Nadia Bespoke Wedding Invitation',
    },
    category: 'invitation',
    status: 'REAL PROJECT',
    featured: true,
    summary: {
      id: 'Undangan digital eksklusif bertema Champagne Gold & Warm Ivory dengan fitur personalisasi nama tamu, integrasi Google Maps, dan buku tamu RSVP.',
      en: 'Bespoke digital wedding invitation featuring a Champagne Gold editorial palette, dynamic guest recipient tags, Google Maps navigation, and RSVP guestbook.',
    },
    background: {
      id: 'Mempelai menginginkan undangan digital yang bebas dari iklan pihak ketiga, berdesain anggun, serta mudah dibuka oleh tamu dari berbagai usia termasuk keluarga sepuh.',
      en: 'The couple sought a bespoke invitation devoid of tacky third-party advertising, boasting refined typography that is immediately readable by guests of all generations.',
    },
    solution: {
      id: 'Membangun halaman website berkecepatan tinggi dengan navigasi satu halaman yang teratur, tombol akses peta lokasi langsung, formulir doa restu yang rapi, dan kontrol audio yang sopan.',
      en: 'Delivered an ultra-fast, single-page responsive web experience with direct venue directions, an elegant RSVP module, and respectful audio controls.',
    },
    keyFeatures: {
      id: [
        'Personalisasi nama tamu otomatis melalui parameter URL (?to=NamaTamu)',
        'Hitung mundur hari bahagia dengan sinkronisasi zona waktu lokal',
        'Integrasi tombol navigasi Google Maps menuju lokasi akad dan resepsi',
        'Galeri foto teroptimasi dengan kompresi WebP untuk hemat kuota internet',
        'Formulir konfirmasi kehadiran (RSVP) terhubung dengan rekapitulasi data',
      ],
      en: [
        'Dynamic guest greeting customization via URL parameters (?to=GuestName)',
        'Timezone-aware countdown timer to the ceremonial and reception proceedings',
        'Direct venue navigation triggers opening native Google Maps applications',
        'Bandwidth-optimized WebP photo gallery ensuring fast mobile rendering',
        'Integrated RSVP attendance submission module feeding into an organizer sheet',
      ],
    },
    technologies: ['React', 'TypeScript', 'SCSS Modules', 'Web Audio API', 'Vite'],
    role: {
      id: 'Desain Visual, Pengembangan Website, dan Pengelolaan Distribusi Link',
      en: 'Visual Design, Frontend Development, and Link Distribution Setup',
    },
    thumbnail: publicImage('images/mockups/wedding-thumb.svg'),
    screenshots: [
      {
        url: publicImage('images/mockups/wedding-1.svg'),
        caption: {
          id: 'Cover Undangan dengan Personalisasi Nama Tamu Terhormat',
          en: 'Bespoke Cover Presentation with Personalized Guest Tag',
        },
      },
      {
        url: publicImage('images/mockups/wedding-2.svg'),
        caption: {
          id: 'Bagian Jadwal Acara, Peta Navigasi, dan Formulir RSVP',
          en: 'Itinerary Schedule, Venue Maps, and RSVP Interface',
        },
      },
    ],
    liveUrl: 'https://example.org/invitation-demo',
    results: {
      id: 'Tercatat lebih dari 500 tamu membuka undangan dengan tingkat konfirmasi kehadiran (RSVP) yang akurat bagi panitia keluarga.',
      en: 'Successfully engaged over 500 guests with high RSVP submission accuracy, simplifying catering planning for the family organizers.',
    },
  },
  {
    slug: 'bina-cipta-corporate-profile',
    title: {
      id: 'Website Profil Korporat PT Bina Cipta Karya',
      en: 'PT Bina Cipta Karya Corporate Profile Website',
    },
    category: 'website',
    status: 'REAL PROJECT',
    featured: false,
    summary: {
      id: 'Website profil perusahaan konstruksi & kontraktor dengan etalase portofolio proyek selesai, legalitas badan usaha, dan formulir tender.',
      en: 'Corporate website for an engineering and construction firm, highlighting completed structural projects, corporate credentials, and formal procurement contact points.',
    },
    background: {
      id: 'Perusahaan membutuhkan representasi digital resmi untuk memenuhi prasyarat verifikasi tender lelang proyek pemerintah dan swasta nasional.',
      en: 'The firm required an authoritative official digital presence to meet verification criteria for governmental and institutional procurement tenders.',
    },
    solution: {
      id: 'Mengembangkan website berpenampilan profesional dengan katalog proyek yang dapat difilter berdasarkan jenis pekerjaan sipil, dilengkapi dokumen sertifikasi resmi.',
      en: 'Engineered a professional corporate site with categorized project showcases (civil, structural, MEP) and high-resolution downloadable credentials.',
    },
    keyFeatures: {
      id: [
        'Katalog proyek konstruksi dengan dokumentasi foto sebelum dan sesudah',
        'Halaman legalitas, struktur manajemen, dan sertifikasi ISO perusahaan',
        'Struktur SEO korporat untuk pencarian nama badan usaha di Google',
        'Formulir permintaan proposal dan komunikasi tender',
      ],
      en: [
        'Civil works catalog featuring before-and-after progress documentation',
        'Corporate compliance page displaying ISO certifications and board profiles',
        'Enterprise SEO schema for accurate business entity discovery',
        'Formal tender inquiry portal with direct contact routing',
      ],
    },
    technologies: ['React', 'TypeScript', 'SCSS', 'Vite'],
    role: {
      id: 'Desain Web, Frontend Engineering, dan Penataan Konten Korporat',
      en: 'Web Design, Frontend Engineering, and Corporate Copy Structuring',
    },
    thumbnail: publicImage('images/mockups/binacipta-thumb.svg'),
    screenshots: [
      {
        url: publicImage('images/mockups/binacipta-1.svg'),
        caption: {
          id: 'Halaman Profil Utama dengan Sorotan Proyek Konstruksi Unggulan',
          en: 'Corporate Homepage with Featured Structural Engineering Works',
        },
      },
    ],
    liveUrl: 'https://example.org/binacipta-demo',
    results: {
      id: 'Memenuhi standar verifikasi digital lelang dan memperkuat reputasi perusahaan di hadapan panitia pengadaan.',
      en: 'Satisfied tender audit digital verification requirements and fortified corporate credibility before institutional procurement boards.',
    },
  },
  {
    slug: 'klinik-sehat-booking-app',
    title: {
      id: 'Klinik Sehat — Konsep Aplikasi Reservasi Pasien',
      en: 'Klinik Sehat — Patient Appointment App Concept',
    },
    category: 'mobile',
    status: 'DEMO PROJECT',
    featured: false,
    summary: {
      id: 'Demo aplikasi mobile untuk reservasi nomor antrean dokter umum dan spesialis klinik kesehatan keluarga.',
      en: 'Functional mobile demo application for booking consultation slots and monitoring real-time queue numbers at family health clinics.',
    },
    background: {
      id: 'Antrean fisik yang panjang di ruang tunggu klinik menyebabkan penularan penyakit dan ketidaknyamanan bagi pasien anak maupun lansia.',
      en: 'Long physical queues in crowded clinic waiting rooms created health concerns and discomfort for pediatric and elderly patients.',
    },
    solution: {
      id: 'Merancang antarmuka mobile untuk melihat jadwal dokter yang bertugas, mengambil nomor antrean digital dari rumah, dan memantau estimasi jam panggilan.',
      en: 'Built a mobile flow allowing patients to inspect attending physician schedules, reserve a digital ticket remotely, and monitor estimated consultation times.',
    },
    keyFeatures: {
      id: [
        'Jadwal praktik dokter harian yang diperbarui secara langsung',
        'Pengambilan nomor antrean dengan estimasi sisa waktu tunggu',
        'Notifikasi saat nomor antrean pasien mendekati giliran (3 nomor sebelum)',
        'Riwayat kunjungan dan catatan resep obat sederhana',
      ],
      en: [
        'Live attending physician timetable with specialty filtering',
        'Remote queue ticket booking with dynamic arrival estimates',
        'Proximity alerts notifying patients when their turn is three slots away',
        'Consultation history and simple medication reminder log',
      ],
    },
    technologies: ['React Native', 'TypeScript', 'Lucide Icons', 'Figma'],
    role: {
      id: 'Perancangan Antarmuka UI/UX dan Pembuatan Demo Mobile',
      en: 'UI/UX Mobile Design and Interactive Demo Prototyping',
    },
    thumbnail: publicImage('images/mockups/klinik-thumb.svg'),
    screenshots: [
      {
        url: publicImage('images/mockups/klinik-1.svg'),
        caption: {
          id: 'Layar Pemilihan Dokter dan Pemesanan Slot Konsultasi',
          en: 'Physician Selection and Appointment Booking Flow',
        },
      },
    ],
    repoUrl: 'https://github.com/sidqaven/klinik-booking-concept',
    results: {
      id: 'Alur demonstrasi divalidasi oleh praktisi klinik sebagai solusi efektif untuk mengurangi kepadatan ruang tunggu sebesar 50%.',
      en: 'The workflow was commended by clinical administrators as a viable framework to diminish waiting hall congestion by over 50%.',
    },
  },
];
