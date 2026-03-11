<script lang="ts">
	import { onMount } from 'svelte';
	import { navLinks } from '$lib/data/nav';
	import { initTheme, toggleTheme } from '$lib/stores/theme';

	const sectionIds = navLinks.map((l) => l.href.slice(1)).filter(Boolean);

	let activeId = $state('');
	let theme = $state<'light' | 'dark'>('light');

	const iconByHref: Record<string, string> = {
		'#hero': 'home',
		'#about': 'about',
		'#highlights': 'star',
		'#projects': 'work',
		'#contact': 'mail'
	};

	const items = navLinks.map((link) => {
		const href = link.href as string;
		const icon = iconByHref[href] ?? 'dot';
		return { ...link, icon };
	});

	onMount(() => {
		theme = initTheme();
		const hash = window.location.hash.slice(1);
		activeId = sectionIds.includes(hash) ? hash : 'hero';
	});

	function handleThemeToggle() {
		theme = toggleTheme();
	}

	function handleNavClick(href: string) {
		const id = href.slice(1);
		if (id && sectionIds.includes(id)) activeId = id;
	}
</script>

<header class="navbar" aria-label="Primary">
	<div class="container navbar__outer">
		<nav class="navbar__pill" aria-label="Main navigation">
			<ul class="navbar__list">
				{#each items as item}
					<li>
						<a
							href={item.href}
							class="navbar__item"
							class:navbar__itemActive={activeId === item.href.slice(1)}
							onclick={() => handleNavClick(item.href)}
						>
							<span class="navbar__iconWrap" aria-hidden="true">
								{#if item.icon === 'home'}
									<svg viewBox="0 0 24 24">
										<path d="M4 11.5 12 4l8 7.5" />
										<path d="M6.5 10.5V20h11v-9.5" />
									</svg>
								{:else if item.icon === 'about'}
									<svg viewBox="0 0 24 24">
										<circle cx="12" cy="8" r="3.2" />
										<path d="M6.5 19.2c.9-2.7 3-4.4 5.5-4.4s4.6 1.7 5.5 4.4" />
									</svg>
								{:else if item.icon === 'experience'}
									<svg viewBox="0 0 24 24">
										<rect x="4" y="7.5" width="16" height="11" rx="2" />
										<path d="M9 7.5V6a3 3 0 0 1 6 0v1.5" />
									</svg>
								{:else if item.icon === 'work'}
									<svg viewBox="0 0 24 24">
										<rect x="3.5" y="6" width="17" height="12" rx="2" />
										<path d="M3.5 10.5h17" />
									</svg>
								{:else if item.icon === 'stack'}
									<svg viewBox="0 0 24 24">
										<path d="M4.5 9 12 4l7.5 5-7.5 5z" />
										<path d="m6.5 13.5 5.5 3.7 5.5-3.7" />
									</svg>
								{:else if item.icon === 'star'}
									<svg viewBox="0 0 24 24">
										<path d="m12 4 2 4.7 5.1.5-3.8 3.2 1.1 5-4.4-2.6-4.4 2.6 1.1-5L4.9 9.2l5.1-.5z" />
									</svg>
								{:else if item.icon === 'case'}
									<svg viewBox="0 0 24 24">
										<rect x="4" y="6.5" width="16" height="11" rx="1.8" />
										<path d="M9.5 6.5V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1.5" />
									</svg>
								{:else if item.icon === 'quote'}
									<svg viewBox="0 0 24 24">
										<path d="M7.5 9.5a3 3 0 1 0 0 6h1v-6h-1z" />
										<path d="M15.5 9.5a3 3 0 1 0 0 6h1v-6h-1z" />
									</svg>
								{:else if item.icon === 'spark'}
									<svg viewBox="0 0 24 24">
										<path d="M12 3v5.5" />
										<path d="M7.2 5.5 9.7 8" />
										<path d="M4.5 11.5H9" />
										<path d="M7.2 17.5 9.7 15" />
										<path d="M12 21v-5.5" />
										<path d="M16.8 17.5 14.3 15" />
										<path d="M19.5 11.5H15" />
										<path d="M16.8 5.5 14.3 8" />
									</svg>
								{:else if item.icon === 'mail'}
									<svg viewBox="0 0 24 24">
										<rect x="4" y="6" width="16" height="12" rx="2" />
										<path d="m5.5 8 6.5 4 6.5-4" />
									</svg>
								{:else}
									<svg viewBox="0 0 24 24">
										<circle cx="12" cy="12" r="2.2" />
									</svg>
								{/if}
							</span>
							<span class="navbar__label">{item.label}</span>
						</a>
					</li>
				{/each}
				<li>
					<button
						type="button"
						class="navbar__item navbar__themeToggle"
						onclick={handleThemeToggle}
						aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
						title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
					>
						<span class="navbar__iconWrap" aria-hidden="true">
							{#if theme === 'dark'}
								<svg viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="4" />
									<path d="M12 3v2.2M12 18.8V21M5.2 5.2 6.7 6.7M17.3 17.3l1.5 1.5M3 12h2.2M18.8 12H21M5.2 18.8 6.7 17.3M17.3 6.7l1.5-1.5" />
								</svg>
							{:else}
								<svg viewBox="0 0 24 24">
									<path d="M21 12.5A8.5 8.5 0 0 1 12.5 4 6.5 6.5 0 1 0 21 12.5z" />
								</svg>
							{/if}
						</span>
					</button>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	.navbar {
		position: fixed !important;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50 !important;
		padding-top: var(--space-4);
		padding-bottom: var(--space-2);
	}

	.navbar__outer {
		display: flex;
		justify-content: center;
	}

	.navbar__pill {
		display: inline-flex;
		align-items: center;
		max-width: 100%;
		padding: 0.35rem 0.6rem;
		border-radius: 999px;
		background: rgba(15, 23, 42, 0.96);
		border: none;
		box-shadow:
			0 20px 45px rgba(0, 0, 0, 0.55),
			0 0 0 1px rgba(15, 23, 42, 0.8);
		backdrop-filter: blur(20px);
		pointer-events: auto;
	}

	/* Light theme override: pílula clara e sutil */
	:global([data-theme='light']) .navbar__pill {
		background: rgba(255, 255, 255, 0.96);
		box-shadow:
			0 14px 35px rgba(15, 23, 42, 0.12),
			0 0 0 1px rgba(148, 163, 184, 0.35);
	}

	.navbar__list {
		display: flex;
		align-items: center;
		gap: 0.15rem;
		margin: 0;
		padding: 0 0.3rem;
		list-style: none;
		overflow-x: auto;
		scrollbar-width: none;
	}
	.navbar__list::-webkit-scrollbar {
		display: none;
	}

	.navbar__item {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.35rem 0.75rem;
		border-radius: 999px;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-text-muted);
		text-decoration: none;
		white-space: nowrap;
		border: 1px solid transparent;
		background: transparent;
		transition:
			background-color var(--duration-fast) var(--ease-out),
			color var(--duration-fast) var(--ease-out),
			border-color var(--duration-fast) var(--ease-out),
			transform var(--duration-fast) var(--ease-out);
	}

	.navbar__item:hover {
		color: var(--color-text);
		background: rgba(148, 163, 184, 0.12);
		cursor: pointer;
	}

	.navbar__itemActive {
		color: var(--color-text);
		background: rgba(249, 115, 22, 0.15);
		border-color: rgba(249, 115, 22, 0.35);
	}
	.navbar__itemActive .navbar__iconWrap {
		background: var(--color-accent-muted);
		color: var(--color-accent);
	}
	:global([data-theme='light']) .navbar__itemActive .navbar__iconWrap {
		background: var(--color-accent-muted);
		color: var(--color-accent);
	}

	.navbar__iconWrap {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 999px;
		background: rgba(15, 23, 42, 0.85);
	}

	/* Ícones claros no tema claro */
	:global([data-theme='light']) .navbar__iconWrap {
		background: rgba(243, 244, 246, 1);
	}

	.navbar__iconWrap svg {
		width: 0.9rem;
		height: 0.9rem;
		stroke: currentColor;
		fill: none;
		stroke-width: 1.5;
	}

	.navbar__label {
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.navbar__themeToggle {
		padding-inline: 0.55rem;
	}
	.navbar__themeToggle svg {
		fill: none;
	}

	@media (max-width: 640px) {
		.navbar {
			padding-top: var(--space-4);
		}

		.navbar__pill {
			padding-inline: 0.3rem;
		}

		.navbar__item {
			padding-inline: 0.55rem;
		}

		.navbar__label {
			display: none;
		}
	}
</style>
