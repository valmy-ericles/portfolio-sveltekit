<script lang="ts">
	import { profile } from '$lib/data/profile';
	import Button from '$lib/components/ui/Button.svelte';
	import HeroBackground3D from '$lib/components/HeroBackground3D.svelte';

	const proofChips = ['Architecture', 'Design Systems', 'Performance', 'Accessibility', 'Product Impact'] as const;

	const credibilityStats = [
		{ value: '7+', label: 'Years', detail: 'senior frontend delivery' },
		{ value: 'DS', label: 'Systems', detail: 'tokens, components, adoption' },
		{ value: 'Scale', label: 'UI', detail: 'complex product surfaces' },
		{ value: 'Remote', label: 'Worldwide', detail: 'Brazil-based collaboration' }
	] as const;

	const impactItems = [
		{ title: 'Architecture ownership', detail: 'Frontend structures that scale across squads.' },
		{ title: 'Design system execution', detail: 'From tokens to reusable components in production.' },
		{ title: 'Performance + accessibility', detail: 'Fast interfaces with inclusive UX as baseline.' }
	] as const;

	const domainTags = ['Healthcare', 'Fintech', 'E-commerce'] as const;
</script>

<section id="hero" class="hero section-spacing reveal" aria-labelledby="hero-title">
	<HeroBackground3D />
	<div class="container hero__container" data-reveal-stagger>
		<div class="hero__grid">
			<div class="hero__content reveal-item">
				<p class="hero__eyebrow">Senior Frontend Engineer · Brazil · Remote Worldwide</p>
				<h1 id="hero-title" class="hero__title">
					I Build Scalable Frontend Systems
					<span>That Ship Fast and Hold Up in Production</span>
				</h1>
				<p class="hero__intro">
					I lead architecture and UI systems for complex products, combining design systems,
					performance, and accessibility with product execution. 7+ years delivering scalable
					interfaces across healthcare, fintech, and e-commerce.
				</p>

				<div class="hero__actions">
					<Button href="#projects" variant="primary" size="lg" magnetic>View Selected Work</Button>
					<Button href="#contact" variant="secondary" size="lg">Book a 20-min Intro</Button>
					<Button href={profile.resumeUrl} variant="ghost" size="lg">Download Résumé</Button>
				</div>

				<div class="hero__chips" aria-label="Core capabilities">
					{#each proofChips as chip}
						<span class="hero__chip">{chip}</span>
					{/each}
				</div>
			</div>

			<aside class="hero__panel reveal-item" aria-label="Credibility panel">
				<p class="hero__panelEyebrow">Why teams hire me</p>
				<div class="hero__panelMetrics">
					{#each impactItems as item}
						<div class="hero__panelMetric">
							<p class="hero__panelMetricTitle">{item.title}</p>
							<p class="hero__panelMetricDetail">{item.detail}</p>
						</div>
					{/each}
				</div>
				<div class="hero__panelFooter">
					<p class="hero__panelLabel">Domains</p>
					<div class="hero__domains">
						{#each domainTags as tag}
							<span class="hero__domain">{tag}</span>
						{/each}
					</div>
				</div>
			</aside>
		</div>

		<div class="hero__stats" aria-label="Credibility stats" data-reveal-stagger>
			{#each credibilityStats as stat}
				<div class="hero__stat reveal-item">
					<p class="hero__statValue">{stat.value}</p>
					<p class="hero__statLabel">{stat.label}</p>
					<p class="hero__statDetail">{stat.detail}</p>
				</div>
			{/each}
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
		grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
		gap: clamp(1.5rem, 3vw, 2.8rem);
		align-items: start;
	}

	.hero__content {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}

	.hero__eyebrow {
		margin: 0;
		font-size: var(--text-xs);
		letter-spacing: 0.17em;
		text-transform: uppercase;
		color: rgba(226, 232, 240, 0.7);
	}

	.hero__title {
		margin: 0;
		font-size: clamp(2.6rem, 5vw, 4.75rem);
		line-height: 0.97;
		letter-spacing: -0.02em;
		font-weight: 800;
		color: var(--color-text);
		max-inline-size: 13ch;
	}

	.hero__title span {
		display: block;
		margin-top: 0.45rem;
		color: rgba(249, 250, 251, 0.82);
		font-weight: 680;
		font-size: clamp(1.4rem, 2.5vw, 2.35rem);
		line-height: 1.08;
	}

	.hero__intro {
		margin: 0;
		max-inline-size: 55ch;
		font-size: clamp(1rem, 1.15vw, 1.1rem);
		line-height: 1.7;
		color: rgba(226, 232, 240, 0.84);
	}

	.hero__actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-2);
	}

	.hero__chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.55rem;
		margin-top: var(--space-2);
	}

	.hero__chip {
		font-size: 0.72rem;
		font-family: var(--font-mono);
		color: rgba(226, 232, 240, 0.78);
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 999px;
		padding: 0.28rem 0.64rem;
		letter-spacing: 0.02em;
	}

	.hero__panel {
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		padding: clamp(1.15rem, 1.6vw, 1.6rem);
		border-radius: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		background:
			radial-gradient(circle at top right, rgba(249, 115, 22, 0.18), transparent 50%),
			linear-gradient(160deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
		box-shadow: 0 16px 36px rgba(0, 0, 0, 0.25);
	}

	.hero__panelEyebrow {
		margin: 0;
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(226, 232, 240, 0.72);
	}

	.hero__panelMetrics {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.hero__panelMetric {
		display: flex;
		flex-direction: column;
		gap: 0.26rem;
		padding-bottom: var(--space-3);
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	}

	.hero__panelMetric:last-child {
		padding-bottom: 0;
		border-bottom: 0;
	}

	.hero__panelMetricTitle {
		margin: 0;
		font-size: 0.98rem;
		font-weight: 600;
		color: rgba(248, 250, 252, 0.96);
	}

	.hero__panelMetricDetail {
		margin: 0;
		font-size: 0.86rem;
		line-height: 1.5;
		color: rgba(203, 213, 225, 0.8);
	}

	.hero__panelFooter {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.hero__panelLabel {
		margin: 0;
		font-size: 0.72rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: rgba(148, 163, 184, 0.9);
	}

	.hero__domains {
		display: flex;
		flex-wrap: wrap;
		gap: 0.55rem;
	}

	.hero__domain {
		font-size: 0.75rem;
		padding: 0.3rem 0.62rem;
		border-radius: 999px;
		border: 1px solid rgba(163, 230, 53, 0.35);
		background: rgba(163, 230, 53, 0.1);
		color: rgba(217, 249, 157, 0.92);
	}

	.hero__stats {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: var(--space-3);
	}

	.hero__stat {
		padding: 0.9rem 0.95rem;
		border-radius: 0.8rem;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(255, 255, 255, 0.025);
		transition:
			transform 240ms cubic-bezier(0.22, 1, 0.36, 1),
			border-color 240ms cubic-bezier(0.22, 1, 0.36, 1),
			background-color 240ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.hero__stat:hover {
		transform: translateY(-2px);
		border-color: rgba(249, 115, 22, 0.35);
		background: rgba(249, 115, 22, 0.08);
	}

	.hero__statValue {
		margin: 0;
		font-size: 1.38rem;
		font-weight: 700;
		line-height: 1.1;
		color: rgba(248, 250, 252, 0.98);
	}

	.hero__statLabel {
		margin: 0.3rem 0 0;
		font-size: 0.67rem;
		text-transform: uppercase;
		letter-spacing: 0.13em;
		color: rgba(148, 163, 184, 0.92);
	}

	.hero__statDetail {
		margin: 0.2rem 0 0;
		font-size: 0.74rem;
		line-height: 1.45;
		color: rgba(203, 213, 225, 0.82);
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
		.hero__stats {
			grid-template-columns: repeat(2, minmax(0, 1fr));
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
		.hero__stats {
			grid-template-columns: minmax(0, 1fr);
		}
	}
</style>
