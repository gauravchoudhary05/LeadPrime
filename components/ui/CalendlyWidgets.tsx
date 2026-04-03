'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (opts: {
        url: string;
        text: string;
        color: string;
        textColor: string;
      }) => void;
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = 'https://calendly.com/team-leadprime/30min';

/**
 * Opens the Calendly popup modal.
 * Safe to call from anywhere — will no-op if script hasn't loaded yet.
 */
export function openCalendlyPopup() {
  if (typeof window !== 'undefined' && window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  }
}

/**
 * Global Calendly component — loads the external CSS + JS once,
 * then initialises the floating badge widget.
 *
 * Rendered inside <body> in the root layout so it appears on every page.
 */
export default function CalendlyWidgets() {
  useEffect(() => {
    // ── Load CSS ──
    if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    // ── Load JS & init badge ──
    if (!document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        window.Calendly?.initBadgeWidget({
          url: CALENDLY_URL,
          text: 'Book a Free Call',
          color: '#00F5D4',
          textColor: '#050810',
        });
      };
      document.body.appendChild(script);
    } else {
      // Script already loaded (e.g. client-side navigation) — re-init badge
      window.Calendly?.initBadgeWidget({
        url: CALENDLY_URL,
        text: 'Book a Free Call',
        color: '#00E5C3',
        textColor: '#000000',
      });
    }
  }, []);

  return null; // No visible DOM — the badge widget is injected by the Calendly script
}
