<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import HeroIllustration from '$lib/components/sections/HeroIllustration.svelte';

	const capabilities = [
		{ label: 'AI Systems', icon: 'chip' },
		{ label: 'Full-Stack Development', icon: 'layers' },
		{ label: 'Product & Architecture', icon: 'cube' }
	] as const;
</script>

<section id="hero" class="hero section-spacing" aria-labelledby="hero-title">
	<div class="container hero__inner">
		<div class="hero__main">
			<div class="hero__copy">
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
						{#if capability.icon === 'chip'}<svg viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M17 9h4M3 15h4M17 15h4"/></svg>
						{:else if capability.icon === 'layers'}<svg viewBox="0 0 24 24"><path d="m12 4 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4M4 16l8 4 8-4"/></svg>
						{:else}<svg viewBox="0 0 24 24"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4.3 7.7 7.7 4.5 7.7-4.5M12 12.2V21"/></svg>{/if}
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
	.hero__inner { padding-block: clamp(3.5rem, 8vw, 6.5rem) clamp(3rem, 6vw, 5.5rem); }
	.hero__main { display: grid; grid-template-columns: minmax(0, 53%) minmax(0, 47%); align-items: center; gap: clamp(1rem, 2vw, 2.25rem); }
	.hero__copy { position: relative; z-index: 2; }
	h1 { max-width: 13ch; margin: 0; color: var(--color-text); font-size: clamp(3.35rem, 5.25vw, 4.65rem); line-height: 0.99; letter-spacing: -0.078em; font-weight: 700; }
	h1 span { color: var(--color-accent); }
	.hero__intro { max-width: 38rem; margin: 1.8rem 0 0; color: var(--color-text-muted); font-size: clamp(1.1rem, 1.55vw, 1.3rem); line-height: 1.55; }
	.hero__actions { display: flex; flex-wrap: wrap; gap: 0.85rem; margin-top: 2.05rem; }
	.hero__actions :global(.btn) { min-height: 3.25rem; padding-inline: 1.45rem; }
	.hero__visual { display: flex; justify-content: flex-end; min-width: 0; }
	.hero__capabilities { display: flex; align-items: center; gap: clamp(1.25rem, 4vw, 3rem); margin: clamp(3.2rem, 6vw, 5.5rem) 0 0; padding: 0; list-style: none; }
	.hero__capabilities li:not(.capability__divider) { display: flex; align-items: center; gap: 0.8rem; color: var(--color-text); font-size: 0.96rem; white-space: nowrap; }
	.capability__icon { display: grid; place-items: center; width: 2.35rem; height: 2.35rem; border-radius: 0.6rem; color: var(--color-accent); }
	.capability__icon svg { width: 1.55rem; height: 1.55rem; fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.7; }
	.capability__divider { width: 1px; height: 2.15rem; flex: 0 0 1px; background: var(--color-border); }
	@media (max-width: 980px) { .hero__main { grid-template-columns: minmax(0, 1fr) minmax(19rem, 44%); gap: 0.75rem; } h1 { font-size: clamp(3rem, 6vw, 4rem); }.hero__capabilities { flex-wrap: wrap; gap: 1rem 2rem; }.capability__divider { display: none; } }
	@media (max-width: 760px) { .hero__main { grid-template-columns: 1fr; }.hero__visual { justify-content: center; margin-top: 2.8rem; }.hero__capabilities { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin-top: 3rem; }.hero__capabilities li:not(.capability__divider) { font-size: 0.85rem; white-space: normal; }.capability__icon { width: 2.1rem; height: 2.1rem; flex: 0 0 2.1rem; } }
	@media (max-width: 460px) { h1 { font-size: clamp(2.65rem, 12vw, 3.35rem); }.hero__intro { font-size: 1.05rem; }.hero__actions { flex-direction: column; }.hero__actions :global(.btn) { width: 100%; }.hero__capabilities { grid-template-columns: 1fr; }.hero__capabilities li:not(.capability__divider) { min-height: 2.3rem; } }
</style>
