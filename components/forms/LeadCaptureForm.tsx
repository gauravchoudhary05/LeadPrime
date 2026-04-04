'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../ui/SectionBadge';
import ContactFormCard from './ContactFormCard';

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


        {/* ── Inline Calendly Embed ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card-base overflow-hidden" style={{ borderRadius: 16 }}>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/founder-leadprime/30min?hide_gdpr_banner=1&background_color=0f0f0f&text_color=ffffff&primary_color=00E5C3"
              style={{ minWidth: 320, height: 700 }}
            />
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mt-12"
        >
          
          <p className="text-center text-[14px] text-[#94A3B8] mb-4">
            Or send us your details and{' '}
            <span className="text-[#00E5C3] font-semibold">we'll get back to you</span>:
          </p>
          <ContactFormCard preselectedService={preselectedService} />
        </motion.div>
      </div>
    </section>
  );
}