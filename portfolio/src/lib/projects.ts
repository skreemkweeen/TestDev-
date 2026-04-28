export interface Project {
  slug: string
  title: string
  tagline: string
  industry: string
  clientType: string
  year: string
  services: string[]
  problem: string
  solution: string
  results: string[]
  coverColor: string
  accentColor: string
  index: string
  featured: boolean
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'brand-identity-nexus',
    title: 'Nexus Capital',
    tagline: 'Redefining trust for a next-gen fintech firm',
    industry: 'Fintech / Financial Services',
    clientType: 'Series B Startup',
    year: '2024',
    services: ['Brand Identity', 'Visual System', 'Motion Design', 'Brand Guidelines'],
    problem:
      'Nexus Capital raised $42M but still looked like a startup side project. Their brand was inconsistent, untrustworthy, and failing to convert high-net-worth investors at crucial pitch moments.',
    solution:
      'Built a complete visual identity system anchored in precision and authority — a custom wordmark, a disciplined type system using Inter and Playfair Display, a platinum-and-midnight color palette, and a comprehensive 60-page brand guidelines document. Every asset was designed to signal institutional credibility.',
    results: [
      'Investor conversion up 34% post-rebrand',
      'Closed $18M follow-on round within 90 days',
      'Featured in Forbes Fintech 50 announcement',
      'CEO described it as "the brand that finally made us look like a billion-dollar company"',
    ],
    coverColor: '#0D0D0D',
    accentColor: '#C9A84C',
    index: '01',
    featured: true,
    tags: ['Branding', 'Identity', 'Fintech'],
  },
  {
    slug: 'ux-redesign-aria',
    title: 'Aria Commerce',
    tagline: 'From friction to conversion — a luxury e-commerce overhaul',
    industry: 'Luxury Retail / E-Commerce',
    clientType: 'D2C Brand',
    year: '2024',
    services: ['UX Design', 'UI Design', 'Prototyping', 'Design System'],
    problem:
      'Aria Commerce had beautiful products but a digital experience that felt discount-brand. Mobile checkout abandonment was at 71%. Their design was inconsistent, their cart flow was broken on mobile, and the brand story was buried under clutter.',
    solution:
      'Conducted a full UX audit, ran 12 user interviews, then redesigned the entire purchase flow. Created a component-based design system with 200+ tokens, rebuilt the mobile checkout to 3 steps from 8, and introduced editorial-style product pages that told the brand story at every scroll.',
    results: [
      'Mobile checkout abandonment dropped from 71% to 29%',
      'Average order value increased 22%',
      'Page-to-purchase time reduced by 44%',
      'NPS score improved from 32 to 71',
    ],
    coverColor: '#0F0A0A',
    accentColor: '#B5835A',
    index: '02',
    featured: true,
    tags: ['UX', 'E-Commerce', 'Design System'],
  },
  {
    slug: 'saas-product-vaultz',
    title: 'Vaultz Platform',
    tagline: 'Designing clarity into a $30M enterprise SaaS product',
    industry: 'B2B SaaS / PropTech',
    clientType: 'Enterprise Software',
    year: '2023',
    services: ['Product Design', 'UX Research', 'Design System', 'Dashboard UI'],
    problem:
      'Vaultz had 40,000 enterprise users but a product that required 3-day onboarding training. Complex data was trapped behind confusing navigation. Churn was accelerating. Their sales team was losing deals because demos looked clunky.',
    solution:
      'Led a full product redesign over 4 months. Reorganized information architecture, simplified the navigation to a single sidebar model, built a comprehensive data visualization system using D3.js-ready specs, and created a living Figma design system used by a 6-person engineering team.',
    results: [
      'Onboarding time reduced from 3 days to 4 hours',
      'User satisfaction score up 58 points',
      'Demo-to-close rate improved by 31%',
      'Design system cut new feature shipping time by 40%',
    ],
    coverColor: '#050C12',
    accentColor: '#4A90D9',
    index: '03',
    featured: true,
    tags: ['Product Design', 'SaaS', 'B2B'],
  },
  {
    slug: 'campaign-solaris',
    title: 'Solaris Energy',
    tagline: 'Premium visual campaign for a clean energy revolution',
    industry: 'Clean Energy / CleanTech',
    clientType: 'Growth-Stage Company',
    year: '2024',
    services: ['Campaign Design', 'Art Direction', 'Social Media', 'Print & Digital'],
    problem:
      'Solaris Energy was competing with massive incumbents on a fraction of the budget. Their visual communication was generic stock-photo territory — forgettable and indistinguishable from competitors. They needed campaigns that punched at the level of billion-dollar brands.',
    solution:
      'Art directed a full omnichannel campaign: original photography direction, bold editorial layouts, a 40-asset social media system, display ads, pitch deck, and OOH executions. The visual language used dramatic contrast, large-scale typography, and cinematic photography to create instant authority.',
    results: [
      'Campaign reach of 4.2M impressions in first month',
      'Lead generation up 180% vs. previous quarter',
      'Partnership inquiries increased 3x',
      'Campaign won Regional ADDY Award for digital advertising',
    ],
    coverColor: '#080A05',
    accentColor: '#7DC242',
    index: '04',
    featured: false,
    tags: ['Campaign', 'Art Direction', 'CleanTech'],
  },
  {
    slug: 'mobile-app-grove',
    title: 'Grove Health',
    tagline: 'A wellness app that actually feels like wellness',
    industry: 'Health & Wellness / Consumer',
    clientType: 'VC-Backed Startup',
    year: '2023',
    services: ['Mobile UI/UX', 'App Design', 'Prototyping', 'Design System'],
    problem:
      'Grove had strong clinical backing but an app that felt clinical in the wrong way — cold, sterile, anxiety-inducing. Users were dropping off within the first session. The product-market fit was there; the design-emotion fit was not.',
    solution:
      'Redesigned the entire iOS and Android experience from ground up. Introduced a biophilic design language — organic shapes, earthy tones, gentle micro-animations. Rebuilt onboarding to feel like a conversation, created personalized dashboard states, and designed a habit-tracking system that felt rewarding instead of punishing.',
    results: [
      'Day-1 retention improved from 34% to 67%',
      'App Store rating went from 3.1 to 4.7 stars',
      '14-day retention up 89%',
      'Featured in App Store "Apps We Love" editorial',
    ],
    coverColor: '#050C08',
    accentColor: '#4CAF7D',
    index: '05',
    featured: false,
    tags: ['Mobile', 'App Design', 'Health'],
  },
  {
    slug: 'real-estate-summit',
    title: 'Summit Properties',
    tagline: 'Ultra-premium marketing for ultra-premium real estate',
    industry: 'Luxury Real Estate',
    clientType: 'Boutique Agency',
    year: '2024',
    services: ['Brand Identity', 'Marketing Design', 'Print Collateral', 'Digital Assets'],
    problem:
      'Summit was representing $5M–$20M properties with materials that looked like a budget brokerage. Their printed brochures felt cheap, their digital presence was amateurish, and their brand was failing to justify the premium prices they were commanding.',
    solution:
      'Created a full luxury brand system: a refined logotype, a dark editorial color palette, silk-finish print collateral, property microsite templates, and a social content system. Every touchpoint was designed to mirror the quality of the properties themselves.',
    results: [
      'Average days-on-market dropped by 28%',
      'Seller listing inquiries up 41%',
      'Average listing price increased 12% (seller confidence)',
      'Received 3 referral clients from competing brokers impressed by materials',
    ],
    coverColor: '#0A0808',
    accentColor: '#C9A84C',
    index: '06',
    featured: false,
    tags: ['Branding', 'Real Estate', 'Luxury'],
  },
]

export const getFeaturedProjects = () => projects.filter((p) => p.featured)
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug)
