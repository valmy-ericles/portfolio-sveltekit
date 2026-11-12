<script lang="ts">
	import { profile } from '$lib/data/profile';
	import Section from '$lib/components/ui/Section.svelte';
</script>

<Section id="contact" title="Let's Build Something Meaningful." subtitle="Interested in collaborating on AI systems, software platforms, or engineering opportunities? Let's connect.">
	<div class="contact__layout">
		<p class="contact__lead">I enjoy working with thoughtful teams on products where strong engineering can make a meaningful difference.</p>
		<div class="contact__actions">
			<div class="contact__links" aria-label="Contact links">
				<a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
				<a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
			</div>
		</div>
	</div>
</Section>

<style>
	.contact__layout { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr); gap: 2rem; align-items: end; padding: clamp(1.5rem, 5vw, 4rem); border: 1px solid var(--color-border); border-radius: 10px; background: var(--color-surface); }
	.contact__lead { max-width: 32rem; margin: 0; color: var(--color-text-muted); font-size: var(--text-xl); line-height: 1.55; }
	.contact__actions { display: flex; flex-direction: column; align-items: flex-start; gap: 1.5rem; }
	.contact__links { display: flex; flex-wrap: wrap; gap: 1.25rem; }
	.contact__links a { color: var(--color-text-muted); font-size: var(--text-sm); }
	.contact__links a:hover { color: var(--color-accent); }
	@media (max-width: 700px) { .contact__layout { grid-template-columns: 1fr; } }
</style>
