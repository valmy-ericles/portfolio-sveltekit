<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		class?: string;
		children: import('svelte').Snippet;
	}

	let { class: className = '', children }: Props = $props();
	let el: HTMLElement;
	let visible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) visible = true;
			},
			{ rootMargin: '0px 0px -40px 0px', threshold: 0 }
		);
		if (el) observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<div bind:this={el} class="reveal {className}" class:visible data-reveal>
	{@render children()}
</div>

<style>
	.reveal {
		opacity: 0;
		transform: translateY(12px);
		transition:
			opacity var(--duration-slow) var(--ease-out),
			transform var(--duration-slow) var(--ease-out);
	}
	.reveal.visible {
		opacity: 1;
		transform: translateY(0);
	}
</style>
