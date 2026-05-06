<script lang="ts">
  interface Props {
    class?: string;
    as?: 'article' | 'div' | 'blockquote';
    children: import('svelte').Snippet;
  }

  let { class: className = '', as: tag = 'div', children }: Props = $props();
</script>

<svelte:element this={tag} class={`card ${className}`}>
  {@render children()}
</svelte:element>

<style>
  .card {
    background: color-mix(in oklab, var(--color-bg-elevated) 86%, #0b1220);
    border: 1px solid rgba(148, 163, 184, 0.14);
    border-radius: 1rem;
    padding: var(--space-6);
    transition:
      border-color var(--duration-normal) var(--ease-out),
      box-shadow var(--duration-normal) var(--ease-out),
      background-color var(--duration-normal) var(--ease-out);
  }
  .card:hover {
    border-color: rgba(125, 211, 252, 0.3);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  }

</style>
