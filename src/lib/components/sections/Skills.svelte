<script lang="ts">
	import { skills, skillTooltips } from '$lib/data/skills';
	import Section from '$lib/components/ui/Section.svelte';
	import Card from '$lib/components/ui/Card.svelte';
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
		background: rgba(255, 255, 255, 0.04);
		color: var(--color-text-muted);
		border: 1px solid rgba(255, 255, 255, 0.08);
		cursor: default;
		transition: all 0.18s ease;
	}
	.skills__pill:hover {
		transform: scale(1.05);
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.12);
		color: var(--color-text);
	}
	.skills__pill:focus-visible {
		outline: none;
		border-color: var(--color-accent);
		box-shadow: 0 0 0 2px var(--color-accent-muted);
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
		background: rgba(0, 0, 0, 0.04);
		border-color: rgba(0, 0, 0, 0.08);
	}
	:global([data-theme='light']) .skills__pill:hover {
		background: rgba(0, 0, 0, 0.06);
		border-color: rgba(0, 0, 0, 0.12);
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
