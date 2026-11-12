<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import HeroIllustration from '$lib/components/sections/HeroIllustration.svelte';

	const capabilities = [
		{ label: 'AI Agents', icon: 'bot' },
		{ label: 'LLM Applications', icon: 'layers' },
		{ label: 'RAG Systems', icon: 'database' },
		{ label: 'Full-Stack Development', icon: 'code' },
		{ label: 'Software Architecture', icon: 'nodes' }
	] as const;
</script>

<section id="hero" class="hero section-spacing" aria-labelledby="hero-title">
	<div class="container hero__inner">
		<div class="hero__main">
			<div class="hero__copy">
				<p class="hero__eyebrow"><span aria-hidden="true">✦</span> Software Engineering · AI Systems · Product Development</p>
				<h1 id="hero-title">AI Engineer <span>&amp;</span><br />Full-Stack Engineer</h1>
				<p class="hero__intro">I build intelligent applications, AI agents, and scalable software — from architecture to production.</p>
				<div class="hero__actions">
					<Button href="#projects" variant="primary" size="lg">Explore My Work <span aria-hidden="true">→</span></Button>
					<Button href="#contact" variant="secondary" size="lg">Get in Touch</Button>
				</div>
			</div>
			<div class="hero__visual"><HeroIllustration /></div>
		</div>

		<ul class="hero__capabilities" aria-label="Capabilities">
			{#each capabilities as capability, index}
				<li>
					<span class="capability__icon" aria-hidden="true">
						{#if capability.icon === 'bot'}<svg viewBox="0 0 24 24"><rect x="5" y="7" width="14" height="11" rx="3"/><path d="M12 4v3M8 12h.01M16 12h.01M9 21h6"/></svg>
						{:else if capability.icon === 'layers'}<svg viewBox="0 0 24 24"><path d="m12 4 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4M4 16l8 4 8-4"/></svg>
						{:else if capability.icon === 'database'}<svg viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>
						{:else if capability.icon === 'code'}<svg viewBox="0 0 24 24"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg>
						{:else}<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="m11 7-5 9M13 7l5 9M7 18h10"/></svg>{/if}
					</span>
					<span>{capability.label}</span>
				</li>
				{#if index < capabilities.length - 1}<li class="capability__divider" aria-hidden="true"></li>{/if}
			{/each}
		</ul>
	</div>
</section>

<style>
	.hero { border-bottom: 1px solid var(--color-border); }
	.hero__inner { padding-block: clamp(3.5rem, 7vw, 5.8rem) clamp(3rem, 6vw, 5rem); }
	.hero__main { display: grid; grid-template-columns: minmax(0, 55%) minmax(0, 45%); align-items: center; gap: clamp(1rem, 3vw, 3rem); }
	.hero__copy { position: relative; z-index: 2; }
	.hero__eyebrow { display: inline-flex; align-items: center; gap: 0.6rem; margin: 0 0 2.5rem; padding: 0.45rem 0.9rem; border-radius: 999px; background: var(--color-accent-muted); color: var(--color-accent); font-size: 0.9rem; font-weight: 600; }
	.hero__eyebrow span { font-size: 1.15rem; line-height: 1; }
	h1 { max-width: 13ch; margin: 0; color: var(--color-text); font-size: clamp(3.3rem, 5.2vw, 4.55rem); line-height: 0.99; letter-spacing: -0.075em; font-weight: 700; }
	h1 span { color: var(--color-accent); }
	.hero__intro { max-width: 38rem; margin: 1.7rem 0 0; color: var(--color-text-muted); font-size: clamp(1.1rem, 1.55vw, 1.3rem); line-height: 1.55; }
	.hero__actions { display: flex; flex-wrap: wrap; gap: 0.85rem; margin-top: 2rem; }
	.hero__actions :global(.btn) { min-height: 3.25rem; padding-inline: 1.45rem; }
	.hero__visual { display: flex; justify-content: flex-end; min-width: 0; }
	.hero__capabilities { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; margin: clamp(3rem, 6vw, 5.5rem) 0 0; padding: 0; list-style: none; }
	.hero__capabilities li:not(.capability__divider) { display: flex; align-items: center; gap: 0.75rem; color: var(--color-text); font-size: 0.95rem; white-space: nowrap; }
	.capability__icon { display: grid; place-items: center; width: 2.4rem; height: 2.4rem; border-radius: 0.65rem; background: var(--color-accent-muted); color: var(--color-accent); }
	.capability__icon svg { width: 1.3rem; height: 1.3rem; fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.7; }
	.capability__divider { width: 1px; height: 2.2rem; flex: 0 0 1px; background: var(--color-border); }
	@media (max-width: 980px) { .hero__main { grid-template-columns: minmax(0, 1fr) minmax(19rem, 42%); gap: 0.5rem; } h1 { font-size: clamp(3rem, 6vw, 4rem); }.hero__capabilities { flex-wrap: wrap; justify-content: flex-start; }.capability__divider { display: none; } }
	@media (max-width: 760px) { .hero__main { grid-template-columns: 1fr; }.hero__visual { justify-content: center; margin-top: 2.5rem; }.hero__eyebrow { margin-bottom: 1.7rem; font-size: 0.78rem; }.hero__capabilities { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.85rem; margin-top: 3rem; }.hero__capabilities li:not(.capability__divider) { font-size: 0.82rem; white-space: normal; }.capability__icon { width: 2.15rem; height: 2.15rem; flex: 0 0 2.15rem; } }
	@media (max-width: 460px) { h1 { font-size: clamp(2.65rem, 12vw, 3.35rem); }.hero__intro { font-size: 1.05rem; }.hero__actions { flex-direction: column; }.hero__actions :global(.btn) { width: 100%; }.hero__capabilities { grid-template-columns: 1fr; }.hero__capabilities li:not(.capability__divider) { min-height: 2.3rem; } }
</style>
