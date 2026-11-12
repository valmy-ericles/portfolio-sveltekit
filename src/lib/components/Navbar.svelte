<script lang="ts">
	import { onMount } from 'svelte';
	import { navLinks } from '$lib/data/nav';

	let activeId = $state('hero');
	let isMenuOpen = $state(false);
	let isScrolled = $state(false);

	onMount(() => {
		const update = () => {
			isScrolled = window.scrollY > 12;
			const probe = window.scrollY + 140;
			let current = 'hero';
			for (const link of navLinks) {
				const section = document.getElementById(link.href.slice(1));
				if (section && section.offsetTop <= probe) current = section.id;
			}
			activeId = current;
		};
		update();
		window.addEventListener('scroll', update, { passive: true });
		return () => window.removeEventListener('scroll', update);
	});

	function closeMenu() { isMenuOpen = false; }
</script>

<header class:navbar--scrolled={isScrolled} class="navbar">
	<div class="container navbar__inner">
		<a class="navbar__brand" href="#hero" aria-label="Valmy Machado home" onclick={closeMenu}>VM.</a>
		<button class="navbar__toggle" type="button" aria-expanded={isMenuOpen} aria-controls="main-navigation" onclick={() => (isMenuOpen = !isMenuOpen)}>
			<span class="sr-only">Toggle navigation</span>
			<span></span><span></span>
		</button>
		<nav id="main-navigation" class:navbar__nav--open={isMenuOpen} class="navbar__nav" aria-label="Main navigation">
			{#each navLinks as link}
				<a href={link.href} class:navbar__link--active={activeId === link.href.slice(1)} onclick={closeMenu}>{link.label}</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	.navbar { position: fixed; inset: 0 0 auto; z-index: 50; border-bottom: 1px solid transparent; background: rgba(250, 250, 250, 0.9); backdrop-filter: blur(12px); transition: border-color var(--duration-fast), background-color var(--duration-fast); }
	.navbar--scrolled { border-color: var(--color-border); background: rgba(250, 250, 250, 0.96); }
	.navbar__inner { min-height: var(--header-height); display: flex; align-items: center; justify-content: space-between; }
	.navbar__brand { color: var(--color-text); font-size: 1rem; font-weight: 700; letter-spacing: -0.06em; }
	.navbar__brand:hover { color: var(--color-accent); }
	.navbar__nav { display: flex; align-items: center; gap: clamp(1rem, 3vw, 2rem); }
	.navbar__nav a { position: relative; padding-block: 0.35rem; color: var(--color-text-muted); font-size: var(--text-sm); }
	.navbar__nav a:hover, .navbar__nav a.navbar__link--active { color: var(--color-text); }
	.navbar__nav a.navbar__link--active::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 2px; background: var(--color-accent); }
	.navbar__toggle { display: none; border: 0; background: transparent; color: var(--color-text); padding: 0.5rem; }
	.navbar__toggle span:not(.sr-only) { display: block; width: 1.25rem; height: 1px; margin: 0.3rem; background: currentColor; }
	@media (max-width: 640px) {
		.navbar__toggle { display: block; }
		.navbar__nav { position: absolute; top: 100%; left: 1rem; right: 1rem; display: none; flex-direction: column; align-items: stretch; gap: 0; padding: 0.5rem; border: 1px solid var(--color-border); border-radius: 10px; background: var(--color-surface); box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08); }
		.navbar__nav--open { display: flex; }
		.navbar__nav a { padding: 0.75rem; }
	}
</style>
