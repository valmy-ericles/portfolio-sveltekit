<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import reactLogo from '$lib/assets/tech/react.svg';
	import nextjsLogo from '$lib/assets/tech/nextjs.svg';
	import nodeLogo from '$lib/assets/tech/node.svg';
	import nestjsLogo from '$lib/assets/tech/nestjs.svg';
	import tanstackLogo from '$lib/assets/tech/tanstack.svg';
	import typescriptLogo from '$lib/assets/tech/ts-logo-128.png';

	type StackSize = 'sm' | 'md' | 'lg' | 'xl';
	type StackTier = 'core' | 'support';

	interface StackItem {
		id: string;
		name: string;
		logo?: string;
		monogram?: string;
		tag: string;
		size: StackSize;
		description: string;
		hint?: string;
		tier: StackTier;
	}

	interface StackGroup {
		id: string;
		title: string;
		subtitle: string;
		items: StackItem[];
	}

	const stackGroups: StackGroup[] = [
		{
			id: 'frontend-architecture',
			title: 'Frontend Architecture',
			subtitle: 'Composable UI systems, design-system thinking, and performance-aware delivery.',
			items: [
				{
					id: 'react',
					name: 'React',
					logo: reactLogo,
					tag: 'Component architecture',
					size: 'xl',
					description: 'Composable UI systems for complex product surfaces.',
					hint: 'Patterns for scale: feature boundaries, shared primitives, and predictable rendering.',
					tier: 'core'
				},
				{
					id: 'typescript',
					name: 'TypeScript',
					logo: typescriptLogo,
					tag: 'Domain modeling',
					size: 'xl',
					description: 'Safer refactors and clear contracts in production codebases.',
					hint: 'Typed APIs, strictness where it matters, and guardrails for team-scale work.',
					tier: 'core'
				},
				{
					id: 'nextjs',
					name: 'Next.js',
					logo: nextjsLogo,
					tag: 'SSR/SSG delivery',
					size: 'xl',
					description: 'Fast pages with pragmatic routing and rendering strategies.',
					hint: 'SEO + performance trade-offs, caching, and production-grade deployments.',
					tier: 'core'
				}
			]
		},
		{
			id: 'state-data-layer',
			title: 'State & Data Layer',
			subtitle: 'Server-state, caching, and resilient async flows that hold up at scale.',
			items: [
				{
					id: 'tanstack-query',
					name: 'TanStack Query',
					logo: tanstackLogo,
					tag: 'Server state',
					size: 'lg',
					description: 'Caching and async flows for resilient data-heavy UIs.',
					hint: 'Loading/error states, invalidation strategies, and UX that stays responsive.',
					tier: 'support'
				}
			]
		},
		{
			id: 'backend',
			title: 'Backend & APIs',
			subtitle: 'Services, integration layers, and reliable contracts powering product features.',
			items: [
				{
					id: 'node',
					name: 'Node.js',
					logo: nodeLogo,
					tag: 'Services & integrations',
					size: 'lg',
					description: 'Backend services, workflows, and integrations for product delivery.',
					hint: 'Auth, queues, external APIs, and operational concerns in production.',
					tier: 'support'
				},
				{
					id: 'nestjs',
					name: 'NestJS',
					logo: nestjsLogo,
					tag: 'Modular architecture',
					size: 'lg',
					description: 'Maintainable backends with clear boundaries and testable modules.',
					hint: 'Validation, auth/roles, service layering, and predictable error handling.',
					tier: 'support'
				}
			]
		},
	];

</script>

<Section
	id="tech-stack"
	title="TECH STACK"
	subtitle="Stack I use to architect, ship, and scale production web products."
>
	<div class="tech-stack" data-reveal-stagger>
		{#each stackGroups as group (group.id)}
			<section class="tech-stack__group reveal-item" aria-labelledby={`stack-group-${group.id}`}>
				<header class="tech-stack__groupHeader">
					<h3 class="tech-stack__groupTitle" id={`stack-group-${group.id}`}>{group.title}</h3>
					<p class="tech-stack__groupSubtitle">{group.subtitle}</p>
				</header>
				<div class={`tech-stack__grid tech-stack__grid--${group.id}`}>
					{#each group.items as item (item.id)}
						<article
							class={`tech-stack__card tech-stack__card--${item.size} tech-stack__card--${item.tier}`}
							aria-label={item.name}
						>
							<div class="tech-stack__logoWrap" aria-hidden="true">
								{#if item.logo}
									<img src={item.logo} alt={item.name} class="tech-stack__logo" loading="lazy" />
								{:else}
									<span class="tech-stack__monogram">{item.monogram ?? item.name.slice(0, 2).toUpperCase()}</span>
								{/if}
							</div>
							<div class="tech-stack__meta">
								<div class="tech-stack__titleRow">
									<p class="tech-stack__name">{item.name}</p>
								</div>
								<p class="tech-stack__tag">{item.tag}</p>
								<p class="tech-stack__description">{item.description}</p>
								{#if item.hint}
									<p class="tech-stack__hint">{item.hint}</p>
								{/if}
							</div>
						</article>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</Section>

<style>
	.tech-stack {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.tech-stack__group {
		display: flex;
		flex-direction: column;
		gap: 0.95rem;
	}

	.tech-stack__groupHeader {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.tech-stack__groupTitle {
		margin: 0;
		font-size: 0.84rem;
		font-weight: 650;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: rgba(248, 250, 252, 0.9);
	}

	.tech-stack__groupSubtitle {
		margin: 0;
		font-size: 0.86rem;
		line-height: 1.45;
		color: rgba(148, 163, 184, 0.85);
	}

	.tech-stack__grid {
		display: grid;
		gap: 1.15rem;
		grid-template-columns: repeat(12, minmax(0, 1fr));
	}

	.tech-stack__card {
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		gap: 1.1rem;
		padding: 1.2rem 1.35rem;
		border-radius: 1.05rem;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background:
			radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.06), transparent 55%),
			linear-gradient(160deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.012)),
			#121317;
		transition:
			transform 240ms cubic-bezier(0.22, 1, 0.36, 1),
			box-shadow 240ms cubic-bezier(0.22, 1, 0.36, 1),
			border-color 240ms cubic-bezier(0.22, 1, 0.36, 1),
			background-color 240ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.tech-stack__card--core {
		border-color: rgba(56, 189, 248, 0.22);
		background:
			radial-gradient(circle at 20% 0%, rgba(56, 189, 248, 0.18), transparent 55%),
			linear-gradient(160deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.012)),
			#121317;
	}

	.tech-stack__card::after {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at top right, rgba(56, 189, 248, 0.16), transparent 55%);
		opacity: 0;
		transition: opacity 240ms cubic-bezier(0.22, 1, 0.36, 1);
		pointer-events: none;
	}

	.tech-stack__card:hover {
		transform: translateY(-3px);
		border-color: rgba(56, 189, 248, 0.35);
		box-shadow: 0 18px 32px rgba(0, 0, 0, 0.34);
	}

	.tech-stack__card:hover::after {
		opacity: 1;
	}

	.tech-stack__logoWrap {
		width: 4.15rem;
		height: 4.15rem;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.35rem;
		border-radius: 0.95rem;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.tech-stack__logo {
		width: 100%;
		height: 100%;
		object-fit: contain;
		transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.tech-stack__monogram {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		font-family: var(--font-mono);
		font-size: 0.95rem;
		letter-spacing: 0.12em;
		color: rgba(226, 232, 240, 0.92);
		text-transform: uppercase;
	}

	.tech-stack__card:hover .tech-stack__logo {
		transform: scale(1.04);
	}

	.tech-stack__meta {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		min-width: 0;
		position: relative;
		z-index: 1;
	}

	.tech-stack__titleRow {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		flex-wrap: wrap;
	}

	.tech-stack__name {
		margin: 0;
		font-size: 1.05rem;
		font-weight: 650;
		color: rgba(248, 250, 252, 0.96);
	}

	.tech-stack__tag {
		margin: 0;
		font-size: 0.78rem;
		font-family: var(--font-mono);
		color: rgba(148, 163, 184, 0.9);
	}

	.tech-stack__description {
		margin: 0.25rem 0 0;
		font-size: 0.86rem;
		line-height: 1.4;
		color: rgba(203, 213, 225, 0.9);
		display: -webkit-box;
		line-clamp: 1;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.tech-stack__hint {
		margin: 0.35rem 0 0;
		font-size: 0.82rem;
		line-height: 1.45;
		color: rgba(148, 163, 184, 0.9);
		opacity: 0;
		transform: translateY(4px);
		max-height: 0;
		overflow: hidden;
		transition:
			opacity 220ms cubic-bezier(0.22, 1, 0.36, 1),
			transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
			max-height 220ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	@media (hover: hover) {
		.tech-stack__card:hover .tech-stack__hint {
			opacity: 1;
			transform: translateY(0);
			max-height: 3.2em;
		}
	}

	.tech-stack__grid--frontend-architecture .tech-stack__card,
	.tech-stack__grid--state-data-layer .tech-stack__card,
	.tech-stack__grid--backend .tech-stack__card {
		grid-column: span 6;
	}

	.tech-stack__card--lg {
		grid-column: span 6;
	}

	.tech-stack__card--xl {
		grid-column: span 8;
	}

	.tech-stack__card--sm {
		grid-column: span 3;
	}

	@media (max-width: 1024px) {
		.tech-stack__grid {
			grid-template-columns: repeat(6, minmax(0, 1fr));
		}
		.tech-stack__grid--frontend-architecture .tech-stack__card,
		.tech-stack__grid--state-data-layer .tech-stack__card,
		.tech-stack__grid--backend .tech-stack__card {
			grid-column: span 6;
		}
		.tech-stack__card--lg,
		.tech-stack__card--xl {
			grid-column: span 6;
		}
		.tech-stack__card--sm {
			grid-column: span 3;
		}
	}

	@media (max-width: 680px) {
		.tech-stack {
			gap: 1.5rem;
		}
		.tech-stack__grid {
			grid-template-columns: minmax(0, 1fr);
		}
		.tech-stack__card,
		.tech-stack__card--sm,
		.tech-stack__card--lg,
		.tech-stack__card--xl,
		.tech-stack__grid--frontend-architecture .tech-stack__card,
		.tech-stack__grid--state-data-layer .tech-stack__card,
		.tech-stack__grid--backend .tech-stack__card {
			grid-column: span 1;
		}
	}

</style>
