import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageSquare,
  Play,
  Sparkles,
  X,
} from 'lucide-react';
import { Button } from '../../components/common/Button/Button';
import { SectionHeading } from '../../components/common/SectionHeading/SectionHeading';
import { SITE_CONFIG } from '../../config/site';
import AI_VIDEO_SHOWCASE from '../../data/aiVideoShowcase';
import { usePageMetadata } from '../../utils/metadata';
import { createWhatsAppUrl } from '../../utils/whatsapp';
import styles from './AiVideoShowcase.module.scss';

const WHY_CHOOSE = [
  {
    title: 'Harga awal terjangkau',
    description: 'Mulai dari Rp30.000/video, dengan ruang penyesuaian sesuai kebutuhan konsep dan durasi.',
  },
  {
    title: 'Konsep video sesuai kebutuhan bisnis',
    description: 'Kami menyesuaikan gaya visual, pesan, dan format agar tetap relevan dengan target audiens Anda.',
  },
  {
    title: 'AI sebagai bagian dari proses produksi',
    description: 'Teknologi AI dipadukan dengan pengawasan kreatif agar hasilnya tetap konsisten dan siap dipakai.',
  },
  {
    title: 'Dukungan promosi digital',
    description: 'Video dibuat untuk kebutuhan pemasaran digital, baik untuk produk, layanan, maupun branding usaha.',
  },
  {
    title: 'Konsultasi dan revisi sesuai layanan',
    description: 'Setiap proses diawali dengan diskusi kebutuhan hingga review hasil sesuai ketentuan yang disepakati.',
  },
];

const ORDER_STEPS = [
  {
    title: 'Konsultasi',
    description: 'Pelanggan menjelaskan jenis usaha, produk, target audiens, dan tujuan video.',
  },
  {
    title: 'Penentuan Konsep',
    description: 'SIDQAVEN membantu menentukan gaya visual, pesan, dan format video sesuai kebutuhan.',
  },
  {
    title: 'Produksi Video',
    description: 'Video dibuat dengan bantuan teknologi AI sesuai ruang lingkup pesanan.',
  },
  {
    title: 'Review dan Penyerahan',
    description: 'Pelanggan meninjau hasil dan menerima video sesuai ketentuan layanan yang disepakati.',
  },
];

const getWhatsAppUrl = (videoTitle?: string) => {
  const baseMessage =
    'Halo SIDQAVEN, saya tertarik dengan jasa pembuatan video promosi AI mulai Rp30.000/video. Saya ingin konsultasi mengenai produk atau bisnis saya.';
  const detail = videoTitle ? ` Saya ingin menanyakan video "${videoTitle}".` : '';
  return createWhatsAppUrl(baseMessage + detail);
};

interface ShowcaseVideo {
  id: number;
  youtubeId: string;
  title: string;
  category: string;
  description: string;
  thumbnailUrl: string;
  youtubeUrl: string;
  embedUrl: string;
}

export const AiVideoShowcase: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<ShowcaseVideo | null>(null);
  const [failedThumbnails, setFailedThumbnails] = useState<Record<number, boolean>>({});
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  usePageMetadata({
    title: 'Jasa Video Promosi AI untuk UMKM',
    description:
      'Jasa pembuatan video promosi berbasis AI untuk UMKM, produk, dan bisnis. Mulai Rp30.000 per video. Lihat contoh video dan konsultasikan kebutuhan Anda bersama SIDQAVEN.',
    canonicalUrl: `${SITE_CONFIG.siteUrl}/services/ai-video-promotion`,
  });

  useEffect(() => {
    if (!selectedVideo) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedVideo(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedVideo]);

  const handleThumbnailError = (videoId: number) => {
    setFailedThumbnails((prev) => ({ ...prev, [videoId]: true }));
  };

  return (
    <div className={styles.pageShell}>
      <section className={styles.heroSection} aria-labelledby="ai-video-showcase-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>AI-POWERED VIDEO PRODUCTION.</span>
            <h1 id="ai-video-showcase-title" className={styles.headline}>
              Jasa Video Promosi AI untuk UMKM
            </h1>
            <p className={styles.subtitle}>
              Buat promosi produk dan bisnis Anda lebih menarik dengan video berbasis AI dari
              SIDQAVEN. Cocok untuk UMKM, toko, kuliner, dan berbagai kebutuhan pemasaran digital.
            </p>

            <div className={styles.priceRow}>
              <span className={styles.priceLabel}>Mulai</span>
              <span className={styles.priceValue}>Rp30.000/video</span>
            </div>

            <div className={styles.ctaGroup}>
              <Button href="#showcase" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                Lihat Contoh Video
              </Button>
              <Button href={getWhatsAppUrl()} variant="secondary" size="lg" icon={<MessageSquare size={18} />}>
                Pesan Video Sekarang
              </Button>
            </div>

            <div className={styles.heroNotes} aria-label="Keunggulan layanan">
              <span>AI-assisted creative direction</span>
              <span>Short-form video</span>
              <span>Brand-ready output</span>
            </div>
          </div>

          <div className={styles.heroVisual} aria-label="Preview video promosi">
            <div className={styles.phoneFrame}>
              <div className={styles.phoneHeader} aria-hidden="true">
                <span className={styles.cameraDot} />
                <span className={styles.cameraDot} />
                <span className={styles.cameraDot} />
              </div>

              <div className={styles.phoneScreen}>
                <div className={styles.previewTopbar}>
                  <span className={styles.previewBadge}>AI Promo</span>
                  <span className={styles.previewStatus}>Preview</span>
                </div>

                <div className={styles.previewHeroCard}>
                  <div className={styles.previewGlow} aria-hidden="true" />
                  <div className={styles.previewMeta}>
                    <span className={styles.previewLabel}>Produk</span>
                    <strong>Brand Story</strong>
                  </div>
                </div>

                <div className={styles.previewList}>
                  <div className={styles.previewItem}>
                    <span className={styles.previewPill}>UMKM</span>
                    <div>
                      <strong>Promo UMKM</strong>
                      <small>Video promosi</small>
                    </div>
                  </div>
                  <div className={styles.previewItem}>
                    <span className={styles.previewPillAlt}>Fashion</span>
                    <div>
                      <strong>Lookbook</strong>
                      <small>0:42 • Reels</small>
                    </div>
                  </div>
                  <div className={styles.previewItem}>
                    <span className={styles.previewPillAltTwo}>Makanan</span>
                    <div>
                      <strong>Food Reel</strong>
                      <small>0:35 • Social</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="showcase" className={styles.showcaseSection}>
        <div className="container">
          <SectionHeading
            badge="VIDEO SHOWCASE"
            title="Contoh Video Promosi"
            subtitle="Lihat berbagai contoh video yang dapat menjadi inspirasi untuk mempromosikan produk, layanan, dan bisnis Anda."
            align="center"
          />

          <p className={styles.showcaseNote}>
            Semua video di galeri ini ditampilkan sebagai eksperimen AI dan demonstrasi karya.
          </p>

          <div className={styles.videoGrid}>
            {(AI_VIDEO_SHOWCASE as ShowcaseVideo[]).map((video) => {
              const isFailed = !!failedThumbnails[video.id];

              return (
                <article key={video.id} className={styles.videoCard}>
                  <div className={styles.thumbWrap}>
                    {isFailed ? (
                      <div className={styles.fallbackThumb} aria-label={`Thumbnail tidak tersedia untuk ${video.title}`}>
                        <Play size={26} />
                        <span>{video.title}</span>
                      </div>
                    ) : (
                      <img
                        src={video.thumbnailUrl}
                        alt={`Thumbnail ${video.title}, eksperimen video promosi berbasis AI`}
                        className={styles.thumbnail}
                        loading="lazy"
                        onError={() => handleThumbnailError(video.id)}
                      />
                    )}
                    <button
                      type="button"
                      className={styles.playButton}
                      onClick={() => setSelectedVideo(video)}
                      aria-label={`Putar video ${video.title}`}
                    >
                      <Play size={18} fill="currentColor" />
                    </button>
                  </div>

                  <div className={styles.videoDetails}>
                    <span className={styles.videoCategory}>{video.category}</span>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>

                  <div className={styles.cardActions}>
                    <button
                      type="button"
                      className={styles.primaryAction}
                      onClick={() => setSelectedVideo(video)}
                    >
                      Putar Video
                    </button>
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.secondaryAction}
                    >
                      <Play size={16} />
                      <span>Lihat di YouTube</span>
                    </a>
                    <Button
                      href={getWhatsAppUrl(video.title)}
                      variant="outline"
                      size="sm"
                      icon={<ArrowUpRight size={16} />}
                    >
                      Pesan Video Serupa
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className={styles.modalDialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.modalEyebrow}>Video Showcase</span>
                <h3 id="video-modal-title">{selectedVideo.title}</h3>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className={styles.closeButton}
                onClick={() => setSelectedVideo(null)}
                aria-label="Tutup video player"
              >
                <X size={18} />
              </button>
            </div>

            <div className={styles.modalFrameWrap}>
              <iframe
                key={selectedVideo.youtubeId}
                src={selectedVideo.embedUrl}
                title={selectedVideo.title}
                className={styles.iframe}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
              />
            </div>

            <div className={styles.modalFooter}>
              <Button href={selectedVideo.youtubeUrl} variant="secondary" size="md">
                Buka di YouTube
              </Button>
              <Button href={getWhatsAppUrl(selectedVideo.title)} variant="primary" size="md">
                Pesan Video Serupa
              </Button>
            </div>
          </div>
        </div>
      )}

      <section className={styles.benefitsSection}>
        <div className="container">
          <SectionHeading
            badge="KENAPA SIDQAVEN"
            title="Kenapa Memilih SIDQAVEN?"
            subtitle="Kami membantu bisnis membangun video promosi yang selaras dengan kebutuhan pasar, identitas brand, dan tujuan komunikasi Anda."
            align="center"
          />

          <div className={styles.reasonGrid}>
            {WHY_CHOOSE.map((reason) => (
              <div key={reason.title} className={styles.reasonCard}>
                <div className={styles.reasonIcon} aria-hidden="true">
                  <CheckCircle2 size={18} />
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className="container">
          <SectionHeading
            badge="PERTANYAAN UMUM"
            title="Pertanyaan tentang Video Promosi AI"
            subtitle="Informasi awal sebelum Anda mendiskusikan kebutuhan video."
            align="center"
          />
          <div className={styles.reasonGrid}>
            <article className={styles.reasonCard}>
              <h3>Berapa harga video promosi AI?</h3>
              <p>Harga mulai Rp30.000 per video. Biaya akhir dibahas berdasarkan konsep, durasi, aset, dan ruang lingkup pesanan.</p>
            </article>
            <article className={styles.reasonCard}>
              <h3>Bagaimana cara memesan?</h3>
              <p>Hubungi SIDQAVEN melalui WhatsApp, lalu ceritakan produk, target audiens, dan ide video yang dibutuhkan.</p>
            </article>
            <article className={styles.reasonCard}>
              <h3>Apakah contoh di halaman ini proyek klien?</h3>
              <p>Galeri ini diberi label Eksperimen AI sebagai contoh karya dan bukan klaim bahwa seluruh video merupakan proyek klien.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className="container">
          <SectionHeading
            badge="PROSES PEMESANAN"
            title="Proses Pemesanan"
            subtitle="Proses sederhana dan terarah agar kebutuhan bisnis Anda dapat diubah menjadi konsep video yang efektif."
            align="center"
          />

          <div className={styles.stepGrid}>
            {ORDER_STEPS.map((step, index) => (
              <div key={step.title} className={styles.stepCard}>
                <div className={styles.stepNumber}>0{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.pricingSection}>
        <div className="container">
          <div className={styles.pricingCard}>
            <span className={styles.pricingBadge}>HARGA VIDEO PROMOSI AI</span>
            <h2>Harga Video Promosi AI</h2>
            <div className={styles.priceHighlight}>Mulai Rp30.000/video</div>
            <p>
              Harga akhir dapat disesuaikan dengan durasi video, kompleksitas konsep, kebutuhan
              aset, dan ruang lingkup pengerjaan.
            </p>
            <Button href={getWhatsAppUrl()} variant="primary" size="lg" icon={<ArrowUpRight size={18} />}>
              Konsultasi Harga
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.finalCtaSection}>
        <div className="container">
          <div className={styles.ctaPanel}>
            <div className={styles.ctaBadge}>
              <Sparkles size={14} />
              <span>SIDQAVEN STUDIO</span>
            </div>
            <h2>Siap Membuat Bisnis Anda Lebih Menarik di Dunia Digital?</h2>
            <p>
              Ceritakan kebutuhan bisnis Anda dan diskusikan konsep video promosi yang sesuai
              bersama SIDQAVEN.
            </p>
            <div className={styles.ctaActions}>
              <Button href={getWhatsAppUrl()} variant="primary" size="lg" icon={<MessageSquare size={18} />}>
                Pesan via WhatsApp
              </Button>
              <Button href="#showcase" variant="secondary" size="lg" icon={<ArrowRight size={18} />}>
                Lihat Semua Contoh Video
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiVideoShowcase;
