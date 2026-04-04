'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useLeadStore } from '@/store/useLeadStore';
import { SERVICE_OPTIONS } from '@/types';

const serviceLabels: Record<string, string> = {
  '3d-website-building': '3D Website Building',
  'ai-calling': 'AI Calling Services',
  'ai-lead-generation-funnel': 'AI Lead Generation Funnel',
  'meta-ads': 'META ADS',
  'video-editing': 'Video Editing',
  'graphic-designing': 'Graphic Designing',
};

const budgetOptions = ['< $1K', '$1K - $5K', '$5K - $10K', '$10K - $25K', '$25K+'] as const;

export default function ContactFormCard({ preselectedService }: { preselectedService?: string }) {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    hasError,
    setField,
    submitForm,
  } = useLeadStore();

  useEffect(() => {
    if (preselectedService && !formData.service) {
      setField('service', preselectedService);
    }
  }, [preselectedService, formData.service, setField]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <div className="card-base p-8 lg:p-10 w-full mt-6">
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10"
        >
          <CheckCircle size={56} className="text-[#00E5C3] mx-auto mb-4" />
          <h3 className="text-[22px] font-bold text-white mb-2">Thank you!</h3>
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
  );
}
