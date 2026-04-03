import { z } from 'zod';

// ─── Service Options Enum ────────────────────────────────────────────────────
export const SERVICE_OPTIONS = [
  '3d-website-building',
  'ai-calling',
  'ai-lead-generation-funnel',
  'meta-ads',
  'video-editing',
  'graphic-designing',
] as const;

export type ServiceSlug = (typeof SERVICE_OPTIONS)[number];

// ─── Lead Form Schema (Zod) ─────────────────────────────────────────────────
export const LeadFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(7, 'Phone number must be at least 7 digits')
    .max(20, 'Phone number is too long'),
  company: z.string().max(100).optional(),
  service: z.enum(SERVICE_OPTIONS, {
    message: 'Please select a service',
  }),
  message: z.string().max(1000, 'Message must be under 1000 characters').optional(),
  budget: z
    .enum(['< $1K', '$1K - $5K', '$5K - $10K', '$10K - $25K', '$25K+'] as const)
    .optional(),
});

export type LeadFormData = z.infer<typeof LeadFormSchema>;

// ─── Service Feature ─────────────────────────────────────────────────────────
export interface ServiceFeature {
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

// ─── Service Benefit ─────────────────────────────────────────────────────────
export interface ServiceBenefit {
  metric: string;
  label: string;
}

// ─── Service Data ────────────────────────────────────────────────────────────
export interface ServiceData {
  slug: ServiceSlug;
  title: string;
  gradientWord: string;
  subtitle: string;
  badgeText: string;
  description: string;
  heroImage?: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  ctaText: string;
  ctaLink: string;
}

// ─── Navigation Link ─────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

// ─── Testimonial ─────────────────────────────────────────────────────────────
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}
