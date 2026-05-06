<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(false);
	let cursorEl: HTMLDivElement | null = $state(null);
	let mounted = $state(false);

	let mouseX = 0;
	let mouseY = 0;
	let ringX = 0;
	let ringY = 0;
	let ringScale = 1;
	let ringPressed = false;
	let rafId = 0;

	const RING_LERP = 0.18;
	const RING_SIZE = 26;
	const DOT_SIZE = 5;
	const HOVER_SCALE = 1.4;
	const PRESSED_SCALE = 0.85;
	const INTERACTIVE_SELECTOR =
		'a, button, [role="button"], .btn, .card, [class*="card"], [class*="navbar__item"]';

	function isInteractive(el: Element | null): boolean {
		if (!el || el === document.body) return false;
		if (el.matches(INTERACTIVE_SELECTOR)) return true;
		return isInteractive(el.parentElement);
	}

	onMount(() => {
		if (typeof window === 'undefined') return;

		const prefersCoarse =
			window.matchMedia?.('(pointer: coarse)').matches ||
			'ontouchstart' in window ||
			navigator.maxTouchPoints > 0;

		if (prefersCoarse) return;

		mounted = true;
		mouseX = window.innerWidth / 2;
		mouseY = window.innerHeight / 2;
		ringX = mouseX;
		ringY = mouseY;

		const body = document.body;

		function setCursorHidden(hide: boolean) {
			body.style.cursor = hide ? 'none' : '';
		}

		function onMouseMove(e: MouseEvent) {
			mouseX = e.clientX;
			mouseY = e.clientY;
			if (!visible) visible = true;
			setCursorHidden(true);
		}

		function onMouseDown() {
			ringPressed = true;
		}

		function onMouseUp() {
			ringPressed = false;
		}

		function onKeyDown(e: KeyboardEvent) {
			if (e.key === 'Tab') {
				visible = false;
				setCursorHidden(false);
			}
		}

		function tick() {
			rafId = requestAnimationFrame(tick);
			const el = cursorEl;
			if (!el) return;

			ringX += (mouseX - ringX) * RING_LERP;
			ringY += (mouseY - ringY) * RING_LERP;

			const under = document.elementFromPoint(mouseX, mouseY);
			const hover = isInteractive(under);

			if (ringPressed) {
				ringScale += (PRESSED_SCALE - ringScale) * 0.25;
			} else if (hover) {
				ringScale += (HOVER_SCALE - ringScale) * 0.2;
			} else {
				ringScale += (1 - ringScale) * 0.2;
			}

			el.style.setProperty('--dot-x', `${mouseX}px`);
			el.style.setProperty('--dot-y', `${mouseY}px`);
			el.style.setProperty('--ring-x', `${ringX}px`);
			el.style.setProperty('--ring-y', `${ringY}px`);
			el.style.setProperty('--ring-scale', String(ringScale));
			el.classList.toggle('is-hover', hover);
		}

		window.addEventListener('mousemove', onMouseMove, { passive: true });
		window.addEventListener('mousedown', onMouseDown);
		window.addEventListener('mouseup', onMouseUp);
		window.addEventListener('keydown', onKeyDown);
		tick();

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mousedown', onMouseDown);
			window.removeEventListener('mouseup', onMouseUp);
			window.removeEventListener('keydown', onKeyDown);
			cancelAnimationFrame(rafId);
			setCursorHidden(false);
		};
	});
</script>

{#if mounted}
	<div
		class="custom-cursor"
		class:custom-cursor--visible={visible}
		bind:this={cursorEl}
		aria-hidden="true"
	>
		<div class="custom-cursor__dot"></div>
		<div class="custom-cursor__ring"></div>
	</div>
{/if}

<style>
	.custom-cursor {
		position: fixed;
		top: 0;
		left: 0;
		width: 0;
		height: 0;
		pointer-events: none;
		z-index: 9999;
		opacity: 0;
		transition: opacity 0.15s ease;
	}

	.custom-cursor.custom-cursor--visible {
		opacity: 1;
	}

	.custom-cursor__dot {
		position: fixed;
		left: var(--dot-x);
		top: var(--dot-y);
		width: 5px;
		height: 5px;
		margin-left: -2.5px;
		margin-top: -2.5px;
		border-radius: 50%;
		background: var(--color-text);
		transform: translate(0, 0);
		transition: opacity 0.15s ease;
	}

	.custom-cursor__ring {
		position: fixed;
		left: var(--ring-x);
		top: var(--ring-y);
		width: 26px;
		height: 26px;
		margin-left: -13px;
		margin-top: -13px;
		border: 1px solid var(--color-text);
		border-radius: 50%;
		background: transparent;
		opacity: 0.45;
		transform: translate(0, 0) scale(var(--ring-scale, 1));
		transition: opacity 0.2s ease, border-color 0.2s ease;
	}

	.custom-cursor.is-hover .custom-cursor__ring {
		opacity: 0.35;
		border-color: var(--color-accent);
	}
</style>
