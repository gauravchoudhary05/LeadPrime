'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import DynamicHero from '@/components/ui/DynamicHero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import SectionBadge from '@/components/ui/SectionBadge';
import LeadCaptureForm from '@/components/forms/LeadCaptureForm';
import { services } from '@/data/services';

// Dynamic Lucide icon resolver
function LucideIcon({ name, ...props }: { name: string } & LucideProps) {
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>;
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}

// Service card icon mapping (first icon from each service's features)
const serviceIcons: Record<string, string> = {
  '3d-website-building': 'Box',
  'ai-calling': 'Phone',
  'ai-lead-generation-funnel': 'Target',
  'meta-ads': 'TrendingUp',
  'video-editing': 'Film',
  'graphic-designing': 'Paintbrush',
};

export default function HomePage() {
  return (
    <>
      {/* ═══════════ HERO SECTION ═══════════ */}
      <DynamicHero
        title="AI-Powered Growth &"
        gradientWord="Creative Agency"
        subtitle="We combine cutting-edge AI technology with world-class creative talent to supercharge your brand's growth. From 3D websites to AI-powered lead generation — we do it all."
        badgeText="Welcome to LeadPrime"
        ctaText="Book a Free Strategy Call"
        ctaLink="#contact"
      />

      {/* ═══════════ SERVICES OVERVIEW ═══════════ */}
      <section id="services" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <SectionBadge text="What We Do" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[32px] sm:text-[36px] lg:text-[42px] font-extrabold text-white mt-5 mb-4"
            >
              Our Core{' '}
              <span className="text-gradient-accent">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#94A3B8] max-w-2xl mx-auto"
            >
              Six specialized service verticals — each powered by AI, data, and creative expertise — to cover every angle of your digital growth.
            </motion.p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="card-base p-6 lg:p-8 block group h-full"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,229,195,0.1)] border border-[rgba(0,229,195,0.2)] flex items-center justify-center mb-5 group-hover:bg-[rgba(0,229,195,0.15)] group-hover:border-[#00E5C3]/40 transition-all duration-300">
                    <LucideIcon
                      name={serviceIcons[service.slug] || 'Zap'}
                      size={22}
                      className="text-[#00E5C3]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] font-bold text-white mb-3">
                    {service.title}{' '}
                    <span className="text-gradient-cyan">{service.gradientWord}</span>
                  </h3>

                  {/* Description (truncated) */}
                  <p className="text-[14px] sm:text-[15px] text-[#94A3B8] leading-relaxed mb-5 line-clamp-3">
                    {service.subtitle}
                  </p>

                  {/* CTA Arrow */}
                  <div className="flex items-center gap-2 text-[14px] font-semibold text-[#00E5C3] group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHY LEADPRIME ═══════════ */}
      <section className="relative py-20 lg:py-32 bg-[#080E1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge text="Why LeadPrime" />
              <h2 className="text-[32px] sm:text-[36px] lg:text-[42px] font-extrabold text-white mt-5 mb-6">
                We Don&apos;t Just Build —{' '}
                <span className="text-gradient-accent">We Grow</span>
              </h2>
              <p className="text-[#94A3B8] leading-relaxed mb-8">
                Most agencies deliver pretty designs. We deliver results. Our AI-first approach means every pixel, every campaign, and every funnel is backed by data and optimized for conversions.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: 'AI-First Approach',
                    desc: 'Every service is enhanced with AI — from automated calling to predictive lead scoring.',
                  },
                  {
                    title: 'Full-Stack Capability',
                    desc: 'Design, development, marketing, and creatives — all under one roof.',
                  },
                  {
                    title: 'Results-Driven',
                    desc: 'We measure success by your ROI, not just deliverables. Performance is baked into everything.',
                  },
                  {
                    title: 'Dedicated Team',
                    desc: 'A dedicated project manager, designer, and strategist for every client.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[rgba(0,229,195,0.1)] border border-[rgba(0,229,195,0.2)] flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#00E5C3]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-[16px] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[#94A3B8] text-[14px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-5"
            >
              {[
                { metric: '150+', label: 'Projects Delivered', icon: 'Rocket' },
                { metric: '50+', label: 'Happy Clients', icon: 'Users' },
                { metric: '4.9★', label: 'Average Rating', icon: 'Star' },
                { metric: '10x', label: 'Average ROI', icon: 'TrendingUp' },
                { metric: '24/7', label: 'AI Support', icon: 'Bot' },
                { metric: '<48hr', label: 'Turnaround', icon: 'Clock' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="card-base p-6 text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,229,195,0.1)] border border-[rgba(0,229,195,0.2)] flex items-center justify-center mx-auto mb-3">
                    <LucideIcon
                      name={stat.icon}
                      size={18}
                      className="text-[#00E5C3]"
                    />
                  </div>
                  <div className="text-[24px] sm:text-[28px] font-extrabold text-gradient-cyan mb-1">
                    {stat.metric}
                  </div>
                  <div className="text-[12px] text-[#64748B] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS SECTION ═══════════ */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionBadge text="How It Works" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[32px] sm:text-[36px] lg:text-[42px] font-extrabold text-white mt-5 mb-4"
            >
              Our 4-Step{' '}
              <span className="text-gradient-accent">Process</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery Call',
                desc: 'We deep-dive into your business goals, target audience, and competitive landscape.',
                icon: 'MessageCircle',
              },
              {
                step: '02',
                title: 'Strategy & Plan',
                desc: 'Our AI-powered tools analyze data to craft a custom growth strategy.',
                icon: 'BrainCircuit',
              },
              {
                step: '03',
                title: 'Execute & Build',
                desc: 'Our team builds, launches, and deploys — with weekly updates and full transparency.',
                icon: 'Code2',
              },
              {
                step: '04',
                title: 'Optimize & Scale',
                desc: 'Continuous A/B testing, AI optimization, and scaling to maximize your ROI.',
                icon: 'TrendingUp',
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="card-base p-6 lg:p-8 relative group"
              >
                {/* Step Number */}
                <div className="text-[48px] font-extrabold text-[rgba(0,229,195,0.08)] absolute top-4 right-6 select-none">
                  {item.step}
                </div>

                <div className="w-12 h-12 rounded-xl bg-[rgba(0,229,195,0.1)] border border-[rgba(0,229,195,0.2)] flex items-center justify-center mb-5 group-hover:bg-[rgba(0,229,195,0.15)] transition-all duration-300">
                  <LucideIcon
                    name={item.icon}
                    size={22}
                    className="text-[#00E5C3]"
                  />
                </div>

                <h3 className="text-[18px] font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ LEAD CAPTURE FORM ═══════════ */}
      <LeadCaptureForm
        badgeText="Let's Talk"
        title="Ready to"
        gradientWord="Supercharge Your Growth?"
        subtitle="Fill out the form below and our strategy team will get back to you within 24 hours with a custom growth plan."
      />
    </>
  );
}
