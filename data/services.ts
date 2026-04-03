import type { ServiceData } from '@/types';

export const services: ServiceData[] = [
  // ─── 1. 3D Website Building ────────────────────────────────────────────────
  {
    slug: '3d-website-building',
    title: '3D Website',
    gradientWord: 'Building',
    subtitle:
      'Immersive, scroll-driven 3D websites that captivate visitors and skyrocket conversions. Built with WebGL, Three.js, and cutting-edge frameworks.',
    badgeText: '3D & Immersive Web',
    description:
      'We craft jaw-dropping, interactive 3D websites that turn passive visitors into engaged customers. Our team leverages WebGL, Three.js, React Three Fiber, and GSAP to deliver scroll-reactive experiences, product configurators, and spatial storytelling that your competitors can only dream of.',
    features: [
      {
        icon: 'Box',
        title: 'Interactive 3D Product Showcases',
        description:
          'Let customers rotate, zoom, and interact with your products in real-time 3D — boosting engagement by up to 40%.',
      },
      {
        icon: 'Layers',
        title: 'Scroll-Driven Animations',
        description:
          'Cinematic scroll experiences using GSAP and Framer Motion that guide users through your story seamlessly.',
      },
      {
        icon: 'Zap',
        title: 'WebGL & Three.js Integration',
        description:
          'High-performance 3D scenes rendered directly in the browser — no plugins, no downloads, just pure immersion.',
      },
      {
        icon: 'Smartphone',
        title: 'Responsive 3D Design',
        description:
          'Every 3D experience is optimized for mobile, tablet, and desktop with adaptive quality scaling.',
      },
      {
        icon: 'Gauge',
        title: 'Performance-First Architecture',
        description:
          'Lazy-loaded assets, progressive rendering, and CDN-backed delivery for sub-2s load times.',
      },
      {
        icon: 'Palette',
        title: 'Custom Shader Effects',
        description:
          'Bespoke GLSL shaders for unique visual signatures — particles, distortions, and liquid effects.',
      },
    ],
    benefits: [
      { metric: '40%', label: 'Higher Engagement' },
      { metric: '3x', label: 'More Time on Site' },
      { metric: '65%', label: 'Lower Bounce Rate' },
      { metric: '<2s', label: 'Load Time' },
    ],
    ctaText: 'Build My 3D Website',
    ctaLink: '#contact',
  },

  // ─── 2. AI Calling Services ────────────────────────────────────────────────
  {
    slug: 'ai-calling',
    title: 'AI Calling',
    gradientWord: 'Services',
    subtitle:
      'Intelligent AI voice agents that qualify leads, book appointments, and handle customer calls 24/7 — with human-like conversation quality.',
    badgeText: 'AI Voice Agents',
    description:
      'Our AI calling platform deploys natural-sounding voice agents that handle inbound and outbound calls at scale. From lead qualification to appointment booking and follow-ups, our AI callers work around the clock — reducing your cost-per-lead while increasing show rates and customer satisfaction.',
    features: [
      {
        icon: 'Phone',
        title: 'Inbound & Outbound AI Calls',
        description:
          'Handle thousands of simultaneous calls with AI agents that sound natural and never miss a beat.',
      },
      {
        icon: 'UserCheck',
        title: 'Lead Qualification',
        description:
          'AI pre-qualifies leads using your custom criteria before passing hot prospects to your sales team.',
      },
      {
        icon: 'Calendar',
        title: 'Automated Appointment Booking',
        description:
          'Seamless CRM and calendar integration — AI books meetings directly into your team\'s schedule.',
      },
      {
        icon: 'RefreshCcw',
        title: 'Smart Follow-Up Sequences',
        description:
          'Automated follow-up calls with intelligent retry logic and personalized conversation flows.',
      },
      {
        icon: 'BarChart3',
        title: 'Real-Time Analytics Dashboard',
        description:
          'Track call outcomes, conversion rates, and sentiment analysis in a live reporting dashboard.',
      },
      {
        icon: 'Globe',
        title: 'Multi-Language Support',
        description:
          'AI agents fluent in 20+ languages — reach global audiences without hiring multilingual staff.',
      },
    ],
    benefits: [
      { metric: '80%', label: 'Cost Reduction' },
      { metric: '24/7', label: 'Availability' },
      { metric: '95%', label: 'Call Completion' },
      { metric: '3x', label: 'More Appointments' },
    ],
    ctaText: 'Deploy AI Callers',
    ctaLink: '#contact',
  },

  // ─── 3. AI Lead Generation Funnel ──────────────────────────────────────────
  {
    slug: 'ai-lead-generation-funnel',
    title: 'AI Lead Generation',
    gradientWord: 'Funnel',
    subtitle:
      'End-to-end AI-powered funnels that capture, nurture, and convert leads on autopilot — from first click to closed deal.',
    badgeText: 'AI-Powered Funnels',
    description:
      'We design and deploy high-converting lead generation funnels supercharged with AI. From intelligent landing pages with dynamic personalization to automated email/SMS nurture sequences and predictive lead scoring — every step is optimized to maximize your ROI.',
    features: [
      {
        icon: 'Target',
        title: 'AI-Optimized Landing Pages',
        description:
          'Dynamic landing pages that personalize headlines, CTAs, and content based on visitor behavior and source.',
      },
      {
        icon: 'BrainCircuit',
        title: 'Predictive Lead Scoring',
        description:
          'Machine learning models that score and prioritize leads so your team focuses on the highest-value prospects.',
      },
      {
        icon: 'Mail',
        title: 'Automated Nurture Sequences',
        description:
          'AI-written email and SMS sequences that adapt messaging based on engagement and funnel stage.',
      },
      {
        icon: 'GitBranch',
        title: 'Multi-Step Funnel Architecture',
        description:
          'Sophisticated funnel flows with conditional branching, A/B testing, and real-time optimization.',
      },
      {
        icon: 'PieChart',
        title: 'Conversion Analytics',
        description:
          'Granular funnel analytics with heatmaps, drop-off analysis, and AI-powered optimization suggestions.',
      },
      {
        icon: 'Plug',
        title: 'CRM & Tool Integrations',
        description:
          'Seamless integration with HubSpot, Salesforce, GoHighLevel, Zapier, and 100+ other platforms.',
      },
    ],
    benefits: [
      { metric: '5x', label: 'More Qualified Leads' },
      { metric: '60%', label: 'Lower CPL' },
      { metric: '35%', label: 'Higher Conversion' },
      { metric: '10x', label: 'ROI Average' },
    ],
    ctaText: 'Build My AI Funnel',
    ctaLink: '#contact',
  },

  // ─── 4. META ADS ───────────────────────────────────────────────────────────
  {
    slug: 'meta-ads',
    title: 'META',
    gradientWord: 'ADS',
    subtitle:
      'Data-driven Meta (Facebook & Instagram) ad campaigns that deliver qualified leads at scale — managed by certified performance marketers.',
    badgeText: 'Performance Marketing',
    description:
      'Our Meta Ads team combines deep platform expertise with AI-powered optimization to run campaigns that actually move the needle. We handle everything — strategy, creative, audience building, retargeting, and scaling — so you get more leads for less spend.',
    features: [
      {
        icon: 'Target',
        title: 'Precision Audience Targeting',
        description:
          'Custom and lookalike audiences built from your best customers, refined with AI-driven insights.',
      },
      {
        icon: 'Image',
        title: 'Scroll-Stopping Creatives',
        description:
          'Thumb-stopping ad creatives designed and A/B tested to maximize click-through rates.',
      },
      {
        icon: 'TrendingUp',
        title: 'ROAS-Focused Optimization',
        description:
          'Daily bid adjustments, budget reallocation, and creative rotation to maximize your return on ad spend.',
      },
      {
        icon: 'Repeat',
        title: 'Advanced Retargeting Funnels',
        description:
          'Multi-touch retargeting sequences across Facebook, Instagram, and Messenger for maximum conversions.',
      },
      {
        icon: 'FileBarChart',
        title: 'Transparent Reporting',
        description:
          'Weekly performance reports with clear KPIs, insights, and next-step recommendations.',
      },
      {
        icon: 'Rocket',
        title: 'Rapid Scaling Framework',
        description:
          'Proven framework to scale winning campaigns from $50/day to $5,000/day without performance drops.',
      },
    ],
    benefits: [
      { metric: '4.2x', label: 'Average ROAS' },
      { metric: '52%', label: 'Lower CPA' },
      { metric: '10M+', label: 'Ad Spend Managed' },
      { metric: '300+', label: 'Campaigns Launched' },
    ],
    ctaText: 'Launch My Meta Ads',
    ctaLink: '#contact',
  },

  // ─── 5. Video Editing ──────────────────────────────────────────────────────
  {
    slug: 'video-editing',
    title: 'Video',
    gradientWord: 'Editing',
    subtitle:
      'Cinematic video editing for ads, social media, YouTube, and brand content — crafted to capture attention in the first 3 seconds.',
    badgeText: 'Video Production',
    description:
      'From raw footage to polished masterpieces, our video editing team delivers scroll-stopping content optimized for every platform. We specialize in short-form reels, YouTube long-form, ad creatives, and brand stories — all with fast turnaround and unlimited revisions.',
    features: [
      {
        icon: 'Film',
        title: 'Short-Form Reels & TikToks',
        description:
          'Attention-grabbing vertical videos with trendy edits, captions, and hooks designed for virality.',
      },
      {
        icon: 'Youtube',
        title: 'YouTube Long-Form Editing',
        description:
          'Professional editing with dynamic cuts, motion graphics, sound design, and retention-optimized pacing.',
      },
      {
        icon: 'Clapperboard',
        title: 'Ad Creative Production',
        description:
          'High-converting video ads for Meta, Google, and TikTok — with multiple hook variants for A/B testing.',
      },
      {
        icon: 'Wand2',
        title: 'Motion Graphics & VFX',
        description:
          'Custom animations, lower thirds, transitions, and visual effects that elevate your brand.',
      },
      {
        icon: 'Headphones',
        title: 'Sound Design & Music',
        description:
          'Professional audio mixing, sound effects, voiceover integration, and licensed music selection.',
      },
      {
        icon: 'Clock',
        title: '48-Hour Turnaround',
        description:
          'Fast delivery without compromising quality — most projects delivered within 48 hours.',
      },
    ],
    benefits: [
      { metric: '500+', label: 'Videos Delivered' },
      { metric: '48hr', label: 'Avg Turnaround' },
      { metric: '98%', label: 'Client Satisfaction' },
      { metric: '∞', label: 'Revisions Included' },
    ],
    ctaText: 'Start Video Project',
    ctaLink: '#contact',
  },

  // ─── 6. Graphic Designing ──────────────────────────────────────────────────
  {
    slug: 'graphic-designing',
    title: 'Graphic',
    gradientWord: 'Designing',
    subtitle:
      'Premium brand design, social media graphics, pitch decks, and marketing collateral — crafted by designers who understand conversion.',
    badgeText: 'Creative Design',
    description:
      'Our design team creates visual assets that don\'t just look beautiful — they convert. From complete brand identity systems to daily social media content, ad creatives, and investor pitch decks, we deliver designs that amplify your brand and drive results.',
    features: [
      {
        icon: 'Paintbrush',
        title: 'Brand Identity & Logo Design',
        description:
          'Complete brand identity packages — logo, color palette, typography, and brand guidelines.',
      },
      {
        icon: 'Layout',
        title: 'Social Media Content',
        description:
          'On-brand social media graphics, story templates, and carousel designs for consistent posting.',
      },
      {
        icon: 'Presentation',
        title: 'Pitch Decks & Presentations',
        description:
          'Investor-ready pitch decks and sales presentations with compelling data visualization.',
      },
      {
        icon: 'Megaphone',
        title: 'Ad Creative Design',
        description:
          'High-converting ad graphics for Meta, Google Display, and programmatic campaigns.',
      },
      {
        icon: 'FileImage',
        title: 'Print & Packaging Design',
        description:
          'Business cards, brochures, packaging, and merchandise design with print-ready file delivery.',
      },
      {
        icon: 'Infinity',
        title: 'Unlimited Design Subscription',
        description:
          'Flat-rate monthly plans with unlimited design requests, revisions, and dedicated designers.',
      },
    ],
    benefits: [
      { metric: '1000+', label: 'Designs Delivered' },
      { metric: '24hr', label: 'First Draft' },
      { metric: '100%', label: 'Original Work' },
      { metric: '∞', label: 'Revisions' },
    ],
    ctaText: 'Get Custom Designs',
    ctaLink: '#contact',
  },
];

// ─── Helper: Get service by slug ─────────────────────────────────────────────
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

// ─── Helper: Get all slugs (for generateStaticParams) ────────────────────────
export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
