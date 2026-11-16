<script lang="ts">
	import { projects } from '$lib/data/projects';
	import type { Project } from '$lib/types';
	import Section from '$lib/components/ui/Section.svelte';
	import ProjectPreview from '$lib/components/sections/ProjectPreview.svelte';

	const priorityIds = ['bric-health', 'consigaz', 'sarfaty-authorization-platform', 'tenda-design-system', 'gustavo-lima', '24kgoldn', 'filtr-game'];
	const priorityProjects = priorityIds.map((id) => projects.find((project) => project.id === id)).filter((project): project is Project => Boolean(project));
	const otherProjects = projects.filter((project) => !priorityIds.includes(project.id) && project.id !== 'multi-agent-healthcare-platform');

	function category(project: Project) {
		if (project.id === 'tenda-design-system') return 'Design System';
		if (project.id === 'bric-health') return 'B2B2C';
		return project.category === 'ai' ? 'AI Engineering' : project.context?.split('·')[1]?.trim() ?? project.category;
	}

	const featuredCopy: Record<string, { description: string; tech: string[]; badge?: string }> = {
		'bric-health': {
			description: 'Healthcare platform focused on pediatric care and clinic workflows.',
			tech: ['React', 'Ruby on Rails']
		},
		consigaz: {
			description: 'Refactored the Client Area, fixed backend integrations, shipped new features, and improved performance.',
			tech: ['React', 'TypeScript', 'Corporate UX']
		},
		'24kgoldn': {
			description: 'I developed a promotional artist website to showcase releases and drive streaming.',
			tech: ['React', 'Landing Page UX', 'Music Promotion']
		},
		'filtr-game': {
			description: 'I developed a gamified music campaign with missions, rewards, and playlists.',
			tech: ['React', 'Gamification', 'Responsive UI']
		},
		'gustavo-lima': {
			description: 'I created a promotional campaign site with fan participation and playlist sharing.',
			tech: ['Event UX', 'Responsive UI', 'Social Sharing']
		},
		'sarfaty-authorization-platform': {
			description: 'Internal-use authorization system for financial services and operations.',
			tech: ['Node.js', 'NestJS', 'Angular']
		},
		'tenda-design-system': {
			description: 'Reusable React component library built around a scalable design system.',
			tech: ['React', 'TypeScript', 'Storybook']
		}
	};

	function link(project: Project) {
		return project.links?.find((item) => ['case-study', 'demo', 'live', 'github', 'article'].includes(item.type));
	}

	function linkLabel(project: Project) {
		if (project.id === 'sarfaty-authorization-platform') return 'Visit company website';
		return 'View project';
	}

</script>

<Section id="projects">
	<header class="projects__header">
		<div>
			<h2>Featured Projects</h2>
			<p class="projects__subtitle">A selection of intelligent systems, software platforms, and digital products I've helped build.</p>
		</div>
	</header>

	<div class="projects__grid">
		{#each priorityProjects as project (project.id)}
			{@const projectLink = link(project)}
			{@const copy = featuredCopy[project.id]}
			<article class="project-card">
				<ProjectPreview {project} />
				<div class="project-card__body">
					<h3>{project.title}</h3>
					{#if copy.badge}<span class="project-card__badge">{copy.badge}</span>{/if}
					<p class="project-card__description">{copy.description}</p>
					<div class="project-card__footer">
						<p class="project-card__tech">{copy.tech.join(' · ')}</p>
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
	.projects__header h2 { margin: 0; color: var(--color-text); font-size: clamp(2.3rem, 4vw, 3.4rem); line-height: 1.05; letter-spacing: -0.065em; }
	.projects__subtitle { max-width: 52rem; margin: 0.55rem 0 0; color: #506783; font-size: 1rem; line-height: 1.5; }
	.project-card a:hover, .project-row a:hover { color: var(--color-link-hover); }
	.projects__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
	.project-card { display: grid; grid-template-columns: minmax(0, 40%) minmax(0, 60%); min-width: 0; overflow: hidden; gap: 1.5rem; padding: 1.25rem; border: 1px solid #e5e7eb; border-radius: 12px; background: #fff; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.025); transition: border-color 180ms ease, box-shadow 180ms ease; }
	.project-card:hover { border-color: #cbd5e1; box-shadow: 0 5px 14px rgba(15, 23, 42, 0.05); }
	.project-card__body { display: flex; min-width: 0; flex-direction: column; justify-content: center; padding: 0.1rem 0.1rem 0.1rem 0; }
	.project-card h3 { margin: 0 0 0.65rem; color: var(--color-text); font-size: clamp(1.25rem, 1.8vw, 1.45rem); font-weight: 700; line-height: 1.12; letter-spacing: -0.045em; }
	.project-card__badge { align-self: flex-start; margin: -0.1rem 0 0.65rem; padding: 0.16rem 0.42rem; border: 1px solid #cfe7dc; border-radius: 4px; background: #f4fbf7; color: #4f806c; font-size: 0.64rem; font-weight: 600; letter-spacing: 0.01em; line-height: 1.2; }
	.project-card__description { max-width: 32ch; margin: 0; color: #475569; font-size: 0.94rem; line-height: 1.5; }
	.project-card__footer { display: flex; flex-direction: column; align-items: flex-start; gap: 0.85rem; padding-top: 1rem; }
	.project-card__tech { margin: 0; color: #64748b; font-size: 0.8rem; line-height: 1.45; }
	.project-card a, .project-row a { color: var(--color-link); font-size: 0.95rem; font-weight: 600; }
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
		.project-card { grid-template-columns: 1fr; gap: 0.85rem; padding: 1rem; }
		.project-card__body { padding: 0.35rem 0.15rem 0.15rem; }
		.project-row { grid-template-columns: 1fr auto; gap: 0.45rem 1rem; padding-inline: 0; }
		.project-row p:not(.project-card__category) { grid-column: 1 / -1; grid-row: 2; }
	}
</style>
