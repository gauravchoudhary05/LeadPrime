'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Globe, ArrowUpRight, Eye } from 'lucide-react';
import SectionBadge from './SectionBadge';

interface PortfolioProject {
  title: string;
  subtitle: string;
  url: string;
  image: string;
  industry: string;
  tags: string[];
  description: string;
}

const portfolioProjects: PortfolioProject[] = [
  {
    title: 'Shalom Car Detailing',
    subtitle: 'Premium Car Detailing Studio',
    url: 'https://shalom-car-detailing.vercel.app/',
    image: '/Website Testimonials/Shalom.png',
    industry: 'Automotive',
    tags: ['3D Car Configurator', 'WebGL', 'Interactive'],
    description:
      'Immersive 3D car detailing experience with a real-time interactive car configurator — rotate, zoom, and switch finishes live in-browser.',
  },
  {
    title: 'ArthaSakhi',
    subtitle: 'Financial Empowerment Community',
    url: 'https://arth-sakhi.vercel.app/',
    image: '/Website Testimonials/Arth Sakhi.png',
    industry: 'Finance / Community',
    tags: ['Scroll Animations', 'Storytelling', 'Elegant'],
    description:
      'Warm, nature-inspired design empowering women with financial knowledge. Features smooth scroll-driven storytelling and elegant typography.',
  },
  {
    title: 'RK Decor',
    subtitle: 'Luxury Interior Solutions',
    url: 'https://rkdecor.vercel.app/',
    image: '/Website Testimonials/RK Decor.png',
    industry: 'Interior Design',
    tags: ['Dark Luxury', 'Gold Accents', 'Gallery'],
    description:
      'Sophisticated dark-themed luxury interior showcase with gold accents, project gallery, and step-by-step process visualization.',
  },
  {
    title: 'Blue Ribbon',
    subtitle: 'Artisanal Bakery & Café',
    url: 'https://the-blue-ribbon.vercel.app/',
    image: '/Website Testimonials/Blue Ribbon.png',
    industry: 'Food & Beverage',
    tags: ['Warm Aesthetic', 'Menu System', 'Artisanal'],
    description:
      'Cozy, artisanal café website with real-time status indicators, interactive tabbed menu, and a warm earthy color palette.',
  },
];

function PortfolioCard({ project, index }: { project: PortfolioProject; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card container */}
      <div className="portfolio-card relative rounded-2xl overflow-hidden border border-[rgba(0,229,195,0.1)] bg-[#0A0F1E] transition-all duration-500 hover:border-[rgba(0,229,195,0.3)] hover:shadow-[0_0_60px_rgba(0,229,195,0.08)]">
        {/* Browser preview area */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#050810]">
          {/* Fake browser chrome */}
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center gap-2 px-4 py-2.5 bg-[#0A0F1E]/95 backdrop-blur-sm border-b border-[rgba(255,255,255,0.04)]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-[11px] text-[#64748B] max-w-[280px] truncate">
                <Globe size={10} className="shrink-0 text-[#00E5C3]" />
                <span className="truncate">{project.url.replace('https://', '')}</span>
              </div>
            </div>
          </div>

          {/* Screenshot image */}
          <div className="absolute inset-0 pt-[36px]">
            <Image
              src={project.image}
              alt={`${project.title} — website screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              priority={index < 2}
            />
          </div>

          {/* Hover overlay with CTA */}
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-[rgba(5,8,16,0.65)] backdrop-blur-[3px]"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00E5C3] text-[#0B1121] text-[14px] font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,195,0.4)] hover:scale-105"
            >
              <Eye size={16} />
              View Live Site
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>

        {/* Content area */}
        <div className="p-5 lg:p-6">
          {/* Industry tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-[#00E5C3] bg-[rgba(0,229,195,0.08)] border border-[rgba(0,229,195,0.15)]">
              {project.industry}
            </span>
          </div>

          {/* Title + subtitle */}
          <h3 className="text-[18px] lg:text-[20px] font-bold text-white mb-0.5 group-hover:text-[#00E5C3] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-[13px] text-[#64748B] mb-3">{project.subtitle}</p>

          {/* Description */}
          <p className="text-[14px] text-[#94A3B8] leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium text-[#94A3B8] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] transition-all duration-300 group-hover:border-[rgba(0,229,195,0.15)] group-hover:text-[#B0BEC5]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Visit link */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#00E5C3] hover:text-white transition-colors duration-300"
          >
            <ExternalLink size={13} />
            Visit Website
            <motion.span
              initial={false}
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(0,229,195,0.05)_0%,rgba(139,92,246,0.03)_40%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 lg:mb-16">
          <SectionBadge text="Our Portfolio" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold text-white leading-tight"
          >
            Websites We&apos;ve{' '}
            <span className="text-gradient-cyan">Brought to Life</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-[15px] sm:text-[16px] text-[#94A3B8] max-w-2xl mx-auto leading-relaxed"
          >
            Every project is custom-built with cutting-edge tech — immersive 3D, scroll-driven animations, and pixel-perfect responsive design.
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioProjects.map((project, index) => (
            <PortfolioCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-14 text-center"
        >
          <p className="text-[14px] text-[#64748B] mb-4">
            Want a stunning website like these for your brand?
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-[15px] font-bold"
          >
            Start Your Project
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
