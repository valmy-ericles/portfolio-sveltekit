<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';

	const expertise = [
		{ title: 'AI Engineering', icon: '✦', description: 'Designing intelligent product capabilities that are useful, observable, and reliable in production.', items: ['LLM applications', 'AI agents', 'LangGraph', 'Multi-agent orchestration', 'RAG pipelines', 'Vector search', 'Structured outputs', 'Tool calling', 'Evaluations & observability', 'Guardrails & reliability'] },
		{ title: 'Full-Stack Engineering', icon: '↗', description: 'Building clear product experiences and dependable services across the entire application stack.', items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'Python', 'FastAPI', 'PostgreSQL', 'REST APIs', 'Frontend architecture'] },
		{ title: 'Architecture & Cloud', icon: '⌘', description: 'Shaping scalable systems with pragmatic architecture, performance, and operational discipline.', items: ['System design', 'AWS', 'Docker', 'CI/CD', 'Scalable backend services', 'Performance optimization', 'Reliability', 'Software architecture'] }
	];
</script>

<Section id="expertise" title="Expertise" subtitle="The engineering practices I use to turn complex product ideas into dependable software.">
	<div class="expertise__grid">
		{#each expertise as item}
			<article class="expertise-card">
				<div class="expertise-card__icon" aria-hidden="true">{item.icon}</div>
				<h3>{item.title}</h3>
				<p>{item.description}</p>
				<ul>{#each item.items as skill}<li>{skill}</li>{/each}</ul>
			</article>
		{/each}
	</div>
</Section>

<style>
	.expertise__grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
	.expertise-card { padding: 1.5rem; border: 1px solid var(--color-border); border-radius: 10px; background: var(--color-surface); }
	.expertise-card__icon { display: grid; place-items: center; width: 2rem; height: 2rem; margin-bottom: 1.75rem; border-radius: 7px; background: var(--color-accent-muted); color: var(--color-accent); font-size: 1.1rem; }
	.expertise-card h3 { margin-bottom: 0.65rem; font-size: 1.2rem; letter-spacing: -0.03em; }
	.expertise-card p { margin-bottom: 1.25rem; color: var(--color-text-muted); font-size: var(--text-sm); line-height: 1.6; }
	.expertise-card ul { display: flex; flex-wrap: wrap; gap: 0.4rem; margin: 0; padding: 0; list-style: none; }
	.expertise-card li { color: var(--color-text-muted); font-size: 0.8rem; }
	.expertise-card li:not(:last-child)::after { content: ' ·'; margin-left: 0.4rem; color: var(--color-text-subtle); }
	@media (max-width: 900px) { .expertise__grid { grid-template-columns: 1fr; } }
</style>
