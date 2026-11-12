<script lang="ts">
	import { projects } from '$lib/data/projects';
	import type { Project } from '$lib/types';
	import Section from '$lib/components/ui/Section.svelte';
	import ProjectPreview from '$lib/components/sections/ProjectPreview.svelte';

	const priorityIds = ['ai-travel-planner', 'tenda-design-system', 'bric-health', 'sarfaty-authorization-platform'];
	const priorityProjects = priorityIds.map((id) => projects.find((project) => project.id === id)).filter((project): project is Project => Boolean(project));
	const otherProjects = projects.filter((project) => !priorityIds.includes(project.id) && project.id !== 'multi-agent-healthcare-platform');

	function category(project: Project) {
		if (project.id === 'tenda-design-system') return 'Design System';
		if (project.id === 'bric-health') return 'B2B2C';
		return project.category === 'ai' ? 'AI Engineering' : project.context?.split('·')[1]?.trim() ?? project.category;
	}

	function link(project: Project) {
		return project.links?.find((item) => ['case-study', 'demo', 'live', 'github', 'article'].includes(item.type));
	}

	function linkLabel(project: Project) {
		return link(project)?.type === 'article' ? 'Read press coverage' : 'View project';
	}
</script>

<Section id="projects">
	<header class="projects__header">
		<div>
			<p class="projects__eyebrow">Selected Work</p>
			<h2>Featured Projects</h2>
			<p class="projects__subtitle">A selection of intelligent systems, software platforms, and digital products I've helped build.</p>
		</div>
		<a class="projects__all-link" href="#projects-more">View all projects <span aria-hidden="true">→</span></a>
	</header>

	<div class="projects__grid">
		{#each priorityProjects as project (project.id)}
			{@const projectLink = link(project)}
			<article class="project-card">
				<ProjectPreview {project} />
				<div class="project-card__body">
					<p class="project-card__category">{category(project)}</p>
					<h3>{project.title}</h3>
					<p class="project-card__description">{project.shortDescription}</p>
					<div class="project-card__footer">
						<div class="project-card__tech">{#each project.techStack as tech}<span>{tech}</span>{/each}</div>
						{#if projectLink}<a href={projectLink.url} target="_blank" rel="noopener noreferrer">{linkLabel(project)} <span aria-hidden="true">↗</span></a>{/if}
					</div>
				</div>
			</article>
		{/each}
	</div>

	{#if otherProjects.length}
		<div id="projects-more" class="projects__more">
			<h3>More Work</h3>
			<div class="projects__list">
				{#each otherProjects as project (project.id)}
					{@const projectLink = link(project)}
					<div class="project-row">
						<div><p class="project-card__category">{category(project)}</p><h4>{project.title}</h4></div>
						<p>{project.shortDescription}{#if project.status}<span class="project-row__status"> {project.status}</span>{/if}</p>
						{#if projectLink}<a href={projectLink.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}>↗</a>{/if}
					</div>
				{/each}
			</div>
		</div>
	{/if}
</Section>

<style>
	.projects__header { display: flex; align-items: end; justify-content: space-between; gap: 1rem; margin-bottom: 2.8rem; }
	.projects__eyebrow { display: inline-block; margin: 0 0 0.9rem; padding: 0.28rem 0.75rem; border-radius: 99px; background: #e8f2ff; color: #1670ee; font-size: 0.88rem; font-weight: 650; }
	.projects__header h2 { margin: 0; color: var(--color-text); font-size: clamp(2.3rem, 4vw, 3.4rem); line-height: 1.05; letter-spacing: -0.065em; }
	.projects__subtitle { max-width: 52rem; margin: 0.55rem 0 0; color: #506783; font-size: 1rem; line-height: 1.5; }
	.projects__all-link { color: #1670ee; font-size: 0.95rem; font-weight: 600; white-space: nowrap; }
	.projects__all-link:hover, .project-card a:hover, .project-row a:hover { color: #1d4ed8; }
	.projects__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
	.project-card { display: grid; grid-template-columns: minmax(0, 48%) minmax(0, 52%); min-width: 0; overflow: hidden; gap: 0.9rem; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: 12px; background: #fff; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.035); transition: border-color 180ms ease, box-shadow 180ms ease; }
	.project-card:hover { border-color: #c6dcfa; box-shadow: 0 8px 20px rgba(15, 23, 42, 0.07); }
	.project-card__body { display: flex; min-width: 0; flex-direction: column; padding: 0.65rem 0.65rem 0.55rem 0.15rem; }
	.project-card__category { margin: 0 0 0.65rem; color: #1670ee; font-size: 0.72rem; font-weight: 650; letter-spacing: 0.06em; text-transform: uppercase; }
	.project-card h3 { margin: 0 0 0.65rem; color: var(--color-text); font-size: clamp(1.25rem, 1.75vw, 1.55rem); line-height: 1.08; letter-spacing: -0.045em; }
	.project-card__description { margin: 0; color: #506783; font-size: 0.88rem; line-height: 1.55; }
	.project-card__footer { display: flex; flex: 1; flex-direction: column; align-items: flex-start; justify-content: flex-end; gap: 1rem; padding-top: 1rem; }
	.project-card__tech { display: flex; flex-wrap: wrap; gap: 0.4rem; }
	.project-card__tech span { padding: 0.3rem 0.55rem; border-radius: 6px; background: #f1f6fc; color: #38516f; font-size: 0.7rem; line-height: 1; }
	.project-card a, .project-row a { color: #1670ee; font-size: 0.95rem; font-weight: 600; }
	.projects__more { margin-top: clamp(3rem, 5vw, 4.5rem); }
	.projects__more > h3 { margin: 0 0 1rem; color: var(--color-text); font-size: 1.2rem; letter-spacing: -0.03em; }
	.projects__list { border-top: 1px solid var(--color-border); }
	.project-row { display: grid; grid-template-columns: minmax(10rem, 1fr) minmax(0, 2fr) auto; gap: 1.5rem; align-items: center; padding: 1rem 0.5rem; border-bottom: 1px solid var(--color-border); transition: background-color 180ms ease; }
	.project-row:hover { background: #f8fafc; }
	.project-row h4 { margin: 0; color: var(--color-text); font-size: 1rem; letter-spacing: -0.02em; }
	.project-row .project-card__category { margin-bottom: 0.25rem; font-size: 0.65rem; }
	.project-row p:not(.project-card__category) { margin: 0; color: var(--color-text-muted); font-size: 0.82rem; line-height: 1.45; }
	.project-row__status { color: #8a5d22; }
	@media (max-width: 1050px) { .projects__grid { grid-template-columns: 1fr; } }
	@media (max-width: 640px) {
		.projects__header { align-items: flex-start; flex-direction: column; margin-bottom: 2rem; }
		.projects__all-link { align-self: flex-start; }
		.project-card { grid-template-columns: 1fr; gap: 0.35rem; }
		.project-card__body { padding: 0.75rem 0.5rem 0.55rem; }
		.project-row { grid-template-columns: 1fr auto; gap: 0.45rem 1rem; padding-inline: 0; }
		.project-row p:not(.project-card__category) { grid-column: 1 / -1; grid-row: 2; }
	}
</style>
