export interface SkillItem {
	name: string;
	description?: string;
}

export interface SkillCategory {
	id: string;
	category: string;
	items: SkillItem[];
}

/** Optional tooltips for skill items (key = exact item name) */
export const skillTooltips: Record<string, string> = {
	React: 'UI library for building component-based interfaces',
	'Next.js': 'React framework for SSR, routing, and production apps',
	TypeScript: 'Typed superset of JavaScript for safer, scalable code',
	JavaScript: 'Core language for web and Node.js',
	HTML: 'Markup and semantics for accessible structure',
	CSS: 'Styling, layout, and responsive design',
	Tailwind: 'Utility-first CSS framework',
	Svelte: 'Compile-time framework for reactive UIs',
	Storybook: 'Component development and documentation',
	'Design Tokens': 'Design decisions as data (colors, spacing, typography)',
	'Component Libraries': 'Reusable, documented UI components',
	'Radix UI': 'Unstyled, accessible component primitives',
	'Shadcn/UI': 'Copy-paste components built on Radix',
	'Accessibility (ARIA, WCAG)': 'Inclusive UX and compliance',
	Redux: 'Predictable state container for JavaScript apps',
	Zustand: 'Minimal state management',
	'TanStack Query': 'Async state and server cache for React',
	GraphQL: 'Query language and runtime for APIs',
	'REST APIs': 'Designing and consuming RESTful services',
	Jest: 'JavaScript testing framework',
	'React Testing Library': 'Component testing with user-centric queries',
	Cypress: 'E2E testing for the web',
	Playwright: 'Cross-browser automation and E2E testing',
	'Node.js': 'JavaScript runtime for server and tooling',
	Express: 'Minimal web framework for Node.js',
	NestJS: 'Progressive Node.js framework (TypeScript)',
	Python: 'Backend and scripting',
	FastAPI: 'Modern Python web API framework',
	Docker: 'Containers for consistent environments',
	'CI/CD': 'Continuous integration and deployment',
	AWS: 'Cloud infrastructure and services',
	Vercel: 'Frontend deployment and serverless',
	Cloudflare: 'CDN, edge, and security'
};

export const skills: SkillCategory[] = [
	{
		id: 'frontend',
		category: 'Frontend',
		items: [
			{ name: 'React' },
			{ name: 'Next.js' },
			{ name: 'TypeScript' },
			{ name: 'JavaScript' },
			{ name: 'HTML' },
			{ name: 'CSS' },
			{ name: 'Tailwind' },
			{ name: 'Svelte' }
		]
	},
	{
		id: 'ui-design-systems',
		category: 'UI & Design Systems',
		items: [
			{ name: 'Storybook' },
			{ name: 'Design Tokens' },
			{ name: 'Component Libraries' },
			{ name: 'Radix UI' },
			{ name: 'Shadcn/UI' },
			{ name: 'Accessibility (ARIA, WCAG)' }
		]
	},
	{
		id: 'state-data',
		category: 'State Management & Data',
		items: [
			{ name: 'Redux' },
			{ name: 'Zustand' },
			{ name: 'TanStack Query' },
			{ name: 'GraphQL' },
			{ name: 'REST APIs' }
		]
	},
	{
		id: 'testing',
		category: 'Testing',
		items: [
			{ name: 'Jest' },
			{ name: 'React Testing Library' },
			{ name: 'Cypress' },
			{ name: 'Playwright' }
		]
	},
	{
		id: 'backend',
		category: 'Backend & APIs',
		items: [
			{ name: 'Node.js' },
			{ name: 'Express' },
			{ name: 'NestJS' },
			{ name: 'Python' },
			{ name: 'FastAPI' }
		]
	},
	{
		id: 'devops',
		category: 'DevOps & Infrastructure',
		items: [
			{ name: 'Docker' },
			{ name: 'CI/CD' },
			{ name: 'AWS' },
			{ name: 'Vercel' },
			{ name: 'Cloudflare' }
		]
	}
];
