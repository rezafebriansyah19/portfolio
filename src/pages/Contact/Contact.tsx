import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MessageSquare, Mail, Clock, Info, Check, Send } from 'lucide-react';
import { useLanguage } from '../../i18n';
import { SITE_CONFIG } from '../../config/site';
import { PRICING_DATA } from '../../data/pricing';
import { SectionHeading } from '../../components/common/SectionHeading/SectionHeading';
import { Button } from '../../components/common/Button/Button';
import { buildWhatsAppUrl } from '../../utils/whatsapp';
import type { ConsultationFormData } from '../../utils/whatsapp';
import { usePageMetadata } from '../../utils/metadata';
import styles from './Contact.module.scss';

const serviceLabels = {
  website: 'Website Development',
  mobile: 'Mobile App Development',
  uiux: 'UI/UX Design',
  invitation: 'Digital Invitation',
} as const;
const serviceCategories = ['website', 'mobile', 'uiux', 'invitation'] as const;

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchParams] = useSearchParams();

  usePageMetadata({
    title: t.contact.title,
    description: t.contact.subtitle,
  });

  const queryService = searchParams.get('service');

  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    organization: '',
    service: '',
    description: '',
    budget: '',
    preferredLanguage: language === 'en' ? 'en' : 'id',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync service from query param if available
  useEffect(() => {
    if (queryService) {
      const category = serviceCategories.find((service) => service === queryService)
        ?? PRICING_DATA.find((item) => item.id === queryService)?.category;

      if (category) {
        setFormData((prev) => ({
          ...prev,
          service: serviceLabels[category],
        }));
      }
    }
  }, [queryService]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.contact.form.errors.fullNameRequired;
    }

    if (!formData.service) {
      newErrors.service = t.contact.form.errors.serviceRequired;
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      newErrors.description = t.contact.form.errors.descriptionRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Build the formatted WhatsApp link and open it in a new tab
    const waUrl = buildWhatsAppUrl(formData);

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div>
      <section className={styles.headerSection}>
        <div className="container">
          <SectionHeading
            badge={t.contact.badge}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
            align="center"
            as="h1"
          />
        </div>
      </section>

      <div className={`container ${styles.contactContent}`}>
        <div className={styles.contactGrid}>
          {/* Main Form Card */}
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Formulir Brief Proyek</h2>
              <p className={styles.formSubtitle}>
                Rangkum rencana proyek Anda untuk percakapan yang lebih terarah.
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <div className={styles.formGroup}>
                <label htmlFor="fullName" className={styles.label}>
                  {t.contact.form.fullName}
                  <span className={styles.requiredStar} aria-hidden="true">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  className={`${styles.input} ${errors.fullName ? styles.error : ''}`}
                  placeholder={t.contact.form.fullNamePlaceholder}
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                  }}
                  required
                />
                {errors.fullName && (
                  <span className={styles.errorMessage}>{errors.fullName}</span>
                )}
              </div>

              {/* Organization (Optional) */}
              <div className={styles.formGroup}>
                <label htmlFor="organization" className={styles.label}>
                  {t.contact.form.organization}
                </label>
                <input
                  id="organization"
                  type="text"
                  className={styles.input}
                  placeholder={t.contact.form.organizationPlaceholder}
                  value={formData.organization || ''}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                />
              </div>

              {/* Service Required */}
              <div className={styles.formGroup}>
                <label htmlFor="service" className={styles.label}>
                  {t.contact.form.service}
                  <span className={styles.requiredStar} aria-hidden="true">*</span>
                </label>
                <select
                  id="service"
                  className={`${styles.select} ${errors.service ? styles.error : ''}`}
                  value={formData.service}
                  onChange={(e) => {
                    setFormData({ ...formData, service: e.target.value });
                    if (errors.service) setErrors({ ...errors, service: '' });
                  }}
                  required
                >
                  <option value="">{t.contact.form.serviceSelectPlaceholder}</option>
                  <option value="Website Development">
                    {t.contact.form.serviceWebsite}
                  </option>
                  <option value="Mobile App Development">
                    {t.contact.form.serviceMobile}
                  </option>
                  <option value="UI/UX Design">
                    {t.contact.form.serviceUiux}
                  </option>
                  <option value="Digital Invitation">
                    {t.contact.form.serviceInvitation}
                  </option>
                  <option value="General Consultation">
                    {t.contact.form.serviceConsultation}
                  </option>
                </select>
                {errors.service && (
                  <span className={styles.errorMessage}>{errors.service}</span>
                )}
              </div>

              {/* Project Description */}
              <div className={styles.formGroup}>
                <label htmlFor="description" className={styles.label}>
                  {t.contact.form.description}
                  <span className={styles.requiredStar} aria-hidden="true">*</span>
                </label>
                <textarea
                  id="description"
                  className={`${styles.textarea} ${errors.description ? styles.error : ''}`}
                  placeholder={t.contact.form.descriptionPlaceholder}
                  value={formData.description}
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                    if (errors.description) setErrors({ ...errors, description: '' });
                  }}
                  rows={4}
                  required
                />
                {errors.description && (
                  <span className={styles.errorMessage}>{errors.description}</span>
                )}
              </div>

              {/* Budget Range (Optional) */}
              <div className={styles.formGroup}>
                <label htmlFor="budget" className={styles.label}>
                  {t.contact.form.budget}
                </label>
                <select
                  id="budget"
                  className={styles.select}
                  value={formData.budget || ''}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                >
                  <option value="">{t.contact.form.budgetSelectPlaceholder}</option>
                  <option value="Di bawah Rp 3 Juta">{t.contact.form.budgetTier1}</option>
                  <option value="Rp 3 Juta – Rp 7 Juta">{t.contact.form.budgetTier2}</option>
                  <option value="Rp 7 Juta – Rp 15 Juta">{t.contact.form.budgetTier3}</option>
                  <option value="Di atas Rp 15 Juta">{t.contact.form.budgetTier4}</option>
                  <option value="Diskusi Terlebih Dahulu">{t.contact.form.budgetDiscuss}</option>
                </select>
              </div>

              {/* Preferred Language Radio */}
              <div className={styles.formGroup}>
                <span className={styles.label}>{t.contact.form.preferredLang}</span>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="preferredLanguage"
                      value="id"
                      checked={formData.preferredLanguage === 'id'}
                      onChange={() =>
                        setFormData({ ...formData, preferredLanguage: 'id' })
                      }
                    />
                    <span>{t.contact.form.preferredLangId}</span>
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="preferredLanguage"
                      value="en"
                      checked={formData.preferredLanguage === 'en'}
                      onChange={() =>
                        setFormData({ ...formData, preferredLanguage: 'en' })
                      }
                    />
                    <span>{t.contact.form.preferredLangEn}</span>
                  </label>
                </div>
              </div>

              {/* Form Redirection Notice */}
              <div className={styles.noticeBox}>
                <Info size={18} />
                <span>{t.contact.form.formNotice}</span>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                icon={isSubmitting ? <Check size={18} /> : <Send size={18} />}
              >
                {isSubmitting
                  ? t.contact.form.submittingButton
                  : t.contact.form.submitButton}
              </Button>
            </form>
          </div>

          {/* Sidebar Direct Contacts */}
          <div className={styles.sidebarCol}>
            <div className={styles.directCard}>
              <h2 className={styles.directTitle}>
                {t.contact.directContact.title}
              </h2>
              <p className={styles.directDesc}>
                {t.contact.directContact.desc}
              </p>

              <div className={styles.contactItemList}>
                {/* WhatsApp */}
                <div className={styles.contactItem}>
                  <div className={styles.contactItemIcon}>
                    <MessageSquare size={20} />
                  </div>
                  <div className={styles.contactItemContent}>
                    <span className={styles.contactItemLabel}>
                      {t.contact.directContact.whatsapp}
                    </span>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.contactItemValue}
                    >
                      {SITE_CONFIG.contact.displayWhatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className={styles.contactItem}>
                  <div className={styles.contactItemIcon}>
                    <Mail size={20} />
                  </div>
                  <div className={styles.contactItemContent}>
                    <span className={styles.contactItemLabel}>
                      {t.contact.directContact.email}
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className={styles.contactItemValue}
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.availabilityBox}>
                <Clock size={16} />
                <span>{t.contact.directContact.availability}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
