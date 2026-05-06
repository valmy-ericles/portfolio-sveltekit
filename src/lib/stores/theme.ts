import { browser } from '$app/environment';

type Theme = 'dark';

function applyTheme(theme: Theme) {
	if (!browser || !document.documentElement) return;
	document.documentElement.setAttribute('data-theme', theme);
}

export function getInitialTheme(): Theme {
	return 'dark';
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
	applyTheme('dark');
	return 'dark';
}
