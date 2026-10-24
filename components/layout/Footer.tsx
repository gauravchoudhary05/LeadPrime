'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MessageCircle, MapPin } from 'lucide-react';

const services = [
  { label: '3D Website Building', href: '/services/3d-website-building' },
  { label: 'AI Calling Services', href: '/services/ai-calling' },
  { label: 'AI Lead Gen Funnel', href: '/services/ai-lead-generation-funnel' },
  { label: 'META ADS', href: '/services/meta-ads' },
  { label: 'Video Editing', href: '/services/video-editing' },
  { label: 'Graphic Designing', href: '/services/graphic-designing' },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Footer() {
  return (
    <footer className="relative bg-[#080E1A] border-t border-[rgba(0,229,195,0.08)]">
      {/* Top CTA Band */}
      <div className="bg-gradient-to-r from-[#00E5C3]/10 via-[#8B5CF6]/10 to-[#00E5C3]/10 border-b border-[rgba(0,229,195,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Ready to{' '}
              <span className="text-gradient-accent">supercharge</span>{' '}
              your growth?
            </h3>
            <p className="text-[#94A3B8] mt-2 text-[15px]">
              Book a free strategy call and see how LeadPrime can transform your business.
            </p>
          </div>
          <Link
            href="#contact"
            className="btn-primary flex items-center gap-2 px-8 py-3.5 rounded-xl text-[15px] font-semibold whitespace-nowrap"
          >
            Get Started
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <Link href="/" className="inline-block mb-4">
              <span className="text-[18px] font-bold tracking-[0.25em] uppercase text-white">
                LEAD<span className="text-gradient-cyan">PRIME</span>
              </span>
            </Link>
            <p className="text-[#94A3B8] text-[14px] leading-relaxed mb-6">
              AI-powered growth and creative agency helping businesses scale with
              cutting-edge technology, data-driven strategies, and stunning creative
              work.
            </p>
            <div className="flex gap-3">
              {([
                { label: 'X', href: 'https://x.com/leadprime_ai?s=11' },
                { label: 'In', href: 'https://www.linkedin.com/in/lead-prime-767564431/' },
                { label: 'Ig', href: 'https://www.instagram.com/leadprime.ai?cplk=MWZmZG43ZDdma3Z6cg%3D%3D&utm_source=qr' },
                { label: 'Yt', href: 'https://www.youtube.com/@LeadPrime7' },
              ] as const).map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#111B2E] border border-[rgba(0,229,195,0.15)] flex items-center justify-center text-[#94A3B8] hover:text-[#00E5C3] hover:border-[#00E5C3]/40 transition-all duration-200 text-[12px] font-semibold"
                >
                  {platform.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <h4 className="text-white font-semibold text-[15px] uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-[14px] text-[#94A3B8] hover:text-[#00E5C3] transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <h4 className="text-white font-semibold text-[15px] uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#94A3B8] hover:text-[#00E5C3] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <h4 className="text-white font-semibold text-[15px] uppercase tracking-wider mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#00E5C3] mt-0.5 shrink-0" />
                <a
                  href="mailto:gaurav@leadprime.pro"
                  className="text-[14px] text-[#94A3B8] hover:text-white transition-colors"
                >
                  gaurav@leadprime.pro
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={16} className="text-[#00E5C3] mt-0.5 shrink-0" />
                <a
                  href="https://wa.me/919251089743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-[#94A3B8] hover:text-white transition-colors"
                >
                  💬 +91 92510 89743
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#00E5C3] mt-0.5 shrink-0" />
                <span className="text-[14px] text-[#94A3B8]">
                  Remote-first, Worldwide
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[rgba(0,229,195,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[#64748B]">
            © {new Date().getFullYear()} LeadPrime. All rights reserved.
          </p>
          <p className="text-[13px] text-[#64748B]">
            Powered by{' '}
            <span className="text-gradient-cyan font-medium">AI</span>{' '}
            · Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
