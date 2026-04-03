'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useLeadStore } from '@/store/useLeadStore';
import { SERVICE_OPTIONS } from '@/types';
import SectionBadge from '../ui/SectionBadge';

const serviceLabels: Record<string, string> = {
  '3d-website-building': '3D Website Building',
  'ai-calling': 'AI Calling Services',
  'ai-lead-generation-funnel': 'AI Lead Generation Funnel',
  'meta-ads': 'META ADS',
  'video-editing': 'Video Editing',
  'graphic-designing': 'Graphic Designing',
};

const budgetOptions = ['< $1K', '$1K - $5K', '$5K - $10K', '$10K - $25K', '$25K+'] as const;

interface LeadCaptureFormProps {
  preselectedService?: string;
  badgeText?: string;
  title?: string;
  gradientWord?: string;
  subtitle?: string;
}

export default function LeadCaptureForm({
  preselectedService,
  badgeText = 'Get Started',
  title = 'Ready to',
  gradientWord = 'Grow?',
  subtitle = 'Fill out the form below and our team will get back to you within 24 hours with a custom strategy.',
}: LeadCaptureFormProps) {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    hasError,
    setField,
    submitForm,
  } = useLeadStore();

  // ✅ FIXED: Moved from render body into useEffect to avoid setState-during-render
  useEffect(() => {
    if (preselectedService && !formData.service) {
      setField('service', preselectedService);
    }
  }, [preselectedService]); // only re-runs if preselectedService changes

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <section id="contact" className="relative py-20 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,229,195,0.02)] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionBadge text={badgeText} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[32px] sm:text-[36px] lg:text-[42px] font-extrabold text-white mt-5 mb-4"
          >
            {title}{' '}
            <span className="text-gradient-accent">{gradientWord}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#94A3B8] max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card-base p-8 lg:p-10">
            {/* Success State */}
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <CheckCircle size={56} className="text-[#00E5C3] mx-auto mb-4" />
                <h3 className="text-[22px] font-bold text-white mb-2">
                  Thank you!
                </h3>
                <p className="text-[#94A3B8]">
                  We&apos;ve received your request. Our team will reach out within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name + Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] text-[#94A3B8] font-medium mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className={`input-base ${errors.name ? 'border-red-500/50' : ''}`}
                      placeholder="John Doe"
                      value={formData.name || ''}
                      onChange={(e) => setField('name', e.target.value)}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-[12px] mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[13px] text-[#94A3B8] font-medium mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      className={`input-base ${errors.email ? 'border-red-500/50' : ''}`}
                      placeholder="john@company.com"
                      value={formData.email || ''}
                      onChange={(e) => setField('email', e.target.value)}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-[12px] mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone + Company Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] text-[#94A3B8] font-medium mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      className={`input-base ${errors.phone ? 'border-red-500/50' : ''}`}
                      placeholder="+1 (234) 567-890"
                      value={formData.phone || ''}
                      onChange={(e) => setField('phone', e.target.value)}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-[12px] mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[13px] text-[#94A3B8] font-medium mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      className="input-base"
                      placeholder="Company name (optional)"
                      value={formData.company || ''}
                      onChange={(e) => setField('company', e.target.value)}
                    />
                  </div>
                </div>

                {/* Service + Budget Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] text-[#94A3B8] font-medium mb-1.5">
                      Service Needed *
                    </label>
                    <select
                      className={`input-base appearance-none ${errors.service ? 'border-red-500/50' : ''}`}
                      value={formData.service || ''}
                      onChange={(e) => setField('service', e.target.value)}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICE_OPTIONS.map((slug) => (
                        <option key={slug} value={slug}>
                          {serviceLabels[slug] || slug}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-400 text-[12px] mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.service}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[13px] text-[#94A3B8] font-medium mb-1.5">
                      Budget Range
                    </label>
                    <select
                      className="input-base appearance-none"
                      value={formData.budget || ''}
                      onChange={(e) => setField('budget', e.target.value || undefined)}
                    >
                      <option value="">Select budget (optional)</option>
                      {budgetOptions.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[13px] text-[#94A3B8] font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    className="input-base min-h-[120px] resize-none"
                    placeholder="Tell us about your project goals..."
                    value={formData.message || ''}
                    onChange={(e) => setField('message', e.target.value)}
                    rows={4}
                  />
                </div>

                {/* Global Error */}
                {hasError && errors.name && formData.name && (
                  <div className="flex items-center gap-2 text-red-400 text-[13px] bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                    <AlertCircle size={16} />
                    {errors.name}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 rounded-xl text-[15px] font-bold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-[12px] text-[#64748B] mt-3">
                  🔒 Your information is secure and will never be shared.
                </p>
              </form>
            )}
          </div>
        </motion.div>

        {/* ── Inline Calendly Embed ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mt-12"
        >
          <p className="text-center text-[14px] text-[#94A3B8] mb-4">
            Or skip the form and{' '}
            <span className="text-[#00E5C3] font-semibold">book a call directly</span>:
          </p>
          <div className="card-base overflow-hidden" style={{ borderRadius: 16 }}>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/team-leadprime/30min?hide_gdpr_banner=1&background_color=0f0f0f&text_color=ffffff&primary_color=00E5C3"
              style={{ minWidth: 320, height: 700 }}
            />
            {/* Calendly script is already loaded globally by CalendlyWidgets */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}