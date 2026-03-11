<script lang="ts">
  interface Props {
    href?: string;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit';
    disabled?: boolean;
    class?: string;
    children: import('svelte').Snippet;
  }

  let {
    href,
    variant = 'primary',
    size = 'md',
    type = 'button',
    disabled = false,
    class: className = '',
    children
  }: Props = $props();

  const tag = $derived(href ? 'a' : 'button');
</script>

{#if tag === 'a'}
  <a
    href={href}
    class={`btn btn--${variant} btn--${size} ${className}`}
    aria-disabled={disabled}
    onclick={disabled ? (e) => e.preventDefault() : undefined}
  >
    {@render children()}
  </a>
{:else}
  <button
    type={type}
    class={`btn btn--${variant} btn--${size} ${className}`}
    disabled={disabled}
  >
    {@render children()}
  </button>
{/if}

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    font-family: var(--font-sans);
    font-weight: 500;
    border-radius: 999px;
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
    color: #020617;
    border-color: var(--color-accent);
  }
  .btn--primary:hover:not(:disabled):not([aria-disabled='true']) {
    background: var(--color-accent-alt);
    border-color: var(--color-accent-alt);
  }

  .btn--secondary {
    background: transparent;
    color: var(--color-text);
    border-color: rgba(148, 163, 184, 0.5);
  }
  .btn--secondary:hover:not(:disabled):not([aria-disabled='true']) {
    background: rgba(15, 23, 42, 0.9);
    border-color: rgba(148, 163, 184, 0.9);
  }

  .btn--ghost {
    background: transparent;
    color: var(--color-text-muted);
  }
  .btn--ghost:hover:not(:disabled):not([aria-disabled='true']) {
    background: rgba(15, 23, 42, 0.9);
    color: var(--color-text);
  }
</style>
