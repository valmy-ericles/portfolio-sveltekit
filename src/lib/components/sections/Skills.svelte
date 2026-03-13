<script lang="ts">
	import { skills, skillTooltips } from '$lib/data/skills';
	import Section from '$lib/components/ui/Section.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	const skillColors: Record<string, string> = {
		React: '#61dafb',
		'Next.js': '#a1a1aa',
		TypeScript: '#3178c6',
		JavaScript: '#f7df1e',
		HTML: '#e34f26',
		CSS: '#1572b6',
		Tailwind: '#38bdf8',
		Svelte: '#ff3e00',
		Storybook: '#ff4785',
		'Design Tokens': '#22d3ee',
		'Component Libraries': '#c084fc',
		'Radix UI': '#f43f5e',
		'Shadcn/UI': '#94a3b8',
		'Accessibility (ARIA, WCAG)': '#2dd4bf',
		Redux: '#764abc',
		Zustand: '#f59e0b',
		'TanStack Query': '#ff4154',
		GraphQL: '#e10098',
		'REST APIs': '#60a5fa',
		Jest: '#c21325',
		'React Testing Library': '#ef4444',
		Cypress: '#14b8a6',
		Playwright: '#45ba4b',
		'Node.js': '#5fa04e',
		Express: '#9ca3af',
		NestJS: '#e0234e',
		Python: '#3776ab',
		FastAPI: '#009688',
		Docker: '#2496ed',
		'CI/CD': '#f97316',
		AWS: '#ff9900',
		Vercel: '#e5e7eb',
		Cloudflare: '#f38020'
	};
</script>

<Section
	id="skills"
	title="SKILLS"
	subtitle="Technologies and tools I use to build scalable, production-grade applications."
>
	<div class="skills__grid" data-reveal-stagger>
		{#each skills as category (category.id)}
			<Card as="article" class="skills__card reveal-item">
				<h3 class="skills__categoryTitle">{category.category}</h3>
				<div class="skills__divider" aria-hidden="true"></div>
				<ul class="skills__list">
					{#each category.items as item}
						{@const tooltip = skillTooltips[item.name]}
						<li>
							<span
								class="skill-pill skills__pill"
								style={`--skill-accent: ${skillColors[item.name] ?? 'var(--color-accent)'}`}
								title={tooltip ?? undefined}
								role={tooltip ? 'button' : undefined}
								tabindex={tooltip ? 0 : undefined}
							>
								{item.name}
								{#if tooltip}
									<span class="skills__tooltip" aria-hidden="true">{tooltip}</span>
								{/if}
							</span>
						</li>
					{/each}
				</ul>
			</Card>
		{/each}
	</div>
</Section>

<style>
	.skills__grid {
		display: grid;
		gap: var(--space-6);
		align-items: stretch;
	}
	@media (min-width: 640px) {
		.skills__grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (min-width: 1024px) {
		.skills__grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	/* Card surface: subtle depth, soft border */
	.skills__card {
		display: flex;
		flex-direction: column;
		gap: 0;
		padding: 1.5rem 1.75rem;
		background: var(--color-bg-elevated);
		border: 1px solid rgba(255, 255, 255, 0.06);
		transition: all 0.25s ease;
	}
	.skills__card:hover {
		transform: translateY(-4px);
		border-color: rgba(255, 255, 255, 0.12);
		box-shadow:
			0 0 0 1px rgba(255, 255, 255, 0.08),
			0 12px 40px rgba(0, 0, 0, 0.4);
	}

	/* Category header: stronger hierarchy */
	.skills__categoryTitle {
		margin: 0;
		font-size: 1.0625rem;
		font-weight: 600;
		letter-spacing: 0.01em;
		color: var(--color-text);
		padding-bottom: 0.75rem;
	}
	.skills__categoryTitle::before {
		content: '';
		display: inline-block;
		width: 3px;
		height: 0.85em;
		margin-right: 0.5rem;
		vertical-align: -0.12em;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 2px;
	}
	:global([data-theme='light']) .skills__categoryTitle::before {
		background: rgba(0, 0, 0, 0.15);
	}

	/* Elegant gradient divider */
	.skills__divider {
		height: 1px;
		margin-bottom: 1rem;
		background: linear-gradient(
			to right,
			transparent,
			rgba(255, 255, 255, 0.12),
			transparent
		);
	}

	.skills__list {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.skills__list li {
		margin: 0;
	}

	/* Pills: subtle surface, soft border */
	.skills__pill {
		position: relative;
		display: inline-block;
		font-size: var(--text-sm);
		font-family: var(--font-mono);
		padding: 6px 10px;
		border-radius: 8px;
		background: color-mix(in oklab, var(--skill-accent) 16%, transparent);
		color: color-mix(in oklab, var(--skill-accent) 62%, var(--color-text));
		border: 1px solid color-mix(in oklab, var(--skill-accent) 34%, transparent);
		cursor: default;
		transition: all 0.18s ease;
	}
	.skills__pill:hover {
		transform: scale(1.05);
		background: color-mix(in oklab, var(--skill-accent) 24%, transparent);
		border-color: color-mix(in oklab, var(--skill-accent) 48%, transparent);
		color: color-mix(in oklab, var(--skill-accent) 30%, var(--color-text));
	}
	.skills__pill:focus-visible {
		outline: none;
		border-color: color-mix(in oklab, var(--skill-accent) 70%, transparent);
		box-shadow: 0 0 0 2px color-mix(in oklab, var(--skill-accent) 24%, transparent);
	}

	/* Light theme overrides */
	:global([data-theme='light']) .skills__card {
		border-color: rgba(0, 0, 0, 0.06);
	}
	:global([data-theme='light']) .skills__card:hover {
		border-color: rgba(0, 0, 0, 0.1);
		box-shadow:
			0 0 0 1px rgba(0, 0, 0, 0.06),
			0 12px 40px rgba(0, 0, 0, 0.08);
	}
	:global([data-theme='light']) .skills__divider {
		background: linear-gradient(
			to right,
			transparent,
			rgba(0, 0, 0, 0.08),
			transparent
		);
	}
	:global([data-theme='light']) .skills__pill {
		background: color-mix(in oklab, var(--skill-accent) 10%, white);
		border-color: color-mix(in oklab, var(--skill-accent) 24%, rgba(0, 0, 0, 0.12));
		color: color-mix(in oklab, var(--skill-accent) 58%, #0f172a);
	}
	:global([data-theme='light']) .skills__pill:hover {
		background: color-mix(in oklab, var(--skill-accent) 14%, white);
		border-color: color-mix(in oklab, var(--skill-accent) 36%, rgba(0, 0, 0, 0.12));
		color: color-mix(in oklab, var(--skill-accent) 66%, #0f172a);
	}

	.skills__tooltip {
		position: absolute;
		left: 50%;
		bottom: calc(100% + var(--space-2));
		transform: translateX(-50%) translateY(2px);
		width: max-content;
		max-width: 220px;
		padding: 0.4rem 0.6rem;
		font-size: var(--text-xs);
		font-family: var(--font-sans);
		font-weight: 400;
		line-height: var(--leading-normal);
		color: var(--color-text);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 0.4rem;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
		opacity: 0;
		visibility: hidden;
		transition:
			opacity var(--duration-fast) var(--ease-out),
			visibility var(--duration-fast) var(--ease-out),
			transform var(--duration-fast) var(--ease-out);
		pointer-events: none;
		z-index: 10;
	}
	.skills__pill:hover .skills__tooltip,
	.skills__pill:focus-visible .skills__tooltip {
		opacity: 1;
		visibility: visible;
		transform: translateX(-50%) translateY(0);
	}
</style>
