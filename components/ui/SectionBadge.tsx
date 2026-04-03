'use client';

import { motion } from 'framer-motion';

interface SectionBadgeProps {
  text: string;
  className?: string;
}

export default function SectionBadge({ text, className = '' }: SectionBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`section-badge ${className}`}
    >
      {text}
    </motion.div>
  );
}
