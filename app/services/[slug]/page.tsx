import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import ServicePageClient from './ServicePageClient';
import VideoEditingPageClient from './VideoEditingPageClient';

// Generate static params for all 6 services
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

// Dynamic metadata per service
export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = getServiceBySlug(slug);
    if (!service) {
      return { title: 'Service Not Found — LeadPrime' };
    }
    return {
      title: `${service.title} ${service.gradientWord} — LeadPrime`,
      description: service.subtitle,
      openGraph: {
        title: `${service.title} ${service.gradientWord} — LeadPrime`,
        description: service.subtitle,
      },
    };
  });
}

// Server component page
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Custom page for Video Editing
  if (slug === 'video-editing') {
    return <VideoEditingPageClient />;
  }

  return <ServicePageClient service={service} />;
}

