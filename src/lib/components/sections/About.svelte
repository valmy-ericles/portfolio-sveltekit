<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	const blocks = [
		{
			title: 'Software architecture',
			body: 'Clear boundaries, feature-based structure, and patterns that keep large codebases shippable. I own decisions that affect long-term maintainability and team velocity.'
		},
		{
			title: 'Design systems & component libraries',
			body: 'Reusable components, tokens, and documentation that align product and engineering. I cut implementation time and keep quality bars consistent across squads.'
		},
		{
			title: 'Performance & accessibility',
			body: 'Core Web Vitals, WCAG 2.1, semantic HTML, and inclusive UX. I treat performance budgets and a11y as non-negotiables in production.'
		},
		{
			title: 'Product collaboration',
			body: 'I work closely with product and backend on API design, specs, and delivery. I help shape what we build and how it holds up in production—not just implement tickets.'
		}
	];
</script>

<Section id="about" title="ABOUT" subtitle="How I approach software, architecture, and product.">
	<div class="about__wrap">
		<p class="about__lead">
			I'm a Fullstack Engineer with 7+ years building scalable web applications across healthcare, finance, legal tech, e-commerce, and internal platforms. I focus on <strong>architecture</strong>, <strong>design systems</strong>, <strong>performance</strong>, and <strong>accessibility</strong>—and on shipping products that hold up in production.
		</p>
		<div class="about__blocks" data-reveal-stagger>
			{#each blocks as block, i}
				<Card as="article" class="about__block reveal-item">
					<h3 class="about__blockTitle">{block.title}</h3>
					<p class="about__blockBody">{block.body}</p>
				</Card>
			{/each}
		</div>
		<p class="about__closing">
			Based in Brazil, I build software systems with a focus on technical depth, architecture thinking, and product outcomes across different industries and product stages.
		</p>
	</div>
</Section>

<style>
	.about__wrap {
		max-width: var(--container-default);
		display: flex;
		flex-direction: column;
		gap: var(--space-10);
	}
	.about__lead {
		margin: 0;
		font-size: var(--text-xl);
		line-height: var(--leading-relaxed);
		color: var(--color-text);
		max-width: var(--container-narrow);
	}
	.about__lead strong {
		color: var(--color-accent);
		font-weight: 600;
	}
	.about__blocks {
		display: grid;
		gap: var(--space-4);
	}
	@media (min-width: 640px) {
		.about__blocks {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	.about__block {
		padding: var(--space-5) var(--space-5);
	}
	.about__blockTitle {
		margin: 0 0 var(--space-2);
		font-size: var(--text-base);
		font-weight: 600;
		color: var(--color-text);
	}
	.about__blockBody {
		margin: 0;
		font-size: var(--text-sm);
		line-height: var(--leading-relaxed);
		color: var(--color-text-muted);
	}
	.about__closing {
		margin: 0;
		font-size: var(--text-base);
		line-height: var(--leading-relaxed);
		color: var(--color-text-muted);
		max-width: var(--container-narrow);
	}
	.about__closing strong {
		color: var(--color-text);
		font-weight: 600;
	}
</style>
