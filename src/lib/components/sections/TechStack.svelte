<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import reactLogo from '$lib/assets/tech/react.svg';
	import nextjsLogo from '$lib/assets/tech/nextjs.svg';
	import nodeLogo from '$lib/assets/tech/node.svg';
	import nestjsLogo from '$lib/assets/tech/nestjs.svg';
	import railsLogo from '$lib/assets/tech/ruby.png';
	import storybookLogo from '$lib/assets/tech/storybook.png';
	import awsLogo from '$lib/assets/tech/aws.png';
	import herokuLogo from '$lib/assets/tech/heroku.svg';
	import dockerLogo from '$lib/assets/tech/docker.webp';
	import tanstackLogo from '$lib/assets/tech/tanstack.svg';
	import reduxLogo from '$lib/assets/tech/redux.png';
	import viteLogo from '$lib/assets/tech/vite.png';
	import typescriptLogo from '$lib/assets/tech/ts-logo-128.png';
	import vitestLogo from '$lib/assets/tech/vitest.webp';
	import jestLogo from '$lib/assets/tech/jest.png';

	type StackLevel = 'Core' | 'Daily use' | 'Supporting';
	type StackSize = 'sm' | 'md' | 'lg' | 'xl';

	interface StackItem {
		id: string;
		name: string;
		logo: string;
		level: StackLevel;
		tag: string;
		size: StackSize;
		description: string;
	}

	interface StackGroup {
		id: string;
		title: string;
		subtitle: string;
		items: StackItem[];
	}

	const stackGroups: StackGroup[] = [
		{
			id: 'core',
			title: 'Core Expertise',
			subtitle: 'Main stack used to architect and deliver production frontend.',
			items: [
				{
					id: 'react',
					name: 'React',
					logo: reactLogo,
					level: 'Core',
					tag: 'Scalable UI',
					size: 'lg',
					description:
						'Used to build scalable UI architectures and design systems across production products.'
				},
				{
					id: 'typescript',
					name: 'TypeScript',
					logo: typescriptLogo,
					level: 'Core',
					tag: 'Code quality',
					size: 'lg',
					description:
						'Core language for safe refactoring, domain modeling, and long-term maintainability.'
				},
				{
					id: 'nextjs',
					name: 'Next.js',
					logo: nextjsLogo,
					level: 'Core',
					tag: 'Production apps',
					size: 'lg',
					description:
						'Applied on production web apps with SSR/SSG strategies and scalable frontend delivery.'
				},
				{
					id: 'tanstack',
					name: 'TanStack Query',
					logo: tanstackLogo,
					level: 'Daily use',
					tag: 'Data layer',
					size: 'xl',
					description:
						'Used for async state, caching, and resilient server-state flows in complex products.'
				},
				{
					id: 'redux',
					name: 'Redux',
					logo: reduxLogo,
					level: 'Daily use',
					tag: 'State management',
					size: 'md',
					description:
						'Used for predictable global state and complex UI workflows that require clear control.'
				},
				{
					id: 'vite',
					name: 'Vite',
					logo: viteLogo,
					level: 'Daily use',
					tag: 'Build tooling',
					size: 'md',
					description:
						'Fast local feedback and modern bundling setup for frontend productivity and DX.'
				}
			]
		},
		{
			id: 'backend',
			title: 'Backend & APIs',
			subtitle: 'APIs and services that support frontend architecture and product delivery.',
			items: [
				{
					id: 'node',
					name: 'Node.js',
					logo: nodeLogo,
					level: 'Daily use',
					tag: 'APIs',
					size: 'lg',
					description:
						'Used to build backend services and integration layers connected to frontend products.'
				},
				{
					id: 'nestjs',
					name: 'NestJS',
					logo: nestjsLogo,
					level: 'Daily use',
					tag: 'Structured backend',
					size: 'md',
					description:
						'Applied in modular backend architectures, including authorization and business flows.'
				},
				{
					id: 'rails',
					name: 'Ruby on Rails',
					logo: railsLogo,
					level: 'Supporting',
					tag: 'Legacy/product support',
					size: 'lg',
					description:
						'Used in established products where feature delivery and platform continuity matter.'
				}
			]
		},
		{
			id: 'tooling',
			title: 'Tooling & Infrastructure',
			subtitle: 'Quality, deployment, and operational tooling for reliable product shipping.',
			items: [
				{
					id: 'storybook',
					name: 'Storybook',
					logo: storybookLogo,
					level: 'Daily use',
					tag: 'Design systems',
					size: 'sm',
					description:
						'Used to document components and align engineering/design through reusable UI systems.'
				},
				{
					id: 'vitest',
					name: 'Vitest',
					logo: vitestLogo,
					level: 'Daily use',
					tag: 'Testing',
					size: 'md',
					description:
						'Used for fast unit and integration tests with strong feedback loops in modern stacks.'
				},
				{
					id: 'jest',
					name: 'Jest',
					logo: jestLogo,
					level: 'Daily use',
					tag: 'Testing',
					size: 'md',
					description: 'Used for test coverage in existing codebases and stable CI pipelines.'
				},
				{
					id: 'docker',
					name: 'Docker',
					logo: dockerLogo,
					level: 'Daily use',
					tag: 'Environment parity',
					size: 'md',
					description:
						'Used to standardize local and CI environments for predictable delivery workflows.'
				},
				{
					id: 'aws',
					name: 'AWS',
					logo: awsLogo,
					level: 'Supporting',
					tag: 'Cloud infrastructure',
					size: 'md',
					description:
						'Used for production hosting, storage, and cloud services connected to web products.'
				},
				{
					id: 'heroku',
					name: 'Heroku',
					logo: herokuLogo,
					level: 'Supporting',
					tag: 'Deployment',
					size: 'md',
					description:
						'Used for straightforward deployment workflows and fast iteration on app services.'
				}
			]
		}
	];

	function levelClass(level: StackLevel) {
		if (level === 'Core') return 'tech-stack__level--core';
		if (level === 'Daily use') return 'tech-stack__level--daily';
		return 'tech-stack__level--supporting';
	}
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
						<article class={`tech-stack__card tech-stack__card--${item.size}`} aria-label={item.name}>
							<div class="tech-stack__logoWrap">
								<img src={item.logo} alt={item.name} class="tech-stack__logo" loading="lazy" />
							</div>
							<div class="tech-stack__meta">
								<div class="tech-stack__titleRow">
									<p class="tech-stack__name">{item.name}</p>
									<span class={`tech-stack__level ${levelClass(item.level)}`}>{item.level}</span>
								</div>
								<p class="tech-stack__tag">{item.tag}</p>
								<p class="tech-stack__description">{item.description}</p>
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
		gap: 0.8rem;
		grid-template-columns: repeat(12, minmax(0, 1fr));
	}

	.tech-stack__card {
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		gap: 0.9rem;
		padding: 0.9rem 1rem;
		border-radius: 0.85rem;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background:
			linear-gradient(160deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.015)),
			#121317;
		transition:
			transform 240ms cubic-bezier(0.22, 1, 0.36, 1),
			box-shadow 240ms cubic-bezier(0.22, 1, 0.36, 1),
			border-color 240ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.tech-stack__card::after {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at top right, rgba(249, 115, 22, 0.14), transparent 55%);
		opacity: 0;
		transition: opacity 240ms cubic-bezier(0.22, 1, 0.36, 1);
		pointer-events: none;
	}

	.tech-stack__card:hover {
		transform: translateY(-3px);
		border-color: rgba(249, 115, 22, 0.35);
		box-shadow: 0 14px 26px rgba(0, 0, 0, 0.32);
	}

	.tech-stack__card:hover::after {
		opacity: 1;
	}

	.tech-stack__logoWrap {
		width: 3.35rem;
		height: 3.35rem;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.25rem;
		border-radius: 0.72rem;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
	}

	.tech-stack__logo {
		width: 100%;
		height: 100%;
		object-fit: contain;
		transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
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
		font-size: 0.93rem;
		font-weight: 600;
		color: rgba(248, 250, 252, 0.96);
	}

	.tech-stack__level {
		font-size: 0.62rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		padding: 0.17rem 0.42rem;
		border-radius: 999px;
		border: 1px solid transparent;
	}

	.tech-stack__level--core {
		background: rgba(255, 160, 80, 0.13);
		border-color: rgba(255, 160, 80, 0.35);
		color: #ffbf82;
	}

	.tech-stack__level--daily {
		background: rgba(163, 230, 53, 0.11);
		border-color: rgba(163, 230, 53, 0.32);
		color: rgba(217, 249, 157, 0.95);
	}

	.tech-stack__level--supporting {
		background: rgba(148, 163, 184, 0.13);
		border-color: rgba(148, 163, 184, 0.28);
		color: rgba(226, 232, 240, 0.92);
	}

	.tech-stack__tag {
		margin: 0;
		font-size: 0.73rem;
		font-family: var(--font-mono);
		color: rgba(148, 163, 184, 0.9);
	}

	.tech-stack__description {
		margin: 0;
		font-size: 0.76rem;
		line-height: 1.45;
		color: rgba(226, 232, 240, 0.78);
		max-width: 56ch;
		display: -webkit-box;
		line-clamp: 2;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		opacity: 0;
		max-height: 0;
		transform: translateY(3px);
		transition:
			opacity 240ms cubic-bezier(0.22, 1, 0.36, 1),
			max-height 240ms cubic-bezier(0.22, 1, 0.36, 1),
			transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.tech-stack__card:hover .tech-stack__description {
		opacity: 1;
		max-height: 4rem;
		transform: translateY(0);
	}

	.tech-stack__grid--core .tech-stack__card,
	.tech-stack__grid--backend .tech-stack__card,
	.tech-stack__grid--tooling .tech-stack__card {
		grid-column: span 4;
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
		.tech-stack__grid--core .tech-stack__card,
		.tech-stack__grid--backend .tech-stack__card,
		.tech-stack__grid--tooling .tech-stack__card {
			grid-column: span 3;
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
		.tech-stack__grid--core .tech-stack__card,
		.tech-stack__grid--backend .tech-stack__card,
		.tech-stack__grid--tooling .tech-stack__card {
			grid-column: span 1;
		}
		.tech-stack__description {
			opacity: 1;
			max-height: 4rem;
			transform: translateY(0);
		}
	}
</style>
