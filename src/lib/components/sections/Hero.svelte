<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/ui/Button.svelte';

	let HeroBackground3D = $state<null | typeof import('$lib/components/HeroBackground3D.svelte').default>(null);

	const proofChips = ['System Architecture', 'Frontend Engineering', 'Backend APIs', 'Cloud & DevOps', 'Product Delivery'] as const;

	// Removed stats/panel blocks to keep hero focused.

	onMount(() => {
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const smallViewport = window.innerWidth < 768;
		if (reduceMotion || smallViewport) return;

		const timer = window.setTimeout(async () => {
			const module = await import('$lib/components/HeroBackground3D.svelte');
			HeroBackground3D = module.default;
		}, 250);

		return () => window.clearTimeout(timer);
	});
</script>

<section id="hero" class="hero section-spacing reveal" aria-labelledby="hero-title">
	{#if HeroBackground3D}
		{@const HeroBackground3DComponent = HeroBackground3D}
		<HeroBackground3DComponent />
	{/if}
	<div class="container hero__container" data-reveal-stagger>
		<div class="hero__grid">
			<div class="hero__content reveal-item">
				<p class="hero__eyebrow">Fullstack Engineer · Brazil · Remote Worldwide</p>
				<h1 id="hero-title" class="hero__title">
					<span class="hero__titleAccent">Fullstack Software Engineering</span>
					<span class="hero__titleSubline">From Product to Production</span>
				</h1>
				<p class="hero__intro">
					I design and deliver end-to-end software for complex products, connecting frontend
					experiences, backend services, and cloud operations with product execution. 7+ years
					building scalable platforms across healthcare, fintech, and e-commerce.
				</p>

				<div class="hero__actions">
					<Button href="#projects" variant="primary" size="lg" magnetic>View Selected Work</Button>
				</div>

				<div class="hero__chips" aria-label="Core capabilities">
					{#each proofChips as chip}
						<span class="hero__chip">{chip}</span>
					{/each}
				</div>
			</div>
		</div>

	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 92vh;
		display: flex;
		align-items: center;
		overflow: hidden;
	}

	.hero__container {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: var(--space-10);
	}

	.hero__grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: clamp(1.5rem, 3vw, 2.8rem);
		align-items: center;
		justify-items: center;
	}

	.hero__content {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		align-items: center;
		text-align: center;
	}

	.hero__eyebrow {
		margin: 0;
		font-size: var(--text-xs);
		letter-spacing: 0.17em;
		text-transform: uppercase;
		color: rgba(226, 232, 240, 0.9);
	}

	.hero__title {
		margin: 0;
		font-size: clamp(3.6rem, 4.6vw, 6.8rem);
		line-height: 0.97;
		letter-spacing: -0.02em;
		font-weight: 800;
		color: var(--color-text);
		max-inline-size: 16ch;
	}

	.hero__title > span {
		display: block;
	}

	.hero__titleAccent {
		background: linear-gradient(105deg, #e2e8f0 0%, #bae6fd 40%, #7dd3fc 72%, #38bdf8 100%);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		text-shadow: 0 0 26px rgba(56, 189, 248, 0.22);
	}

	.hero__titleSubline {
		margin-top: 0.45rem;
		color: rgba(249, 250, 251, 0.9);
		font-weight: 680;
		font-size: clamp(1.75rem, 3.1vw, 2.9rem);
		line-height: 1.08;
	}

	.hero__intro {
		margin: 0;
		max-inline-size: 70ch;
		font-size: clamp(1rem, 1.15vw, 1.1rem);
		line-height: 1.7;
		color: rgba(226, 232, 240, 0.92);
	}

	.hero__actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-2);
		justify-content: center;
	}

	.hero__chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.55rem;
		margin-top: var(--space-2);
		justify-content: center;
	}

	.hero__chip {
		font-size: 0.72rem;
		font-family: var(--font-mono);
		color: rgba(226, 232, 240, 0.9);
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 999px;
		padding: 0.28rem 0.64rem;
		letter-spacing: 0.02em;
	}

	@media (max-width: 1024px) {
		.hero {
			min-height: auto;
		}
		.hero__grid {
			grid-template-columns: minmax(0, 1fr);
			gap: var(--space-6);
		}
		.hero__title {
			max-inline-size: 14ch;
		}
	}

	@media (max-width: 640px) {
		.hero__actions {
			align-items: stretch;
		}
		.hero__actions :global(.btn),
		.hero__actions :global(.btn-magnetic-wrap) {
			width: 100%;
			justify-content: center;
		}
	}
</style>
