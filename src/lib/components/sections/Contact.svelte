<script lang="ts">
	import { profile } from '$lib/data/profile';
	import Section from '$lib/components/ui/Section.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	let formState = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');
	let name = $state('');
	let email = $state('');
	let message = $state('');

	async function handleSubmit(event: Event) {
		event.preventDefault();
		formState = 'sending';
		await new Promise((r) => setTimeout(r, 800));
		formState = 'sent';
		name = '';
		email = '';
		message = '';
	}
</script>

<Section id="contact" title="CONTACT" subtitle="Senior frontend roles, tech lead opportunities, and product-minded teams—I'm open to the right fit.">
	<div class="contact__layout reveal">
		<div class="contact__info">
			<p class="contact__lead">
				I'm interested in teams that care about <strong>architecture</strong>, <strong>design systems</strong>, and <strong>production-quality frontend</strong>. If you're hiring for a senior or lead frontend role—or building something that needs scalable UI—let's talk.
			</p>
			<ul class="contact__links" aria-label="Direct links">
				<li><a href={`mailto:${profile.email}`}>Email</a></li>
				<li><a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
				<li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
			</ul>
		</div>
		<form class="contact__form" onsubmit={handleSubmit} aria-label="Contact form" novalidate>
			<div class="contact__field">
				<label for="contact-name">Name</label>
				<input
					id="contact-name"
					type="text"
					bind:value={name}
					required
					placeholder="Your name"
					autocomplete="name"
					aria-invalid="false"
				/>
			</div>
			<div class="contact__field">
				<label for="contact-email">Email</label>
				<input
					id="contact-email"
					type="email"
					bind:value={email}
					required
					placeholder="you@example.com"
					autocomplete="email"
					aria-invalid="false"
				/>
			</div>
			<div class="contact__field">
				<label for="contact-message">Message</label>
				<textarea
					id="contact-message"
					rows="4"
					bind:value={message}
					required
					placeholder="What would you like to discuss?"
					aria-invalid="false"
				></textarea>
			</div>
			{#if formState === 'sent'}
				<p class="contact__feedback contact__feedback--success" role="status">Thanks — I'll get back to you shortly.</p>
			{/if}
			<Button type="submit" variant="primary" disabled={formState === 'sending'} class="contact__submit">
				{formState === 'sending' ? 'Sending…' : 'Send message'}
			</Button>
		</form>
	</div>
</Section>

<style>
	.contact__layout {
		display: grid;
		gap: var(--space-12);
	}
	@media (min-width: 768px) {
		.contact__layout {
			grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
			align-items: flex-start;
		}
	}
	.contact__lead {
		margin: 0 0 var(--space-6);
		font-size: var(--text-base);
		line-height: var(--leading-relaxed);
		color: var(--color-text-muted);
		max-width: 34rem;
	}
	.contact__lead strong {
		color: var(--color-text);
		font-weight: 600;
	}
	.contact__links {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
	}
	.contact__links a {
		font-size: var(--text-sm);
		color: var(--color-link);
		padding: 0.4rem 1rem;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border);
		background: var(--color-bg-elevated);
		transition:
			background-color var(--duration-fast) var(--ease-out),
			border-color var(--duration-fast) var(--ease-out),
			color var(--duration-fast) var(--ease-out);
	}
	.contact__links a:hover {
		background: var(--color-accent-muted);
		border-color: var(--color-accent);
		color: var(--color-text);
	}
	.contact__form {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}
	.contact__field label {
		display: block;
		margin-bottom: var(--space-2);
		font-size: var(--text-xs);
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--color-text-subtle);
	}
	.contact__field input,
	.contact__field textarea {
		width: 100%;
		padding: 0.75rem 1rem;
		border-radius: 0.6rem;
		border: 1px solid var(--color-border);
		background: var(--color-bg-elevated);
		color: var(--color-text);
		font-family: var(--font-sans);
		font-size: var(--text-base);
		transition: border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);
	}
	.contact__field input::placeholder,
	.contact__field textarea::placeholder {
		color: var(--color-text-subtle);
	}
	.contact__field input:focus,
	.contact__field textarea:focus {
		outline: none;
		border-color: var(--color-accent);
		box-shadow: 0 0 0 3px var(--color-accent-muted);
	}
	.contact__field textarea {
		resize: vertical;
		min-height: 6rem;
	}
	.contact__feedback {
		margin: 0;
		font-size: var(--text-sm);
	}
	.contact__feedback--success {
		color: var(--color-success);
	}
	.contact__submit {
		align-self: flex-start;
		margin-top: var(--space-2);
	}
</style>
