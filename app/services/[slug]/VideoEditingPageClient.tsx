'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { openCalendlyPopup } from '@/components/ui/CalendlyWidgets';
import ContactFormCard from '@/components/forms/ContactFormCard';

/* ════════════════════════════════════════════════════════════════════════
 *  DATA
 * ════════════════════════════════════════════════════════════════════════ */

const stats = [
  { icon: '🎬', end: 650, suffix: '+', label: 'PROJECTS COMPLETED' },
  { icon: '👁️', end: 45, suffix: 'M+', label: 'VIEWS GENERATED' },
  { icon: '⏱️', end: 5, suffix: '+', label: 'YEARS EXPERIENCE' },
  { icon: '🤝', end: 100, suffix: '+', label: 'HAPPY CLIENTS' },
];

const showreels = [
  'https://player.vimeo.com/video/1202255133?autoplay=1&muted=1&loop=1&background=1',
  'https://player.vimeo.com/video/1202272304?autoplay=1&muted=1&loop=1&background=1',
  'https://player.vimeo.com/video/1202255134?autoplay=1&muted=1&loop=1&background=1',
  'https://player.vimeo.com/video/1202283220?autoplay=1&muted=1&loop=1&background=1',
  'https://player.vimeo.com/video/1202257176?autoplay=1&muted=1&loop=1&background=1',
  'https://player.vimeo.com/video/1202255132?autoplay=1&muted=1&loop=1&background=1',
];

const services = [
  {
    icon: '🎬',
    title: 'Video Editing',
    desc: 'Precision cutting, seamless transitions, and storytelling that keeps viewers hooked from first frame to last.',
    pct: 100,
  },
  {
    icon: '🎨',
    title: 'Color Grading',
    desc: 'Cinematic color science — from color correction to bespoke looks that define the visual identity of your content.',
    pct: 95,
  },
  {
    icon: '✨',
    title: 'Motion Graphics',
    desc: 'Dynamic titles, animated overlays, and motion elements that elevate your video to broadcast quality.',
    pct: 90,
  },
  {
    icon: '🔊',
    title: 'Sound Design',
    desc: 'Audio mixing, SFX layering, and music synchronization that completes the immersive experience.',
    pct: 85,
  },
];

const tools = [
  '✂ CapCut PC',
  '✂ Alight Motion',
  '✂ Premiere Pro',
  '✂ After Effects',
  '✂ Photoshop',
];

const processSteps = [
  {
    num: 1,
    title: 'Brief & Discovery',
    desc: 'We discuss your vision, target audience, goals, and style preferences to align on creative direction.',
  },
  {
    num: 2,
    title: 'Creative Planning',
    desc: 'We build a structured edit plan — shot selection, pacing map, music mood, and transition logic.',
  },
  {
    num: 3,
    title: 'Editing & Refinement',
    desc: 'Full edit execution with color grading, motion graphics, and sound design. Multiple revision rounds.',
  },
  {
    num: 4,
    title: 'Delivery & Review',
    desc: 'Final export in your required format — 4K, social-optimized, or broadcast-ready. Delivered on time.',
  },
];

const heroPills = [
  { emoji: '🎬', label: 'Cinematic' },
  { emoji: '⚡', label: 'Color Grading' },
  { emoji: '⭐', label: '5★ Rated' },
  { emoji: '📈', label: '45M+ Views' },
];

/* ════════════════════════════════════════════════════════════════════════
 *  ANIMATED COUNTER
 * ════════════════════════════════════════════════════════════════════════ */

function AnimatedCounter({
  end,
  suffix,
  inView,
}: {
  end: number;
  suffix: string;
  inView: boolean;
}) {
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { stiffness: 60, damping: 25 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionVal.set(end);
    else motionVal.set(0);
  }, [inView, end, motionVal]);

  useEffect(() => {
    const unsub = springVal.on('change', (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [springVal]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

/* ════════════════════════════════════════════════════════════════════════
 *  REEL CARD COMPONENT (WITH UNMUTE)
 * ════════════════════════════════════════════════════════════════════════ */

function ReelCard({ url, index }: { url: string; index: number }) {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const newMutedState = !isMuted;
      // Use native postMessage to set volume since iframe is cross-origin
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ method: 'setVolume', value: newMutedState ? 0 : 1 }),
        '*'
      );
      setIsMuted(newMutedState);
    }
  };

  // background=1 forces permanent mute. Convert to standard hidden controls payload.
  const src = url.replace('background=1', 'controls=0&title=0&byline=0&portrait=0&muted=1&autopause=0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="m-reel-card group"
    >
      {/* Invisible overlay to capture clicks and prevent Vimeo stealing them */}
      <div 
        className="absolute inset-0 z-10 cursor-pointer" 
        onClick={toggleMute}
      />
      <iframe
        ref={iframeRef}
        src={src}
        width="100%"
        height="100%"
        frameBorder={0}
        allow="autoplay; fullscreen"
        allowFullScreen
        loading="lazy"
        title={`Showreel ${index + 1}`}
        className="pointer-events-none"
      />
      
      {/* Floating Unmute Toggle Button */}
      <button 
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100 sm:opacity-100"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
 *  MAIN PAGE COMPONENT
 * ════════════════════════════════════════════════════════════════════════ */

export default function VideoEditingPageClient() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  const skillsRef = useRef<HTMLDivElement>(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: '-80px' });

  return (
    <div style={{ background: 'var(--m-bg)' }}>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="m-hero-glow" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="m-badge">VIDEO EDITING AGENCY</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="m-h1 mb-6"
          >
            Transforming Raw Footage into{' '}
            <span className="m-gradient-text">Cinematic Experiences.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] sm:text-[18px] leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--m-text-secondary)' }}
          >
            Crafting compelling visual stories through creative editing, motion graphics, and cinematic storytelling.
          </motion.p>

          {/* Pill Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-2.5 mb-10"
          >
            {heroPills.map((pill) => (
              <span key={pill.label} className="m-float-badge">
                {pill.emoji} {pill.label}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a href="#reels" className="m-btn-filled">
              ▶ Watch Showreel
            </a>
            <button onClick={() => openCalendlyPopup()} className="m-btn-outline">
              Book a Strategy Call →
            </button>
          </motion.div>

          {/* Bottom Inline Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[12px] font-semibold uppercase tracking-widest"
            style={{ color: 'var(--m-text-muted)' }}
          >
            650+ PROJECTS <span className="m-dot-sep" /> 5+ YEARS EXP <span className="m-dot-sep" /> 45M+ VIEWS <span className="m-dot-sep" /> 100+ CLIENTS
          </motion.div>
        </div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section ref={statsRef} className="relative py-16 lg:py-20" style={{ background: 'var(--m-bg-section)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="m-card p-6 text-center"
              >
                <div className="text-[28px] mb-2">{stat.icon}</div>
                <div className="text-[28px] sm:text-[32px] font-extrabold m-gradient-text mb-1">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} inView={statsInView} />
                </div>
                <div className="text-[11px] uppercase tracking-widest font-semibold" style={{ color: 'var(--m-text-muted)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ REELS ═══════════ */}
      <section id="reels" className="relative py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5"
            >
              <span className="m-badge">FEATURED MASTERPIECES</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="m-h2 mb-4"
            >
              Featured <span className="m-gradient-text">Masterpieces</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ color: 'var(--m-text-secondary)' }}
              className="max-w-lg mx-auto text-[15px]"
            >
              6 curated reels · Cinematic editing, color grading &amp; motion · Auto-playing
            </motion.p>
          </div>

          <div className="reels-grid">
            {showreels.map((url, i) => (
              <ReelCard key={url} url={url} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES (2×2 grid with skill bars) ═══════════ */}
      <section ref={skillsRef} className="relative py-20 lg:py-28" style={{ background: 'var(--m-bg-section)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5"
            >
              <span className="m-badge">SERVICES</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="m-h2 mb-4"
            >
              What We <span className="m-gradient-text">Create</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ color: 'var(--m-text-secondary)' }}
              className="max-w-lg mx-auto text-[15px]"
            >
              Specialized in cinematic content across every medium.
            </motion.p>
          </div>

          {/* 2×2 Service Cards with Icon + Skill Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="m-card p-6"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="m-icon-container">{svc.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[17px] font-bold text-white mb-1">{svc.title}</h3>
                    <p className="text-[13px] leading-relaxed" style={{ color: 'var(--m-text-secondary)' }}>
                      {svc.desc}
                    </p>
                  </div>
                </div>
                {/* Skill Bar */}
                <div className="flex items-center gap-3">
                  <div className="m-skill-bar-track flex-1">
                    <motion.div
                      className="m-skill-bar-fill"
                      initial={{ scaleX: 0 }}
                      animate={skillsInView ? { scaleX: svc.pct / 100 } : { scaleX: 0 }}
                      transition={{ duration: 1.2, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] }}
                    />
                  </div>
                  <span className="text-[13px] font-bold m-gradient-text shrink-0">{svc.pct}%</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {tools.map((tool) => (
              <span key={tool} className="m-tool-tag">
                {tool}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ PROCESS (Vertical Timeline) ═══════════ */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5"
            >
              <span className="m-badge">HOW WE WORK</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="m-h2 mb-4"
            >
              Our <span className="m-gradient-text">Process</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ color: 'var(--m-text-secondary)' }}
              className="max-w-lg mx-auto text-[15px]"
            >
              A proven 4-step workflow for every project.
            </motion.p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative pl-14 sm:pl-16">
            {/* Timeline Line */}
            <div className="m-timeline-line" />

            <div className="space-y-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative flex items-start gap-5"
                >
                  {/* Timeline Dot */}
                  <div className="m-timeline-dot absolute -left-14 sm:-left-16" style={{ top: '1rem' }}>
                    {step.num}
                  </div>

                  {/* Card */}
                  <div className="m-card p-6 flex-1">
                    <h3 className="text-[17px] font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-[14px] leading-relaxed" style={{ color: 'var(--m-text-secondary)' }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CONTACT ═══════════ */}
      <section id="contact" className="relative py-20 lg:py-28" style={{ background: 'var(--m-bg-section)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5"
            >
              <span className="m-badge">GET IN TOUCH</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="m-h2 mb-4"
            >
              Let&apos;s <span className="m-gradient-text">Collaborate</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Location */}
              <div className="m-card p-5 flex items-center gap-4">
                <div className="m-icon-container">🌍</div>
                <div>
                  <div className="text-[13px] font-semibold uppercase tracking-wider" style={{ color: 'var(--m-text-muted)' }}>
                    Location
                  </div>
                  <div className="text-[15px] text-white font-medium">Global · Remote-First</div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919352222316"
                target="_blank"
                rel="noopener noreferrer"
                className="m-card p-5 flex items-center gap-4 block"
              >
                <div className="m-icon-container">💬</div>
                <div>
                  <div className="text-[13px] font-semibold uppercase tracking-wider" style={{ color: 'var(--m-text-muted)' }}>
                    WhatsApp
                  </div>
                  <div className="text-[15px] font-medium" style={{ color: 'var(--m-cyan)' }}>WhatsApp Us →</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:founder@leadprime.pro"
                className="m-card p-5 flex items-center gap-4 block"
              >
                <div className="m-icon-container">✉️</div>
                <div>
                  <div className="text-[13px] font-semibold uppercase tracking-wider" style={{ color: 'var(--m-text-muted)' }}>
                    Email
                  </div>
                  <div className="text-[15px] text-white font-medium">founder@leadprime.pro</div>
                </div>
              </a>

              {/* CTA */}
              <button onClick={() => openCalendlyPopup()} className="m-btn-filled w-full justify-center mt-4">
                📅 Book a Strategy Call
              </button>
            </motion.div>

            {/* Right — Inline Calendly Embed & Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="m-glass overflow-hidden" style={{ borderRadius: 16, width: "100%" }}>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/founder-leadprime/30min?hide_gdpr_banner=1&background_color=050810&text_color=ffffff&primary_color=00F5D4"
                  style={{ minWidth: 320, height: 700 }}
                />
              </div>

              <div className="m-glass overflow-hidden" style={{ borderRadius: 16, width: "100%" }}>
                <ContactFormCard preselectedService="video-editing" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
