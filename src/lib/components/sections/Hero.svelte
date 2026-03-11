<script lang="ts">
	import { profile } from '$lib/data/profile';
	import { careerHighlights } from '$lib/data/highlights';
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import HeroBackground3D from '$lib/components/HeroBackground3D.svelte';

	const heroSubhead = profile.heroSubhead ?? profile.headline;
	const stats = [
		{ value: '7+', label: 'Years', detail: 'frontend · production apps' },
		{ value: '—', label: 'Focus', detail: 'architecture · design systems · scale' },
		{ value: 'Brazil', label: 'Base', detail: 'open to remote worldwide' }
	] as const;

	const primaryHighlights = careerHighlights.slice(0, 3);
</script>

<section id="hero" class="hero section-spacing reveal" aria-labelledby="hero-title">
	<HeroBackground3D />
	<div class="container hero__container" data-reveal-stagger>
		<div class="hero__grid">
		
		<!-- <Card as="article" class="hero__profile reveal-item">
			<div class="hero__avatar" aria-hidden="true">
				<span class="hero__avatarInitial">{profile.name.charAt(0) ?? 'V'}</span>
			</div>
			<div class="hero__profileBody">
				<p class="hero__role">Senior Frontend Engineer</p>
				<h1 id="hero-title" class="hero__name">{profile.name}</h1>
				<p class="hero__summary">{profile.headline}</p>
			</div>
			<ul class="hero__social">
				<li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
				<li><a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
				<li><a href={`mailto:${profile.email}`}>Email</a></li>
			</ul>
		</Card> -->
		
		
			<div class="hero__headlineBlock reveal-item">
				<p class="hero__eyebrow">Based in Brazil · Open to remote</p>
				<h2 class="hero__title">
					FRONTEND<br />
					<span>ENGINEER</span>
				</h2>
				<p class="hero__intro">{heroSubhead}</p>
				<div class="hero__actions">
					<Button href="#projects" variant="primary" size="lg" magnetic>View projects</Button>
					<Button href="#contact" variant="secondary" size="lg">Get in touch</Button>
					<Button href={profile.resumeUrl} variant="ghost" size="lg">Résumé</Button>
				</div>
				<div class="hero__stats" aria-label="Key metrics">
					{#each stats as stat}
						<div class="hero__stat">
							<div class="hero__statValue">{stat.value}</div>
							<div class="hero__statLabel">{stat.label}</div>
							<div class="hero__statDetail">{stat.detail}</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="hero__highlights" aria-label="Engineering focus" data-reveal-stagger>
			{#each primaryHighlights as item (item.id)}
				<Card as="article" class="hero__highlightCard reveal-item">
					<p class="hero__highlightLabel">{item.eyebrow ?? 'Focus'}</p>
					<h3 class="hero__highlightTitle">{item.title}</h3>
					<p class="hero__highlightBody">{item.description}</p>
				</Card>
			{/each}
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 90vh;
		display: flex;
		align-items: center;
		overflow: hidden;
	}

	.hero__container {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: var(--space-12);
	}

	.hero__grid {
		display: grid;
		grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
		gap: var(--space-10);
		align-items: start;
	}

	@media (max-width: 900px) {
		.hero__grid {
			grid-template-columns: minmax(0, 1fr);
			gap: var(--space-8);
		}
	}

	.hero__avatar {
		width: 4rem;
		height: 4rem;
		border-radius: 1.25rem;
		background: linear-gradient(135deg, var(--color-accent), var(--color-accent-alt));
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--text-2xl);
		font-weight: 700;
		color: #020617;
	}

	.hero__avatarInitial {
		transform: translateY(1px);
	}

	.hero__profileBody {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.hero__role {
		margin: 0;
		font-size: var(--text-xs);
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		color: var(--color-text-subtle);
	}

	.hero__name {
		margin: 0;
		font-size: clamp(1.9rem, 2.2vw, 2.3rem);
		font-weight: 600;
		letter-spacing: -0.02em;
		color: var(--color-text);
	}

	.hero__summary {
		margin: 0;
		font-size: var(--text-sm);
		line-height: var(--leading-relaxed);
		color: var(--color-text-muted);
	}

	.hero__social {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin: var(--space-4) 0 0;
		padding: 0;
		list-style: none;
	}

	.hero__social a {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		border-radius: 999px;
		border: 1px solid rgba(148, 163, 184, 0.4);
		padding: 0.45rem 0.9rem;
		transition:
			background-color var(--duration-fast) var(--ease-out),
			border-color var(--duration-fast) var(--ease-out),
			color var(--duration-fast) var(--ease-out),
			transform var(--duration-fast) var(--ease-out);
	}

	.hero__social a:hover {
		background: var(--color-accent-muted);
		border-color: var(--color-accent);
		color: var(--color-text);
		transform: translateY(-1px);
	}

	.hero__headlineBlock {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}

	.hero__eyebrow {
		margin: 0;
		font-size: var(--text-xs);
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-text-subtle);
	}

	.hero__title {
		margin: 0;
		font-size: clamp(2.8rem, 4.8vw, 4.5rem);
		font-weight: 800;
		line-height: 0.9;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-text);
	}

	.hero__title span {
		color: var(--color-accent-alt);
		text-shadow: 0 0 40px rgba(163, 230, 53, 0.2);
	}

	.hero__intro {
		margin: 0;
		max-width: 36rem;
		font-size: var(--text-base);
		line-height: var(--leading-relaxed);
		color: var(--color-text-muted);
	}

	.hero__actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-2);
	}

	.hero__stats {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--space-4);
		margin-top: var(--space-6);
		border-top: 1px solid rgba(148, 163, 184, 0.35);
		padding-top: var(--space-5);
	}

	@media (max-width: 720px) {
		.hero__stats {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.hero__statValue {
		font-size: var(--text-3xl);
		font-weight: 700;
		color: var(--color-text);
	}

	.hero__statLabel {
		margin-top: var(--space-1);
		font-size: var(--text-xs);
		text-transform: uppercase;
		letter-spacing: 0.18em;
		color: var(--color-text-subtle);
	}

	.hero__statDetail {
		margin-top: var(--space-1);
		font-size: var(--text-xs);
		color: var(--color-text-muted);
	}

	.hero__highlights {
		margin-top: var(--space-10);
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--space-4);
	}

	@media (max-width: 900px) {
		.hero__highlights {
			grid-template-columns: minmax(0, 1fr);
		}
	}

	.hero__highlightCard {
		position: relative;
		overflow: hidden;
		background: radial-gradient(circle at top right, rgba(163, 230, 53, 0.2), transparent 60%),
			var(--color-surface);
	}

	.hero__highlightLabel {
		margin: 0 0 var(--space-2);
		font-size: var(--text-xs);
		text-transform: uppercase;
		letter-spacing: 0.16em;
		color: var(--color-text-subtle);
	}

	.hero__highlightTitle {
		margin: 0 0 var(--space-2);
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--color-text);
	}

	.hero__highlightBody {
		margin: 0;
		font-size: var(--text-sm);
		line-height: var(--leading-relaxed);
		color: var(--color-text-muted);
	}
</style>
