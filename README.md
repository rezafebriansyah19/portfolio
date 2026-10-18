# SIDQAVEN — Digital Solutions & Creative Studio (V1)

> **Building Digital Solutions with Purpose.**  
> Studio pengembangan digital & kreatif independen yang berfokus menghadirkan website, aplikasi mobile Android/iOS, UI/UX design, dan undangan digital berkualitas tinggi dengan kejujuran teknis, desain elegan, dan kebermanfaatan nyata.

---

## 1. Overview & Brand Principles

SIDQAVEN melayani kebutuhan digital untuk:
- **UMKM & Bisnis**: Meningkatkan kehadiran online dan efisiensi operasional.
- **Institusi Pendidikan & Yayasan**: Portal informasi, transparansi donasi, dan profil akademik.
- **Organisasi & Komunitas**: Platform kolaborasi dan publikasi kegiatan.
- **Perorangan**: Undangan digital eksklusif bebas iklan untuk pernikahan dan acara khusus.

### Empat Prinsip Utama:
1. **Integritas (Integrity)**: Kejujuran dalam estimasi teknis, ruang lingkup pengerjaan, dan tanpa janji berlebihan.
2. **Pengetahuan (Knowledge)**: Arsitektur dan desain disusun berdasarkan riset kebutuhan pengguna dan standar rekayasa perangkat lunak.
3. **Inovasi (Innovation)**: Menggunakan teknologi modern yang relevan, efisien, dan siap dikembangkan lebih lanjut.
4. **Pelayanan (Service)**: Pendampingan sejak tahap *discovery*, perancangan, implementasi, hingga pasca-peluncuran.

---

## 2. Tech Stack

- **Frontend Core**: React 19, TypeScript
- **Bundler & Tooling**: Vite 7 (Rolldown-Vite), ESLint 9
- **Styling**: SCSS Modules (No Tailwind CSS)
  - Color Tokens: Midnight Navy (`#0B1220`), Graphite (`#171F2D`), Champagne Gold (`#D4B36B`), Warm Ivory (`#F5F3EE`)
- **Routing**: React Router v7 (`createBrowserRouter`)
- **Icons**: Lucide React + Bespoke SVGs
- **Internationalization**: Bilingual System (Indonesian default & English) with localStorage persistence and accessible toggling.
- **Consultation Routing**: Direct WhatsApp link generation with formatted message brief.

---

## 3. Project Structure

```text
src/
├── app/
│   ├── App.tsx             # Root router provider
│   └── router.tsx          # Application routes configuration
├── components/
│   ├── common/
│   │   ├── Badge/          # Status and category badges (Real, Demo, Concept, Gold)
│   │   ├── Button/         # Polymorphic button (Primary, Secondary, Outline, Ghost)
│   │   ├── LanguageSwitcher/ # Accessible ID/EN switcher
│   │   ├── ProjectCard/    # Portfolio card with status indicators
│   │   ├── SectionHeading/ # Reusable section title with badge & description
│   │   └── ServiceCard/    # Service capability card
│   ├── layout/
│   │   ├── Navbar/         # Responsive navbar with desktop menu & mobile drawer
│   │   ├── Footer/         # Complete footer with brand, service links, & contacts
│   │   └── PageLayout/     # Global layout shell with scroll-to-top handler
│   └── portfolio/
│       ├── PortfolioFilter/ # Category tab filter (All, Website, Mobile, UI/UX, Invitation)
│       └── PortfolioGrid/   # Responsive project grid with empty state fallback
├── config/
│   └── site.ts             # Centralized brand data, WhatsApp number, & social links
├── data/
│   ├── services.ts         # Centralized dataset for 4 core services
│   ├── portfolio.ts        # Centralized dataset for projects (Real, Demo, Concept)
│   └── faq.ts              # Transparent answers regarding pricing, duration, hosting
├── i18n/
│   ├── context.ts          # LanguageContext definition & types
│   ├── LanguageProvider.tsx # Provider with localStorage persistence
│   ├── useLanguage.ts      # Custom hook to consume translations
│   ├── id.ts               # Indonesian translations dictionary
│   └── en.ts               # English translations dictionary
├── pages/
│   ├── Home/               # Hero, Services, Featured Works, Why Us, Process, FAQ, CTA
│   ├── Services/           # Detailed specifications for all 4 services
│   ├── Portfolio/          # Portfolio listing with category filters
│   ├── ProjectDetail/      # Dynamic project detail page (/portfolio/:slug)
│   ├── About/              # Studio philosophy, vision, mission, and principles
│   ├── Contact/            # Brief consultation form with WhatsApp generator
│   └── NotFound/           # Accessible 404 page
├── styles/
│   ├── _variables.scss     # Design tokens (Colors, Typography, Spacing, Shadows, Radii)
│   ├── _mixins.scss        # Responsive media queries, card surfaces, focus rings
│   └── global.scss         # Global resets, font imports, and accessibility rules
├── types/
│   ├── portfolio.ts        # Strongly typed project model & statuses
│   └── service.ts          # Strongly typed service model
└── utils/
    ├── metadata.ts         # Dynamic document title & OpenGraph metadata hook
    └── whatsapp.ts         # Localized WhatsApp message formatter
```

---

## 4. Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build & Verification
```bash
npm run build
npm run preview
```
The production bundle will be generated in `dist/`.

### Linting
```bash
npm run lint
```

---

## 5. Configuration

All studio contact information, WhatsApp numbers, and social links are managed in a single file:
👉 [`src/config/site.ts`](file:///c:/Users/Lenovo/Documents/project_reza/sidqaven/src/config/site.ts)

- **`contact.whatsappNumber`**: Official studio WhatsApp number (international format without `+`, e.g., `'6281234567890'`).
- **`contact.displayWhatsapp`**: Formatted number for display (e.g., `'+62 812-3456-7890'`).
- **`contact.email`**: Official contact email.
- **`socials`**: URLs and handles for GitHub, LinkedIn, and Instagram.

---

## 6. Deployment Guide

To deploy SIDQAVEN V1 to hosting platforms such as Vercel, Netlify, Cloudflare Pages, or static web servers:

1. **Build Command**: `npm run build`
2. **Output Directory**: `dist`
3. **Single Page Application (SPA) Routing**: Ensure standard fallback rewrites to `index.html` for client-side routing:
   - **Vercel**: Handled automatically or via `vercel.json` rewrite (`{ "source": "/(.*)", "destination": "/" }`).
   - **Netlify**: Create a `_redirects` file with `/* /index.html 200`.
