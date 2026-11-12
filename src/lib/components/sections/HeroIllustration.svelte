<div class="illustration" aria-label="AI Agent Orchestration workflow illustration">
	<div class="illustration__backdrop" aria-hidden="true"></div>
	<div class="window">
		<header class="window__header">
			<div class="window__controls" aria-hidden="true"><i></i><i></i><i></i></div>
			<span>AI Agent Orchestration</span>
		</header>
		<div class="workflow">
			<div class="workflow__main"><span class="workflow__sparkle">✦</span><strong>Multi-Agent</strong><strong>System</strong></div>
			<svg class="workflow__connections" viewBox="0 0 260 190" fill="none" aria-hidden="true">
				<path d="M97 95H126C143 95 137 34 158 34H171" />
				<path d="M97 95H171" />
				<path d="M97 95H126C143 95 137 156 158 156H171" />
			</svg>
			<div class="workflow__agents">
				<div class="agent"><span class="agent__icon" aria-hidden="true">♧</span><strong>Clinical Agent</strong></div>
				<div class="agent"><span class="agent__icon" aria-hidden="true">▤</span><strong>Records Agent</strong></div>
				<div class="agent"><span class="agent__icon" aria-hidden="true">☷</span><strong>Response Agent</strong></div>
			</div>
		</div>
	</div>
</div>

<style>
	.illustration { position: relative; width: min(100%, 35rem); min-height: 24rem; display: grid; place-items: center; }
	.illustration__backdrop { position: absolute; width: 82%; height: 78%; transform: translate(1.5rem, 1.2rem) rotate(7deg); border-radius: 1.7rem; background: #e7f1ff; }
	.window { position: relative; z-index: 1; width: 92%; overflow: hidden; border: 1px solid #e2eaf4; border-radius: 1rem; background: rgba(255,255,255,0.96); box-shadow: 0 18px 40px rgba(37, 99, 235, 0.12); transform: rotate(-1deg); }
	.window__header { display: flex; align-items: center; gap: 1rem; height: 3.2rem; padding: 0 1.25rem; border-bottom: 1px solid #edf2f7; color: #5c6d85; font-size: 0.84rem; }
	.window__controls { display: flex; gap: 0.45rem; }.window__controls i { width: 0.72rem; height: 0.72rem; border-radius: 50%; background: #ff6b6b; }.window__controls i:nth-child(2) { background: #ffca4f; }.window__controls i:nth-child(3) { background: #22c76b; }
	.workflow { position: relative; display: grid; grid-template-columns: 7.5rem 1fr; align-items: center; min-height: 18rem; padding: 2rem 1.25rem; }
	.workflow__main { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 7.4rem; height: 7.4rem; border: 1.5px solid #6ba8ff; border-radius: 1rem; background: #fff; color: #13213a; box-shadow: 0 8px 17px rgba(37, 99, 235, 0.08); text-align: center; }
	.workflow__main strong { font-size: 0.78rem; line-height: 1.28; }.workflow__sparkle { margin-bottom: 0.55rem; color: #1670ee; font-size: 1.55rem; line-height: 1; }
	.workflow__connections { position: absolute; z-index: 1; left: 5.25rem; top: 50%; width: 16.25rem; height: 11.9rem; transform: translateY(-50%); overflow: visible; }.workflow__connections path { stroke: #83b7ff; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
	.workflow__agents { position: relative; z-index: 2; display: flex; flex-direction: column; gap: 1rem; margin-left: 3.5rem; }.agent { display: flex; align-items: center; gap: 0.8rem; min-height: 3.45rem; padding: 0.75rem 1rem; border: 1px solid #edf2fa; border-radius: 0.85rem; background: #fff; box-shadow: 0 8px 18px rgba(15, 58, 125, 0.08); }.agent__icon { color: #1670ee; font-size: 1.45rem; line-height: 1; }.agent strong { color: #151d2b; font-size: 0.86rem; font-weight: 600; }
	@media (max-width: 900px) { .illustration { min-height: 21rem; }.workflow { min-height: 16rem; transform: scale(0.92); transform-origin: center; } }
	@media (max-width: 640px) { .illustration { min-height: 18rem; width: 100%; }.window { width: 100%; }.window__header { height: 2.7rem; padding-inline: 0.9rem; font-size: 0.75rem; }.workflow { grid-template-columns: 6rem 1fr; min-height: 14.5rem; padding: 1.3rem 0.75rem; }.workflow__main { width: 5.7rem; height: 5.7rem; }.workflow__main strong { font-size: 0.62rem; }.workflow__sparkle { margin-bottom: 0.35rem; font-size: 1.2rem; }.workflow__agents { gap: 0.6rem; margin-left: 2.35rem; }.agent { min-height: 2.6rem; padding: 0.5rem 0.65rem; }.agent__icon { font-size: 1.1rem; }.agent strong { font-size: 0.68rem; }.workflow__connections { left: 4.1rem; width: 12.5rem; height: 9.8rem; } }
	@media (prefers-reduced-motion: reduce) { .window { transform: none; } .illustration__backdrop { transform: translate(1.5rem, 1.2rem); } }
</style>
