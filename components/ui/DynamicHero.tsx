'use client';

import { motion } from 'framer-motion';
import SectionBadge from './SectionBadge';

interface DynamicHeroProps {
  title: string;
  gradientWord: string;
  subtitle: string;
  badgeText: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function DynamicHero({
  title,
  gradientWord,
  subtitle,
  badgeText,
  ctaText = 'Get Started',
  ctaLink = '#contact',
}: DynamicHeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="hero-glow" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,229,195,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,195,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <SectionBadge text={badgeText} />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[40px] sm:text-[48px] lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-white mb-6"
        >
          {title}{' '}
          <span className="text-gradient-accent">{gradientWord}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[16px] sm:text-[18px] text-[#94A3B8] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={ctaLink}
            className="btn-primary px-8 py-3.5 rounded-xl text-[15px] font-semibold inline-flex items-center gap-2"
          >
            {ctaText}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="ml-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 rounded-xl text-[15px] font-semibold text-white border border-[rgba(0,229,195,0.2)] hover:border-[#00E5C3]/50 hover:bg-[rgba(0,229,195,0.05)] transition-all duration-300"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: '150+', label: 'Projects Delivered' },
            { value: '50+', label: 'Happy Clients' },
            { value: '4.9★', label: 'Avg Rating' },
            { value: '24/7', label: 'AI Support' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-[24px] sm:text-[28px] font-extrabold text-gradient-cyan">
                {stat.value}
              </div>
              <div className="text-[12px] text-[#64748B] uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
