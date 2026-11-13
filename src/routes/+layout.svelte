<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { profile } from '$lib/data/profile';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();

</script>

<svelte:head>
	<title>{profile.name} | {profile.role}</title>
	<meta name="description" content={profile.headline} />
	<meta name="robots" content="index,follow" />
	<meta property="og:title" content={`${profile.name} | ${profile.role}`} />
	<meta property="og:description" content={profile.headline} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={`${profile.name} | ${profile.role}`} />
	<meta name="twitter:description" content={profile.headline} />
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="layout">

	<Navbar />
	<main id="main-content">
		{@render children()}
	</main>
</div>

<style>
	.layout {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	/* Ensure content sits above the spotlight overlay */
	#main-content {
		flex: 1;
		padding-top: var(--header-height);
	}
</style>
