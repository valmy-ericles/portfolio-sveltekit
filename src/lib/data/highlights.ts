import type { CareerHighlight } from '$lib/types';

export const careerHighlights: CareerHighlight[] = [
  {
    id: 'architecture',
    eyebrow: 'Ownership',
    title: 'Scalable frontend architecture',
    description:
      'Feature-based structures, clear boundaries, and patterns that keep large codebases shippable. I own decisions that affect long-term maintainability and team velocity.'
  },
  {
    id: 'design-systems',
    eyebrow: 'Systems',
    title: 'Design systems & UI libraries',
    description:
      'Reusable component libraries, tokens, and documentation that speed up delivery across squads. I align product and engineering on shared patterns and quality bars.'
  },
  {
    id: 'performance-a11y',
    eyebrow: 'Quality',
    title: 'Performance & accessibility',
    description:
      'Core Web Vitals, WCAG 2.1, and practical techniques to keep interfaces fast and inclusive. I ship with performance budgets and a11y as non-negotiables.'
  }
];
