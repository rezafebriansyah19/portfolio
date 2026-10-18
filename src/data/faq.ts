export interface FaqItem {
  id: string;
  question: {
    id: string;
    en: string;
  };
  answer: {
    id: string;
    en: string;
  };
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'pricing',
    question: {
      id: 'Bagaimana penentuan biaya untuk sebuah proyek?',
      en: 'How are project costs calculated?',
    },
    answer: {
      id: 'Biaya proyek ditentukan secara transparan berdasarkan ruang lingkup fungsional, kompleksitas arsitektur, jumlah halaman atau layar, dan kebutuhan integrasi pihak ketiga. Kami tidak menetapkan harga kaku tanpa memahami kebutuhan spesifik Anda terlebih dahulu, guna memastikan setiap rupiah diinvestasikan secara tepat sasaran.',
      en: 'Project investments are calculated transparently based on functional scope, architectural complexity, screen/page volume, and necessary third-party integrations. We do not enforce generic flat fees before understanding your exact requirements, ensuring every investment delivers measurable value.',
    },
  },
  {
    id: 'timeline',
    question: {
      id: 'Berapa lama estimasi pengerjaan sebuah proyek?',
      en: 'What is the typical project turnaround time?',
    },
    answer: {
      id: 'Durasi pengerjaan bervariasi bergantung pada skala proyek. Landing page atau undangan digital biasanya membutuhkan waktu 5–10 hari kerja. Website profil perusahaan atau katalog UMKM umumnya memerlukan 2–4 minggu. Sementara aplikasi web atau mobile dengan alur operasional kompleks dapat memakan waktu 1–3 bulan. Jadwal pengerjaan yang realistis akan disepakati bersama pada tahap perencanaan awal.',
      en: 'Timelines vary according to project scope. Focused landing pages or digital invitations typically take 5–10 working days. Corporate websites or SMB catalogs generally require 2–4 weeks. Complex mobile or web applications with multi-tier workflows may require 1–3 months. A realistic, milestone-based schedule is established collaboratively during the planning phase.',
    },
  },
  {
    id: 'revisions',
    question: {
      id: 'Bagaimana kebijakan revisi desain dan pengembangan?',
      en: 'How are design revisions and adjustments handled?',
    },
    answer: {
      id: 'Setiap proyek mencakup putaran revisi terstruktur pada setiap fase (fase wireframe/desain antarmuka dan fase pengujian implementasi kode). Kami mengarahkan evaluasi secara bertahap agar tidak terjadi perombakan mendadak yang mengacaukan jadwal peluncuran. Perubahan lingkup fitur baru di luar kesepakatan awal dapat didiskusikan sebagai addendum terpisah.',
      en: 'Every project includes structured feedback milestones at both the UI design phase and the final code validation phase. We organize reviews incrementally so that adjustments happen before major development, protecting launch deadlines. Significant scope additions outside the agreed brief can be introduced via an addendum.',
    },
  },
  {
    id: 'hosting-domain',
    question: {
      id: 'Apakah biaya domain dan hosting sudah termasuk?',
      en: 'Are domain names and cloud hosting included?',
    },
    answer: {
      id: 'Kami membantu merekomendasikan, mendaftarkan, dan mengonfigurasi domain serta layanan hosting atau server cloud terbaik sesuai kebutuhan Anda. Kepemilikan akun domain dan server tetap atas nama Anda atau organisasi Anda sepenuhnya, sehingga Anda memiliki kendali penuh atas aset digital Anda di masa depan.',
      en: 'We provide technical recommendations, domain registration guidance, and complete cloud server deployment. Ownership of domain assets and hosting accounts remains 100% in your organization’s name, ensuring absolute control over your digital infrastructure.',
    },
  },
  {
    id: 'maintenance',
    question: {
      id: 'Apakah SIDQAVEN menyediakan layanan pemeliharaan (maintenance)?',
      en: 'Does SIDQAVEN provide ongoing maintenance and support?',
    },
    answer: {
      id: 'Ya. Seluruh proyek yang kami selesaikan mendapatkan masa garansi penanganan kendala teknis (bug fix) pasca-peluncuran. Kami juga menyediakan paket pendampingan pemeliharaan berkala untuk pembaruan keamanan, pencadangan data rutin, dan penyesuaian konten.',
      en: 'Yes. All completed deployments include a post-launch warranty window for technical bug fixes and stabilization. We also offer optional recurring maintenance retainers covering security updates, periodic backups, and technical content adjustments.',
    },
  },
  {
    id: 'custom-features',
    question: {
      id: 'Bisakah saya meminta fitur kustom di luar paket standar?',
      en: 'Can I request bespoke custom functionality outside standard packages?',
    },
    answer: {
      id: 'Tentu. Sebagai studio rekayasa perangkat lunak, kami mengkhususkan diri dalam membangun solusi yang disesuaikan dengan alur kerja nyata klien kami, mulai dari integrasi payment gateway, sistem formulir dinamis, otomasi pesan WhatsApp, hingga integrasi database khusus.',
      en: 'Absolutely. As a dedicated software and creative engineering studio, we specialize in tailoring applications to your operational workflows—including payment gateway integrations, custom form builders, automated WhatsApp hooks, and bespoke database architectures.',
    },
  },
  {
    id: 'start-project',
    question: {
      id: 'Bagaimana cara memulai proyek bersama SIDQAVEN?',
      en: 'How do we begin a project with SIDQAVEN?',
    },
    answer: {
      id: 'Cukup klik tombol "Diskusikan Proyek" atau gunakan formulir kontak kami. Anda akan diarahkan ke WhatsApp studio kami untuk konsultasi awal tanpa biaya. Kami akan mendengarkan gambaran kebutuhan Anda, memberikan masukan teknis awal, dan menyusun penawaran resmi.',
      en: 'Simply click "Discuss Project" or complete our contact form. You will be connected directly to our studio’s WhatsApp for an initial zero-obligation consultation where we unpack your requirements, offer technical feedback, and draft a structured proposal.',
    },
  },
];
