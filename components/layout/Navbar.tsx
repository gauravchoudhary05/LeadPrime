'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, CalendarCheck } from 'lucide-react';
import { openCalendlyPopup } from '@/components/ui/CalendlyWidgets';
import { useUIStore } from '@/store/useUIStore';

const services = [
  { label: '3D Website Building', href: '/services/3d-website-building' },
  { label: 'AI Calling Services', href: '/services/ai-calling' },
  { label: 'AI Lead Gen Funnel', href: '/services/ai-lead-generation-funnel' },
  { label: 'META ADS', href: '/services/meta-ads' },
  { label: 'Video Editing', href: '/services/video-editing' },
  { label: 'Graphic Designing', href: '/services/graphic-designing' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#', hasDropdown: true },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) closeMobileMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [closeMobileMenu]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1121]/90 backdrop-blur-xl border-b border-[rgba(0,229,195,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
            <span
              className="text-[18px] font-bold tracking-[0.25em] uppercase text-white"
              style={{ letterSpacing: '0.25em' }}
            >
              LEAD
              <span className="text-gradient-cyan">PRIME</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button 
                    suppressHydrationWarning
                    className="flex items-center gap-1 text-[15px] text-[#94A3B8] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 py-2 bg-[#111B2E] border border-[rgba(0,229,195,0.15)] rounded-xl shadow-2xl overflow-hidden"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-2.5 text-[14px] text-[#94A3B8] hover:text-[#00E5C3] hover:bg-[rgba(0,229,195,0.05)] transition-all duration-200"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[15px] text-[#94A3B8] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Book a Call — Calendly popup */}
            <button
              suppressHydrationWarning
              onClick={() => openCalendlyPopup()}
              className="calendly-book-btn"
            >
              <CalendarCheck size={15} />
              Book a Call
            </button>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="btn-primary px-6 py-2.5 rounded-xl text-[14px] font-semibold"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            suppressHydrationWarning
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-white hover:text-[#00E5C3] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0B1121]/98 backdrop-blur-xl border-t border-[rgba(0,229,195,0.1)] overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label}>
                    <button
                      suppressHydrationWarning
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full py-3 text-[16px] text-[#94A3B8] hover:text-white transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-1 overflow-hidden"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={closeMobileMenu}
                              className="block py-2.5 text-[14px] text-[#64748B] hover:text-[#00E5C3] transition-colors"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block py-3 text-[16px] text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}

              <div className="pt-4 space-y-3">
                <button
                  suppressHydrationWarning
                  onClick={() => {
                    closeMobileMenu();
                    openCalendlyPopup();
                  }}
                  className="calendly-book-btn w-full justify-center py-3 text-[15px]"
                >
                  <CalendarCheck size={16} />
                  Book a Call
                </button>
                <Link
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="btn-primary block text-center px-6 py-3 rounded-xl text-[15px] font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
