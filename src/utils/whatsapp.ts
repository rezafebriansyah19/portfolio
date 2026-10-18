import { SITE_CONFIG } from '../config/site';

export interface ConsultationFormData {
  fullName: string;
  organization?: string;
  service: string;
  description: string;
  budget?: string;
  preferredLanguage: 'id' | 'en';
}

/**
 * Builds a formatted WhatsApp direct link with url-encoded message text
 */
export const buildWhatsAppUrl = (data: ConsultationFormData): string => {
  const isEn = data.preferredLanguage === 'en';

  const greeting = isEn
    ? `Halo SIDQAVEN Studio, I would like to discuss a digital project.`
    : `Halo SIDQAVEN Studio, saya ingin berkonsultasi mengenai rencana proyek digital.`;

  const detailsHeader = isEn ? `*— Project Brief Details —*` : `*— Ringkasan Kebutuhan Proyek —*`;
  const nameLabel = isEn ? `• Full Name:` : `• Nama Lengkap:`;
  const orgLabel = isEn ? `• Organization/Business:` : `• Bisnis/Lembaga:`;
  const serviceLabel = isEn ? `• Required Service:` : `• Layanan:`;
  const descLabel = isEn ? `• Project Overview:` : `• Gambaran Proyek:`;
  const budgetLabel = isEn ? `• Budget Estimate:` : `• Estimasi Anggaran:`;
  const langLabel = isEn ? `• Preferred Language:` : `• Bahasa Komunikasi:`;

  const closing = isEn
    ? `Thank you. I look forward to your response.`
    : `Terima kasih. Mohon info ketersediaan waktu untuk diskusi lebih lanjut.`;

  const messageLines = [
    greeting,
    '',
    detailsHeader,
    `${nameLabel} ${data.fullName}`,
    data.organization ? `${orgLabel} ${data.organization}` : null,
    `${serviceLabel} ${data.service}`,
    `${descLabel} ${data.description}`,
    data.budget ? `${budgetLabel} ${data.budget}` : null,
    `${langLabel} ${data.preferredLanguage === 'en' ? 'English' : 'Bahasa Indonesia'}`,
    '',
    closing,
  ].filter((line): line is string => line !== null);

  const fullMessage = messageLines.join('\n');
  const encoded = encodeURIComponent(fullMessage);

  return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encoded}`;
};
