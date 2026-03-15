<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CursorSpotlight from '$lib/components/ui/CursorSpotlight.svelte';
	import CustomCursor from '$lib/components/ui/CustomCursor.svelte';
	import { initScrollReveal } from '$lib/animations/scrollReveal';

	let { children } = $props();

	onMount(() => {
		// Inicializa animações de scroll com GSAP/ScrollTrigger
		initScrollReveal();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=JetBrains+Mono:wght@400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="layout">

	<Navbar />
	<main id="main-content">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.layout {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	/* Ensure content sits above the spotlight overlay */
	.layout :global(> :not(.cursor-spotlight)) {
		position: relative;
		z-index: 1;
	}

	#main-content {
		flex: 1;
		/* Compensa a altura do navbar fixo para o conteúdo não ficar escondido */
		padding-top: calc(var(--space-16) + var(--space-4));
	}
</style>

