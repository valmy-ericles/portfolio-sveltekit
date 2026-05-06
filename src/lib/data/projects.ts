import type { Project } from '$lib/types';
import bricHealthIcon from '$lib/assets/brichealth.webp';
import filtrGameIcon from '$lib/assets/filtrgame.svg';
import goldnIcon from '$lib/assets/24kgoldn.png';
import consigazIcon from '$lib/assets/logo-consigaz.png';
import tendaIcon from '$lib/assets/tenda.webp';
import sarfatyIcon from '$lib/assets/sarfaty.svg';

export const projects: Project[] = [
  {
    id: 'tenda-design-system',
    slug: 'tenda-design-system',
    title: 'Tenda',
    shortDescription: 'Complete React component library built for Tenda, aligned to a design system with reusable patterns, solid engineering standards, and scalable software foundations.',
    description:
      'A full design-system-driven component library to standardize UI development across Tenda products and channels.',
    techStack: ['React', 'TypeScript', 'Storybook', 'Automated Tests', 'Design System'],
    challenges: [
      'Transforming design guidelines into production-ready, reusable React components.',
      'Ensuring consistency, testability, and safe adoption across multiple teams and product surfaces.'
    ],
    impact: [
      'Accelerated UI delivery with a shared component base, stronger code quality practices, and documented usage through Storybook.'
    ],
    image: tendaIcon,
    links: [
      {
        label: 'Live site',
        url: 'https://tenda.com/',
        type: 'live'
      }
    ],
    category: 'design-system',
    featured: true,
    context: 'Real estate · Design system',
    role: 'Software Engineer · Component library ownership',
    focusArea: 'React architecture · Best practices · Testing',
    impactLine: 'Scalable component ecosystem with documentation, test coverage, and consistent UI standards.'
  },
  {
    id: 'bric-health',
    slug: 'bric-health',
    title: 'Bric Health',
    shortDescription: 'Healthcare startup platform focused on pediatric and clinic workflows. I built key software experiences for patient retention, real-time scheduling, telemedicine, and secretary support.',
    description:
      'A healthcare web platform that helps clinics with patient retention, scheduling, telemedicine, and daily operations.',
    techStack: ['Software Web', 'UI Architecture', 'Scheduling Flows', 'Telemedicine UX', 'Healthcare Product'],
    challenges: [
      'Translating complex clinic workflows into simple, low-friction interfaces.',
      'Balancing conversion-focused landing sections with operational features used daily by medical teams.'
    ],
    impact: [
      'Supported key journeys highlighted in the product: onboarding in under 1 minute, online scheduling, telemedicine, and reduced no-shows via notifications.'
    ],
    image: bricHealthIcon,
    links: [
      {
        label: 'Live site',
        url: 'https://www.brichealth.com/#home',
        type: 'live'
      }
    ],
    category: 'healthcare',
    featured: true,
    context: 'Healthcare startup · B2B2C',
    role: 'Software Engineer · Product UI',
    focusArea: 'Scheduling · Telemedicine · Patient retention',
    impactLine: 'Clear clinic journeys, faster patient onboarding, and stronger retention communication.'
  },
  {
    id: 'filtr-game',
    slug: 'filtr-game',
    title: 'Filtr Game',
    shortDescription: 'Gamified music campaign website connected to Deezer. Users complete weekly missions, earn coins, and exchange points for rewards through a simple four-step flow.',
    description:
      'A promotional music platform where users play with Deezer, complete missions, and redeem rewards.',
    techStack: ['Software Web', 'Campaign Landing Page', 'Gamification UX', 'Deezer Integration', 'Responsive UI'],
    challenges: [
      'Designing a high-energy interface that keeps campaign rules clear and easy to follow.',
      'Guiding users through account connection, profile completion, mission progress, and prize redemption.'
    ],
    impact: ['Increased engagement through mission loops and reward mechanics, with a lightweight onboarding flow.'],
    image: filtrGameIcon,
    category: 'frontend',
    featured: true,
    context: 'Music campaign · Consumer engagement',
    role: 'Software Engineer · UX implementation',
    focusArea: 'Gamification flow · Conversion UI · Campaign performance',
    impactLine: 'Mission-based experience that drives repeat visits and reward redemption.'
  },
  {
    id: '24kgoldn',
    slug: '24kgoldn',
    title: '24kGoldn',
    shortDescription: 'Promotional website for the American rapper and singer 24kGoldn, designed to centralize releases, direct fans to streaming platforms, and capture subscriber interest.',
    description:
      'An artist-focused landing page combining visual storytelling, album highlights, and direct stream entry points.',
    techStack: ['Software Web', 'Landing Page UX', 'Music Promotion', 'Streaming Redirects', 'Content-driven UI'],
    challenges: [
      'Keeping the visual identity true to the artist while maintaining clear call-to-actions.',
      'Organizing multiple releases in a way that helps fans discover and stream quickly.'
    ],
    impact: [
      'Delivered a focused fan hub featuring top releases (Icarus, El Dorado, Dropped Outta College, Icarus II) and subscription touchpoints.'
    ],
    image: goldnIcon,
    links: [
      {
        label: 'Live site',
        url: 'https://24kgoldn.com/',
        type: 'live'
      }
    ],
    category: 'frontend',
    featured: true,
    context: 'Music artist page · Entertainment',
    role: 'Software Engineer · Visual implementation',
    focusArea: 'Brand expression · Streaming CTA · Fan journey',
    impactLine: 'Single destination to showcase releases and convert visits into streams/subscribers.'
  },
  {
    id: 'consigaz',
    slug: 'consigaz',
    title: 'Consigaz',
    shortDescription: 'Institutional website for one of the major GLP distributors in Brazil, with clear navigation for residential, enterprise, and condominium audiences.',
    description:
      'A corporate web experience focused on company positioning, service segmentation, and trust communication for the GLP market.',
    techStack: ['React', 'TypeScript'],
    challenges: [
      'Structuring a large institutional information architecture without harming discoverability.',
      'Balancing strong corporate branding with clear CTAs for multiple audience segments.'
    ],
    impact: [
      'Delivered a modernized digital presence with clearer user paths for key sections such as Quem Somos, Residências, Empresas, and Condomínios.'
    ],
    image: consigazIcon,
    links: [
      {
        label: 'Live site',
        url: 'https://consigaz.com.br/',
        type: 'live'
      }
    ],
    category: 'frontend',
    featured: true,
    context: 'Energy · Institutional website',
    role: 'Software Engineer',
    focusArea: 'Information architecture · Corporate UX',
    impactLine: 'Improved clarity of navigation and communication across strategic business segments.'
  },
  {
    id: 'sarfaty-authorization-platform',
    slug: 'sarfaty-authorization-platform',
    title: 'Grupo Sarfaty',
    shortDescription: 'Authorization platform where I contributed to backend services with Node.js/NestJS and built core software interfaces in Angular.',
    description:
      'A financial operations system focused on secure authorization flows, combining robust backend rules with clear operational UI.',
    techStack: ['Node.js', 'NestJS', 'Angular', 'TypeScript', 'Authorization Flows'],
    challenges: [
      'Designing reliable authorization logic with clear permission boundaries and secure backend behavior.',
      'Building Angular interfaces that exposed complex authorization states in a simple way for end users.'
    ],
    impact: [
      'Helped deliver a more structured authorization workflow, with backend consistency and software visibility for operational teams.'
    ],
    image: sarfatyIcon,
    links: [
      {
        label: 'Live site',
        url: 'https://gruposarfaty.com.br/',
        type: 'live'
      }
    ],
    category: 'fintech',
    featured: true,
    context: 'Financial services · Authorization system',
    role: 'Full-stack Engineer · Backend & UI',
    focusArea: 'Node/NestJS backend · Angular UI',
    impactLine: 'Secure authorization rules in the backend and clearer decision interfaces in the product UI.'
  }
];
