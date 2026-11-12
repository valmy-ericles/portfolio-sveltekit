<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    href?: string;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit';
    disabled?: boolean;
    class?: string;
    magnetic?: boolean;
    children: import('svelte').Snippet;
  }

  let {
    href,
    variant = 'primary',
    size = 'md',
    type = 'button',
    disabled = false,
    class: className = '',
    magnetic = false,
    children
  }: Props = $props();

  const tag = $derived(href ? 'a' : 'button');

  let magneticX = $state(0);
  let magneticY = $state(0);
  let magneticScale = $state(1);
  let magneticHover = $state(false);
  let magneticWrap: HTMLSpanElement | null = $state(null);

  const MAGNETIC_RADIUS = 140;
  const MAGNETIC_STRENGTH = 0.15;
  const MAGNETIC_MAX = 14;
  const MAGNETIC_LERP = 0.14;
  const HOVER_DISTANCE = 48;
  const HOVER_SCALE = 1.04;

  function clamp(v: number, max: number) {
    return Math.max(-max, Math.min(max, v));
  }

  onMount(() => {
    if (!magnetic) return;
    let mouseX = 0;
    let mouseY = 0;
    let rafId = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    function tick() {
      rafId = requestAnimationFrame(tick);
      const wrap = magneticWrap;
      if (!wrap || disabled) return;
      const rect = wrap.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = mouseX - centerX;
      const dy = mouseY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      let targetX = 0;
      let targetY = 0;
      let targetScale = 1;

      if (distance < MAGNETIC_RADIUS) {
        targetX = clamp(dx * MAGNETIC_STRENGTH, MAGNETIC_MAX);
        targetY = clamp(dy * MAGNETIC_STRENGTH, MAGNETIC_MAX);
        if (distance < HOVER_DISTANCE) {
          targetScale = HOVER_SCALE;
          magneticHover = true;
        } else {
          magneticHover = false;
        }
      } else {
        magneticHover = false;
      }

      magneticX += (targetX - magneticX) * MAGNETIC_LERP;
      magneticY += (targetY - magneticY) * MAGNETIC_LERP;
      magneticScale += (targetScale - magneticScale) * MAGNETIC_LERP;
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    tick();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  });

  const magneticStyle = $derived(
    `translate(${magneticX}px, ${magneticY}px) scale(${magneticScale})`
  );
</script>

{#if magnetic}
  <span class="btn-magnetic-wrap" bind:this={magneticWrap} role="presentation">
    <span
      class="btn-magnetic-inner"
      class:btn-magnetic-inner--hover={magneticHover && variant === 'primary'}
      style="transform: {magneticStyle}"
    >
      {#if tag === 'a'}
        <a
          href={href}
          class="btn btn--{variant} btn--{size} {className}"
          aria-disabled={disabled}
          onclick={disabled ? (e) => e.preventDefault() : undefined}
        >
          {@render children()}
        </a>
      {:else}
        <button
          type={type}
          class="btn btn--{variant} btn--{size} {className}"
          disabled={disabled}
        >
          {@render children()}
        </button>
      {/if}
    </span>
  </span>
{:else}
  {#if tag === 'a'}
    <a
      href={href}
      class="btn btn--{variant} btn--{size} {className}"
      aria-disabled={disabled}
      onclick={disabled ? (e) => e.preventDefault() : undefined}
    >
      {@render children()}
    </a>
  {:else}
    <button
      type={type}
      class="btn btn--{variant} btn--{size} {className}"
      disabled={disabled}
    >
      {@render children()}
    </button>
  {/if}
{/if}

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    font-family: var(--font-sans);
    font-weight: 500;
    border-radius: 8px;
    border: 1px solid transparent;
    cursor: pointer;
    transition:
      background-color var(--duration-fast) var(--ease-out),
      color var(--duration-fast) var(--ease-out),
      border-color var(--duration-fast) var(--ease-out),
      transform var(--duration-fast) var(--ease-out);
  }
  .btn:disabled,
  .btn[aria-disabled='true'] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .btn--sm {
    padding: 0.35rem 0.85rem;
    font-size: var(--text-xs);
  }
  .btn--md {
    padding: 0.5rem 1.2rem;
    font-size: var(--text-sm);
  }
  .btn--lg {
    padding: 0.75rem 1.6rem;
    font-size: var(--text-base);
  }

  .btn--primary {
    background: var(--color-accent);
    color: #ffffff;
    border-color: var(--color-accent);
  }
  .btn--primary:hover:not(:disabled):not([aria-disabled='true']) {
    background: var(--color-accent-alt);
    border-color: var(--color-accent-alt);
  }

  .btn--secondary {
    background: transparent;
    color: var(--color-text);
    border-color: var(--color-border);
  }
  .btn--secondary:hover:not(:disabled):not([aria-disabled='true']) {
    background: var(--color-accent-muted);
    border-color: var(--color-accent);
  }

  .btn--ghost {
    background: transparent;
    color: var(--color-text-muted);
  }
  .btn--ghost:hover:not(:disabled):not([aria-disabled='true']) {
    background: var(--color-accent-muted);
    color: var(--color-text);
  }

  .btn-magnetic-wrap {
    display: inline-flex;
    position: relative;
  }

  .btn-magnetic-inner {
    display: inline-flex;
    transition: box-shadow 0.25s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: transform;
  }

  .btn-magnetic-inner--hover .btn {
    box-shadow: 0 0 24px rgba(34, 211, 238, 0.28);
  }
</style>
