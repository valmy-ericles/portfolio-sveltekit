<script lang="ts">
	import { profile } from '$lib/data/profile';
</script>

<footer class="footer">
	<div class="container footer__inner">
		<div class="footer__links">
			<a href={profile.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
			<a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
			<a href={`mailto:${profile.email}`} aria-label="Email">Email</a>
		</div>
		<p class="footer__copy">
			© {new Date().getFullYear()} {profile.name}. Built with SvelteKit.
		</p>
	</div>
</footer>

<style>
	.footer {
		padding: var(--space-8) 0;
		border-top: 1px solid var(--color-border);
		background: var(--color-bg);
	}
	.footer__inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-4);
		text-align: center;
	}
	.footer__links {
		display: flex;
		gap: var(--space-6);
	}
	.footer__links a {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
	}
	.footer__links a:hover {
		color: var(--color-text);
	}
	.footer__copy {
		margin: 0;
		font-size: var(--text-xs);
		color: var(--color-text-subtle);
	}
</style>
