<script lang="ts">
  interface Props {
    id?: string;
    title?: string;
    subtitle?: string;
    class?: string;
    children: import('svelte').Snippet;
  }

  let { id, title, subtitle, class: className = '', children }: Props = $props();
</script>

<section
  {id}
  class={`section section-spacing ${className}`}
  aria-labelledby={title ? `${id ?? 'section'}-title` : undefined}
>
  <div class="container">
    {#if title}
      <header class="section__header">
        <h2 id="{id ?? 'section'}-title" class="section__title">{title}</h2>
        {#if subtitle}
          <p class="section__subtitle">{subtitle}</p>
        {/if}
      </header>
    {/if}
    <div class="section__content">
      {@render children()}
    </div>
  </div>
</section>

<style>
  .section__header {
    margin-bottom: var(--space-10);
    max-width: var(--container-default);
  }
  .section__title {
    margin: 0;
    font-size: clamp(2rem, 2.6vw, 2.6rem);
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    line-height: var(--leading-tight);
    color: var(--color-text);
  }
  @media (min-width: 1024px) {
    .section__title {
      font-size: clamp(2.4rem, 3vw, 3rem);
    }
  }
  .section__subtitle {
    margin: var(--space-2) 0 0;
    font-size: var(--text-base);
    line-height: var(--leading-relaxed);
    color: var(--color-text-muted);
    max-width: var(--container-narrow);
  }
</style>
