<div class="illustration" aria-label="Illustrative interface for AI systems, scalable systems, and production-ready software">
	<div class="illustration__backdrop" aria-hidden="true"></div>
	<div class="code-window">
		<div class="code-window__controls" aria-hidden="true"><i></i><i></i><i></i></div>
		<div class="code-window__body">
			<div class="code-window__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg></div>
			<div class="code-lines" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
		</div>
	</div>
	<div class="floating-label floating-label--agents"><span aria-hidden="true">✦</span><strong>AI Agents</strong></div>
	<div class="floating-label floating-label--systems"><span aria-hidden="true"><svg viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg></span><strong>Scalable Systems</strong></div>
	<div class="floating-label floating-label--production"><span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m12 4 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4M4 16l8 4 8-4"/></svg></span><strong>Production Ready</strong></div>
</div>

<style>
	.illustration { position: relative; width: min(100%, 37rem); min-height: 24rem; display: grid; place-items: center; }
	.illustration__backdrop { position: absolute; width: 78%; height: 82%; transform: translate(1.1rem, 0.8rem) rotate(-12deg); border-radius: 2rem; background: var(--color-accent-soft); opacity: 0.62; }
	.code-window { position: relative; z-index: 1; width: 78%; min-height: 15.5rem; overflow: hidden; transform: rotate(-3deg); border: 1px solid #e1e8e4; border-radius: 1rem; background: rgba(255,255,255,0.98); box-shadow: 0 20px 42px rgba(5, 150, 105, 0.13); }
	.code-window__controls { display: flex; gap: 0.45rem; height: 3rem; align-items: center; padding-inline: 1rem; border-bottom: 1px solid #eef2ef; }.code-window__controls i { width: 0.7rem; height: 0.7rem; border-radius: 50%; background: #ff6b6b; }.code-window__controls i:nth-child(2) { background: #ffca4f; }.code-window__controls i:nth-child(3) { background: #22c76b; }
	.code-window__body { display: grid; grid-template-columns: 4.8rem 1fr; align-items: center; gap: 1.2rem; min-height: 12.5rem; padding: 2rem; }
	.code-window__icon { display: grid; place-items: center; width: 4.4rem; height: 4.4rem; border-radius: 0.9rem; background: var(--color-accent-muted); color: var(--color-accent); }.code-window__icon svg { width: 2rem; height: 2rem; fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.7; }
	.code-lines { display: flex; flex-direction: column; gap: 0.75rem; }.code-lines i { display: block; width: 85%; height: 0.55rem; border-radius: 999px; background: var(--color-accent-soft); }.code-lines i:nth-child(2) { width: 95%; }.code-lines i:nth-child(3) { width: 76%; }.code-lines i:nth-child(4) { width: 43%; }
	.floating-label { position: absolute; z-index: 2; display: flex; align-items: center; gap: 0.75rem; min-height: 3.65rem; padding: 0.75rem 1.35rem; border: 1px solid #e2e9e4; border-radius: 999px; background: #fff; box-shadow: 0 9px 22px rgba(15, 58, 38, 0.1); color: #151d2b; }.floating-label span { display: grid; place-items: center; width: 1.7rem; height: 1.7rem; color: var(--color-accent); font-size: 1.45rem; line-height: 1; }.floating-label span svg { width: 1.55rem; height: 1.55rem; fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.7; }.floating-label strong { font-size: 0.92rem; font-weight: 600; white-space: nowrap; }
	.floating-label--agents { top: 2.6rem; right: 0; }.floating-label--systems { bottom: 3.2rem; left: 0; }.floating-label--production { right: -1.1rem; bottom: 1.3rem; }
	@media (max-width: 900px) { .illustration { min-height: 21rem; }.code-window { width: 82%; }.floating-label { min-height: 3.25rem; padding-inline: 1rem; }.floating-label--agents { right: -0.4rem; }.floating-label--production { right: -0.5rem; } }
	@media (max-width: 640px) { .illustration { min-height: 18rem; width: 100%; }.code-window { width: 78%; min-height: 12rem; }.code-window__controls { height: 2.4rem; padding-inline: 0.75rem; }.code-window__controls i { width: 0.55rem; height: 0.55rem; }.code-window__body { grid-template-columns: 3.5rem 1fr; gap: 0.8rem; min-height: 9.6rem; padding: 1.1rem; }.code-window__icon { width: 3.2rem; height: 3.2rem; }.code-window__icon svg { width: 1.45rem; height: 1.45rem; }.code-lines { gap: 0.5rem; }.code-lines i { height: 0.38rem; }.floating-label { min-height: 2.7rem; gap: 0.45rem; padding: 0.5rem 0.75rem; }.floating-label span { width: 1.25rem; height: 1.25rem; font-size: 1rem; }.floating-label span svg { width: 1.1rem; height: 1.1rem; }.floating-label strong { font-size: 0.7rem; }.floating-label--agents { top: 1.1rem; right: -0.1rem; }.floating-label--systems { bottom: 2.2rem; left: -0.1rem; }.floating-label--production { right: -0.1rem; bottom: 0.4rem; } }
	@media (prefers-reduced-motion: reduce) { .code-window { transform: none; }.illustration__backdrop { transform: translate(1.1rem, 0.8rem); } }
</style>
