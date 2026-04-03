'use client';

import DynamicHero from '@/components/ui/DynamicHero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import LeadCaptureForm from '@/components/forms/LeadCaptureForm';
import type { ServiceData } from '@/types';

interface ServicePageClientProps {
  service: ServiceData;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  return (
    <>
      {/* Hero */}
      <DynamicHero
        title={service.title}
        gradientWord={service.gradientWord}
        subtitle={service.subtitle}
        badgeText={service.badgeText}
        ctaText={service.ctaText}
        ctaLink={service.ctaLink}
      />

      {/* About This Service */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[16px] sm:text-[18px] text-[#94A3B8] leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Feature Grid + Benefits */}
      <FeatureGrid
        features={service.features}
        badgeText="What's Included"
        title="Key"
        gradientWord="Features"
        benefits={service.benefits}
      />

      {/* Lead Capture Form (pre-selected service) */}
      <LeadCaptureForm
        preselectedService={service.slug}
        badgeText="Get Started"
        title={`Ready for ${service.title}`}
        gradientWord={`${service.gradientWord}?`}
        subtitle={`Fill out the form below and we'll craft a custom ${service.title} ${service.gradientWord} strategy for your business.`}
      />
    </>
  );
}
