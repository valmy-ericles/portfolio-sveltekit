<script lang="ts">
	import { profile } from '$lib/data/profile';
	import Section from '$lib/components/ui/Section.svelte';
</script>

<Section id="contact" title="Let's Build Something Meaningful." subtitle="Interested in collaborating on AI systems, software platforms, or engineering opportunities? Let's connect.">
	<div class="contact__layout">
		<div class="contact__actions">
			<div class="contact__links" aria-label="Contact links">
				<a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
				<a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
			</div>
		</div>
	</div>
</Section>

<style>
	.contact__layout { display: flex; justify-content: flex-start; }
	.contact__actions { display: flex; flex-direction: column; align-items: flex-start; }
	.contact__links { display: flex; flex-wrap: wrap; gap: 1.25rem; }
	.contact__links a { color: var(--color-text-muted); font-size: var(--text-sm); }
	.contact__links a:hover { color: var(--color-accent); }
</style>
