<script lang="ts">
	import { projects } from '$lib/data/projects';
	import type { Project, ProjectLink } from '$lib/types';
	import Section from '$lib/components/ui/Section.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	function formatCategory(category: Project['category']) {
		return category.replace('-', ' ').toUpperCase();
	}

	function getCaseStudyHref(project: Project) {
		const preferredTypes: ProjectLink['type'][] = ['case-study', 'demo', 'live', 'github'];
		const link = project.links?.find((item) => preferredTypes.includes(item.type));
		return link?.url ?? '#contact';
	}

	function getProjectHeadline(project: Project) {
		if (project.context) {
			return project.context.split('·')[0]?.trim() ?? project.title;
		}
		return project.title;
	}
</script>

<Section
	id="projects"
	title="SELECTED WORK"
	subtitle="Projects across healthcare and music campaigns where I built core frontend experiences and high-impact user journeys."
>
	<div class="projects__grid" data-reveal-stagger>
		{#each projects as project (project.id)}
			{@const visibleTech = project.techStack.slice(0, 3)}
			{@const hiddenTechCount = Math.max(project.techStack.length - 3, 0)}
			{@const ctaHref = getCaseStudyHref(project)}
			<Card as="article" class="projects__card reveal-item">
				<div class="projects__surface">
					<header class="projects__top">
						<div class="projects__identity">
							{#if project.image}
								<img class="projects__logo" src={project.image} alt={`Logo ${project.title}`} loading="lazy" />
							{/if}
							<div class="projects__meta">
								<p class="projects__company">{project.title}</p>
								<p class="projects__category">{formatCategory(project.category)}</p>
							</div>
						</div>
					</header>

					<div class="projects__main">
						<h3 class="projects__title">{getProjectHeadline(project)}</h3>
						<p class="projects__impact">{project.impactLine ?? project.impact?.[0] ?? project.shortDescription}</p>
					</div>

					<div class="projects__secondary">
						{#if project.role}
							<p class="projects__role">{project.role}</p>
						{/if}
						<p class="projects__description">{project.shortDescription}</p>
					</div>

					<footer class="projects__footer">
						<div class="projects__tech">
							{#each visibleTech as tech}
								<span class="projects__techTag">{tech}</span>
							{/each}
							{#if hiddenTechCount > 0}
								<span class="projects__techMore">+{hiddenTechCount}</span>
							{/if}
						</div>
						<a class="projects__cta" href={ctaHref}>View case study <span aria-hidden="true">→</span></a>
					</footer>
				</div>
			</Card>
		{/each}
	</div>
</Section>

<style>
	.projects__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 26.25rem), 1fr));
		gap: 1.5rem;
	}

	:global(.projects__card) {
		position: relative;
		overflow: hidden;
		border-radius: 1rem;
		padding: 0;
		background: #161616;
		border: 1px solid rgba(255, 255, 255, 0.05);
		box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);
		transition: none;
	}

	:global(.projects__card)::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 12% 0%, rgba(249, 115, 22, 0.09), transparent 45%),
			linear-gradient(160deg, rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0));
		pointer-events: none;
	}

	.projects__surface {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		padding: 1.9rem;
		height: 100%;
	}

	.projects__top {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: var(--space-4);
	}

	.projects__identity {
		display: flex;
		align-items: flex-start;
		gap: var(--space-4);
		min-width: 0;
	}

	.projects__logo {
		flex-shrink: 0;
		width: clamp(6.1rem, 10vw, 8.4rem);
		height: auto;
		object-fit: contain;
		transition: none;
	}

	.projects__meta {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
		min-width: 0;
	}

	.projects__company {
		margin: 0;
		font-size: 0.93rem;
		font-weight: 600;
		color: var(--color-text);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.projects__category {
		margin: 0;
		font-size: var(--text-xs);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-text-subtle);
	}

	.projects__badge {
		font-size: 0.68rem;
		font-weight: 500;
		padding: 0.2rem 0.55rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 160, 80, 0.35);
		background: rgba(255, 160, 80, 0.12);
		color: #ffb36b;
		box-shadow: 0 0 18px rgba(255, 160, 80, 0.18);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		flex-shrink: 0;
	}

	.projects__main {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.projects__title {
		margin: 0;
		font-size: 1.34rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 1.2;
		color: var(--color-text);
		max-inline-size: 30ch;
	}

	.projects__impact {
		margin: 0;
		font-size: 0.92rem;
		line-height: 1.55;
		color: rgba(255, 255, 255, 0.88);
		max-inline-size: 55ch;
		display: -webkit-box;
		line-clamp: 2;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.projects__secondary {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding-top: var(--space-1);
	}

	.projects__role {
		margin: 0;
		font-size: 0.82rem;
		letter-spacing: 0.03em;
		color: rgba(255, 255, 255, 0.65);
	}

	.projects__description {
		margin: 0;
		font-size: 0.85rem;
		line-height: 1.58;
		color: rgba(255, 255, 255, 0.73);
		max-inline-size: 55ch;
		display: -webkit-box;
		line-clamp: 3;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.projects__footer {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		margin-top: auto;
		padding-top: var(--space-5);
		border-top: 1px solid rgba(255, 255, 255, 0.07);
	}

	.projects__tech {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
	}

	.projects__techTag {
		font-size: 0.68rem;
		font-family: var(--font-mono);
		letter-spacing: 0.01em;
		padding: 0.22rem 0.52rem;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		color: rgba(255, 255, 255, 0.6);
		transition:
			color var(--duration-fast) var(--ease-out),
			border-color var(--duration-fast) var(--ease-out),
			background-color var(--duration-fast) var(--ease-out);
	}

	.projects__techMore {
		font-size: 0.7rem;
		padding: 0.2rem 0.5rem;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.025);
		border: 1px solid rgba(255, 255, 255, 0.08);
		color: rgba(255, 255, 255, 0.52);
	}

	.projects__cta {
		font-size: 0.86rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.86);
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		width: fit-content;
		transition: none;
	}

	@media (max-width: 560px) {
		.projects__surface {
			padding: 1.45rem;
		}
		.projects__title {
			font-size: 1.2rem;
		}
		.projects__top {
			align-items: flex-start;
		}
	}
</style>
