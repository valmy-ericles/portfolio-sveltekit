import { browser } from '$app/environment';

const STORAGE_KEY = 'portfolio-theme';
type Theme = 'light' | 'dark';

function getSystemTheme(): Theme {
	if (!browser || typeof window.matchMedia !== 'function') return 'light';
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredTheme(): Theme | null {
	if (!browser) return null;
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored === 'light' || stored === 'dark') return stored;
	} catch {
		/* ignore */
	}
	return null;
}

function applyTheme(theme: Theme) {
	if (!browser || !document.documentElement) return;
	document.documentElement.setAttribute('data-theme', theme);
	try {
		localStorage.setItem(STORAGE_KEY, theme);
	} catch {
		/* ignore */
	}
}

export function getInitialTheme(): Theme {
	return getStoredTheme() ?? getSystemTheme();
}

export function initTheme() {
	const theme = getInitialTheme();
	applyTheme(theme);
	return theme;
}

export function setTheme(theme: Theme) {
	applyTheme(theme);
	return theme;
}

export function toggleTheme(): Theme {
	const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
	const next: Theme = current === 'dark' ? 'light' : 'dark';
	applyTheme(next);
	return next;
}
