export interface ExperienceEntry {
	id: string;
	company: string;
	role: string;
	period: string;
	location?: string;
	highlights: string[];
}

export interface ProjectLink {
	label: string;
	url: string;
	type: 'live' | 'github' | 'demo' | 'case-study';
}

export interface Project {
	id: string;
	slug: string;
	title: string;
	shortDescription: string;
	description: string;
	techStack: string[];
	challenges: string[];
	impact: string[];
	links?: ProjectLink[];
	category: ProjectCategory;
	image?: string;
	featured?: boolean;
	/** One-line context: domain or product (e.g. "Healthcare · Patient platform") */
	context?: string;
	/** My role (e.g. "Lead frontend · Architecture & UI") */
	role?: string;
	/** Focus area for card (e.g. "Architecture · Design system · A11y") */
	focusArea?: string;
	/** Single impact line for card (e.g. "Faster delivery, WCAG 2.1 AA") */
	impactLine?: string;
}

export type ProjectCategory = 'frontend' | 'design-system' | 'ecommerce' | 'healthcare' | 'fintech' | 'internal' | 'ai' | 'other';

export interface SkillGroup {
	id: string;
	title: string;
	skills: string[];
}

export interface CareerHighlight {
	id: string;
	/** Eyebrow label (e.g. "Focus") */
	eyebrow?: string;
	title: string;
	description: string;
	icon?: string;
}

export interface Testimonial {
	id: string;
	quote: string;
	author: string;
	role: string;
	company?: string;
	avatar?: string;
}

export interface CaseStudy {
	id: string;
	slug: string;
	title: string;
	subtitle: string;
	summary: string;
	problem: string;
	solution: string;
	outcomes: string[];
	techStack: string[];
	projectId?: string;
}

export interface ExploringItem {
	id: string;
	title: string;
	description: string;
}

export interface ContactLink {
	label: string;
	url: string;
	icon: string;
}
