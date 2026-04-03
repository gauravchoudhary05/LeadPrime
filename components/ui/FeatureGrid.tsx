'use client';

import { motion } from 'framer-motion';
import type { LucideProps } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { ServiceFeature, ServiceBenefit } from '@/types';
import SectionBadge from './SectionBadge';

// Dynamic Lucide icon resolver
function LucideIcon({ name, ...props }: { name: string } & LucideProps) {
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>;
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}

interface FeatureGridProps {
  features: ServiceFeature[];
  badgeText?: string;
  title?: string;
  gradientWord?: string;
  benefits?: ServiceBenefit[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function FeatureGrid({
  features,
  badgeText = 'What We Offer',
  title = 'Our',
  gradientWord = 'Services',
  benefits,
}: FeatureGridProps) {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
              className="card-base p-6 lg:p-8 group cursor-default"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[rgba(0,229,195,0.1)] border border-[rgba(0,229,195,0.2)] flex items-center justify-center mb-5 group-hover:bg-[rgba(0,229,195,0.15)] group-hover:border-[#00E5C3]/40 transition-all duration-300">
                <LucideIcon
                  name={feature.icon}
                  size={22}
                  className="text-[#00E5C3]"
                />
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-bold text-white mb-3 group-hover:text-gradient-cyan transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] sm:text-[15px] text-[#94A3B8] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Row (optional) */}
        {benefits && benefits.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="card-base p-6 text-center"
              >
                <div className="text-[28px] sm:text-[32px] font-extrabold text-gradient-cyan mb-1">
                  {benefit.metric}
                </div>
                <div className="text-[12px] text-[#64748B] uppercase tracking-wider font-medium">
                  {benefit.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
