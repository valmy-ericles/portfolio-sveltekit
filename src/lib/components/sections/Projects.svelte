<script lang="ts">
	import { projects } from '$lib/data/projects';
	import Section from '$lib/components/ui/Section.svelte';
	import Card from '$lib/components/ui/Card.svelte';
</script>

<Section id="projects" title="SELECTED WORK" subtitle="Projects where I owned frontend architecture, design systems, or core product UI.">
	<div class="projects__grid" data-reveal-stagger>
		{#each projects as project (project.id)}
			<Card as="article" class="projects__card reveal-item">
				<header class="projects__header">
					{#if project.context}
						<p class="projects__context">{project.context}</p>
					{:else}
						<p class="projects__eyebrow">{project.category}</p>
					{/if}
					{#if project.featured}
						<span class="projects__badge">Featured</span>
					{/if}
				</header>
				<h3 class="projects__title">{project.title}</h3>
				{#if project.role}
					<p class="projects__role">{project.role}</p>
				{/if}
				<p class="projects__description">{project.shortDescription}</p>
				{#if project.focusArea}
					<p class="projects__focus">Focus: {project.focusArea}</p>
				{/if}
				{#if project.impactLine}
					<p class="projects__impact">{project.impactLine}</p>
				{/if}
				<div class="projects__tech">
					{#each project.techStack as tech}
						<span class="projects__techTag">{tech}</span>
					{/each}
				</div>
			</Card>
		{/each}
	</div>
</Section>

<style>
	.projects__grid {
		display: grid;
		gap: var(--space-6);
	}
	@media (min-width: 768px) {
		.projects__grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	.projects__card {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding: var(--space-6);
	}
	.projects__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3);
		margin-bottom: var(--space-1);
	}
	.projects__context,
	.projects__eyebrow {
		margin: 0;
		font-size: var(--text-xs);
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: var(--color-text-subtle);
	}
	.projects__badge {
		font-size: var(--text-xs);
		font-weight: 500;
		padding: 0.25rem 0.6rem;
		border-radius: 999px;
		border: 1px solid rgba(249, 115, 22, 0.5);
		background: var(--color-accent-muted);
		color: var(--color-accent);
		flex-shrink: 0;
	}
	.projects__title {
		margin: 0;
		font-size: var(--text-xl);
		font-weight: 600;
		letter-spacing: -0.02em;
		color: var(--color-text);
	}
	.projects__role {
		margin: 0;
		font-size: var(--text-sm);
		color: var(--color-text-muted);
	}
	.projects__description {
		margin: 0;
		font-size: var(--text-sm);
		line-height: var(--leading-relaxed);
		color: var(--color-text-muted);
	}
	.projects__focus {
		margin: 0;
		font-size: var(--text-xs);
		color: var(--color-text-subtle);
	}
	.projects__impact {
		margin: 0;
		font-size: var(--text-sm);
		font-weight: 500;
		color: var(--color-text);
	}
	.projects__tech {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin-top: var(--space-2);
		padding-top: var(--space-4);
		border-top: 1px solid var(--color-border);
	}
	.projects__techTag {
		font-size: var(--text-xs);
		font-family: var(--font-mono);
		padding: 0.25rem 0.6rem;
		border-radius: 0.5rem;
		background: var(--color-surface);
		color: var(--color-text-muted);
		border: 1px solid transparent;
		transition: border-color var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out);
	}
	.projects__card:hover .projects__techTag {
		border-color: rgba(148, 163, 184, 0.2);
		color: var(--color-text);
	}
</style>
