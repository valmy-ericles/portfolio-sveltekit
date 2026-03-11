<script lang="ts">
	import { careerHighlights } from '$lib/data/highlights';
	import Section from '$lib/components/ui/Section.svelte';
	import Card from '$lib/components/ui/Card.svelte';
</script>

<Section id="highlights" title="ENGINEERING FOCUS" subtitle="How I add value: architecture, systems, and production quality.">
	<div class="highlights__grid" data-reveal-stagger>
		{#each careerHighlights as item (item.id)}
			<Card as="article" class="highlights__card reveal-item">
				<p class="highlights__eyebrow">{item.eyebrow ?? 'Focus'}</p>
				<h3 class="highlights__title">{item.title}</h3>
				<p class="highlights__description">{item.description}</p>
			</Card>
		{/each}
	</div>
</Section>

<style>
	.highlights__grid {
		display: grid;
		gap: var(--space-6);
	}
	@media (min-width: 640px) {
		.highlights__grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	.highlights__card {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding: var(--space-6) var(--space-5);
	}
	.highlights__eyebrow {
		margin: 0;
		font-size: var(--text-xs);
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.16em;
		color: var(--color-accent);
	}
	.highlights__title {
		margin: 0;
		font-size: var(--text-lg);
		font-weight: 600;
		line-height: var(--leading-tight);
		color: var(--color-text);
	}
	.highlights__description {
		margin: 0;
		font-size: var(--text-sm);
		line-height: var(--leading-relaxed);
		color: var(--color-text-muted);
	}
</style>
