<script lang="ts">
	import { onMount } from 'svelte';

	// Lightweight, layout-wide cursor spotlight.
	// Uses CSS variables + radial-gradient and updates style via requestAnimationFrame
	// to avoid causing unnecessary Svelte re-renders.

	let el = $state<HTMLDivElement | null>(null);
	let enabled = $state(true);

	let lastX = 0;
	let lastY = 0;
	let frameId: number | null = null;

	function updateSpotlight() {
		frameId = null;
		if (!el) return;

		el.style.setProperty('--spotlight-x', `${lastX}px`);
		el.style.setProperty('--spotlight-y', `${lastY}px`);
	}

	function handleMouseMove(event: MouseEvent) {
		lastX = event.clientX;
		lastY = event.clientY;

		// Batch DOM writes with rAF for smoother performance on rapid mousemove.
		if (frameId === null) {
			frameId = requestAnimationFrame(updateSpotlight);
		}
	}

	onMount(() => {
		if (typeof window === 'undefined') return;

		// Disable spotlight on touch / coarse pointer devices.
		const prefersCoarse =
			window.matchMedia?.('(pointer: coarse)').matches ||
			'ontouchstart' in window ||
			navigator.maxTouchPoints > 0;

		if (prefersCoarse) {
			enabled = false;
			return;
		}

		enabled = true;

		// Start with a subtle default position (e.g. upper third).
		lastX = window.innerWidth / 2;
		lastY = window.innerHeight / 3;
		updateSpotlight();

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			if (frameId !== null) {
				cancelAnimationFrame(frameId);
			}
		};
	});
</script>

{#if enabled}
	<div bind:this={el} class="cursor-spotlight" aria-hidden="true"></div>
{/if}

<style>
	.cursor-spotlight {
		position: fixed;
		inset: 0;
		pointer-events: none;
		z-index: 0;

		/* Default position fallback (center-ish) */
		--spotlight-x: 50vw;
		--spotlight-y: 30vh;

		background-image: radial-gradient(
			circle at var(--spotlight-x) var(--spotlight-y),
			rgba(38, 54, 77, 0.3) 0,
			rgba(5, 47, 183, 0.123) 0px,
			transparent 420px
		);

		transition: opacity var(--duration-normal) var(--ease-out);
		opacity: 1;
	}

</style>
