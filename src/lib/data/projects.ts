import type { Project } from '$lib/types';

export const projects: Project[] = [
  {
    id: 'patient-platform',
    slug: 'patient-platform',
    title: 'Patient Platform',
    shortDescription: 'Patient-facing web app for appointments, results, and care journeys. I owned frontend architecture and core UI—modular structure, accessibility, and performance in a regulated environment.',
    description:
      'A patient-facing web application focused on appointments, exam results, and care journeys, with strong emphasis on accessibility and performance.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Design system', 'WCAG 2.1'],
    challenges: [
      'Designing a modular frontend architecture that could grow with new features.',
      'Keeping performance and accessibility at a high bar under complex UI requirements.'
    ],
    impact: [
      'Reduced time-to-task for key flows and shipped safely in a regulated environment.'
    ],
    category: 'healthcare',
    featured: true,
    context: 'Healthcare · Product',
    role: 'Lead frontend · Architecture & UI',
    focusArea: 'Architecture · Design system · A11y',
    impactLine: 'Faster key flows, WCAG 2.1 AA, safe rollout in production.'
  },
  {
    id: 'design-system',
    slug: 'design-system',
    title: 'Design System & Component Library',
    shortDescription: 'Cross-product design system with documented components, tokens, and patterns. I drove adoption and alignment across squads—faster UI delivery and consistent UX.',
    description:
      'A cross-product design system with documented components, tokens, and patterns used by several squads.',
    techStack: ['React', 'Storybook', 'TypeScript', 'Design tokens'],
    challenges: ['Aligning teams around shared components and patterns.'],
    impact: ['Faster UI delivery and better visual consistency.'],
    category: 'design-system',
    featured: true,
    context: 'Internal · Multi-squad',
    role: 'Ownership · Documentation · Adoption',
    focusArea: 'Design system · Component library',
    impactLine: 'Faster UI delivery, consistent patterns across products.'
  }
];
