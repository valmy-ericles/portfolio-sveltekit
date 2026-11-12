<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
</script>

<Section id="about" title="About" subtitle="A practical approach to building software that lasts.">
	<div class="about__layout">
		<p class="about__lead">I'm a software engineer with 7+ years of experience building scalable applications across healthcare, finance, e-commerce, and enterprise platforms.</p>
		<div class="about__body">
			<p>My work combines full-stack engineering, software architecture, and AI systems. I focus on building reliable, maintainable products that solve real problems — from intelligent agents and LLM-powered applications to production-ready web platforms.</p>
			<p>Based in Brazil, I work remotely with international teams and bring a production-focused mindset to every stage of delivery.</p>
		</div>
	</div>
</Section>

<style>
	.about__layout { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr); gap: clamp(2rem, 8vw, 8rem); align-items: start; }
	.about__lead { margin: 0; color: var(--color-text); font-size: clamp(1.5rem, 3vw, 2.25rem); line-height: 1.2; letter-spacing: -0.045em; }
	.about__body { color: var(--color-text-muted); font-size: var(--text-base); line-height: 1.75; }
	.about__body p:last-child { margin-bottom: 0; }
	@media (max-width: 700px) { .about__layout { grid-template-columns: 1fr; gap: 1.5rem; } }
</style>
