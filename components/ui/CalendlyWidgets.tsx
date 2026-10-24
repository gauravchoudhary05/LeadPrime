'use client';

import { useEffect } from 'react';
import Script from 'next/script';

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
      initInlineWidget: (opts: { url: string; parentElement: Element; prefill?: object; utm?: object }) => void;
    };
    __calendlyReady?: Promise<void>;
    __calendlyResolve?: () => void;
  }
}

export const CALENDLY_URL = 'https://calendly.com/founder-leadprime/30min';

/**
 * Opens the Calendly popup modal.
 * Waits for the SDK to be ready if it hasn't loaded yet —
 * so clicking the button immediately after page load still works.
 */
export function openCalendlyPopup() {
  if (typeof window === 'undefined') return;

  const open = () => {
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
  };

  if (window.Calendly) {
    open();
  } else if (window.__calendlyReady) {
    window.__calendlyReady.then(open);
  } else {
    // Fallback: poll for up to 5 s
    let attempts = 0;
    const interval = setInterval(() => {
      if (window.Calendly) {
        clearInterval(interval);
        open();
      } else if (++attempts > 50) {
        clearInterval(interval);
      }
    }, 100);
  }
}

/**
 * Global Calendly component — loads the external CSS + JS once via next/script,
 * then initialises the floating badge widget.
 * Rendered inside <body> in the root layout so it runs on every page.
 */
export default function CalendlyWidgets() {
  // Set up the ready-promise before the script loads so openCalendlyPopup
  // can await it even if called before onLoad fires.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.__calendlyReady) {
      window.__calendlyReady = new Promise<void>((resolve) => {
        window.__calendlyResolve = resolve;
      });
    }
  }, []);

  const handleLoad = () => {
    // Resolve the promise so any queued openCalendlyPopup calls fire
    window.__calendlyResolve?.();

    // Init the floating badge widget
    window.Calendly?.initBadgeWidget({
      url: CALENDLY_URL,
      text: 'Book a Free Call',
      color: '#00E5C3',
      textColor: '#000000',
    });
  };

  return (
    <>
      {/* Calendly stylesheet */}
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      {/* Calendly JS — afterInteractive ensures it runs after hydration */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={handleLoad}
      />
    </>
  );
}
