<script lang="ts">
	import type { Project } from '$lib/types';
	import tendaLogo from '$lib/assets/tenda.webp';
	import bricHealthLogo from '$lib/assets/brichealth.webp';
	import sarfatyLogo from '$lib/assets/sarfaty.svg';
	import consigazCard from '$lib/assets/consigaz-card.png';
	import consigazLogo from '$lib/assets/logo-consigaz.png';
	import goldnCard from '$lib/assets/24kgoldn-card.png';
	import goldnLogo from '$lib/assets/24kgoldn.png';
	import filtrCard from '$lib/assets/filtrgame-card.png';
	import filtrLogo from '$lib/assets/filtrgame.svg';
	import gustavoCard from '$lib/assets/gustavo-lima-card.png';
	import guiapgoCard from '$lib/assets/guiapgo-card.png';
	import guiapgoIcon from '$lib/assets/guiapgo-icon.png';

	interface Props { project: Project }
	let { project }: Props = $props();
</script>

<div class="preview preview--{project.id}" aria-label={`${project.title} illustrative preview`}>
	{#if project.id === 'multi-agent-healthcare-platform'}
		<div class="agents-preview">
			<div class="agent-main"><span class="preview-icon">✦</span><strong>Multi-Agent</strong><strong>System</strong></div>
			<div class="agent-connector agent-connector--main"></div>
			<div class="agent-list">
				<div class="agent-node"><span class="preview-icon">♧</span><strong>Clinical Agent</strong></div>
				<div class="agent-node"><span class="preview-icon">▤</span><strong>Records Agent</strong></div>
				<div class="agent-node"><span class="preview-icon">☷</span><strong>Response Agent</strong></div>
			</div>
		</div>
	{:else if project.id === 'ai-travel-planner'}
		<div class="guiapgo-preview">
			<div class="guiapgo-preview__frame">
				<img class="guiapgo-preview__art" src={guiapgoCard} alt="Mapsterkit travel planning website preview" />
				<div class="guiapgo-preview__brand">
					<span class="guiapgo-preview__icon-wrap"><img src={guiapgoIcon} alt="" /></span>
					<span>Mapsterkit</span>
				</div>
			</div>
		</div>
	{:else if project.id === 'tenda-design-system'}
		<div class="tenda-preview">
			<img src={tendaLogo} alt="Tenda" />
			<div class="tenda-panel">
				<div class="tenda-type">Aa</div>
				<div class="tenda-swatches"><i></i><i></i><i></i><i></i></div>
				<div class="tenda-buttons"><b></b><b></b><b></b></div>
			</div>
		</div>
	{:else if project.id === 'sarfaty-authorization-platform'}
		<div class="sarfaty-preview">
			<div class="sarfaty-preview__top"><img src={sarfatyLogo} alt="Grupo Sarfaty" /><span>Financial services · Authorization platform</span></div>
			<div class="sarfaty-preview__panel"><aside><i></i><i></i><i></i></aside><div><strong>Access requests</strong><small>Review and authorize operations</small><div class="sarfaty-preview__rows"><i></i><i></i><i></i></div></div></div>
		</div>
	{:else if project.id === 'consigaz'}
		<div class="consigaz-preview">
			<div class="consigaz-preview__frame">
				<img class="consigaz-preview__art" src={consigazCard} alt="Consigaz institutional website preview" />
				<div class="consigaz-preview__logo-wrap">
					<img class="consigaz-preview__logo" src={consigazLogo} alt="Consigaz" />
				</div>
			</div>
		</div>
	{:else if project.id === '24kgoldn'}
		<div class="goldn-preview">
			<div class="goldn-preview__frame">
				<img class="goldn-preview__art" src={goldnCard} alt="24kGoldn promotional website preview" />
				<div class="goldn-preview__logo-wrap">
					<img class="goldn-preview__logo" src={goldnLogo} alt="24kGoldn" />
				</div>
			</div>
		</div>
	{:else if project.id === 'filtr-game'}
		<div class="filtr-preview">
			<div class="filtr-preview__frame">
				<img class="filtr-preview__art" src={filtrCard} alt="Filtr Game campaign website preview" />
				<div class="filtr-preview__logo-wrap">
					<img class="filtr-preview__logo" src={filtrLogo} alt="Filtr Game" />
				</div>
			</div>
		</div>
	{:else if project.id === 'gustavo-lima'}
		<div class="gustavo-preview">
			<div class="gustavo-preview__frame">
				<img class="gustavo-preview__art" src={gustavoCard} alt="Gustavo Lima fan experience website preview" />
				<div class="gustavo-preview__brand" aria-label="Gustavo Lima Buteco">
					<strong>GUSTAVO LIMA</strong>
					<span>BUTECO</span>
				</div>
			</div>
		</div>
	{:else}
		<div class="bric-preview">
			<img src={bricHealthLogo} alt="Bric Health" />
			<div class="bric-dashboard">
				<aside><i></i><i></i><i></i><i></i><i></i></aside>
				<div class="bric-content"><div class="bric-bars"><i></i><i></i></div><div class="bric-calendar">{#each Array(9) as _}<i></i>{/each}</div><div class="bric-rows"><i></i><i></i><i></i></div></div>
			</div>
		</div>
	{/if}
</div>

<style>
	.preview { position: relative; height: 100%; overflow: hidden; min-width: 0; min-height: 100%; border-radius: 8px; }
	.preview-icon { color: var(--color-accent); font-size: 1.15rem; line-height: 1; }
	.agents-preview { position: relative; display: grid; grid-template-columns: 7.4rem 2.2rem 1fr; align-items: center; gap: 0.25rem; width: 100%; height: 100%; min-height: 12.5rem; padding: 1rem; background: #f4fcf8; }
	.agent-main, .agent-node { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: flex-start; gap: 0.18rem; border: 1px solid var(--color-accent-border); border-radius: 10px; background: #fff; box-shadow: 0 7px 15px rgba(5, 150, 105, 0.08); }
	.agent-main { align-items: center; justify-content: center; min-height: 5.6rem; text-align: center; }
	.agent-main strong, .agent-node strong { color: #13213a; font-size: 0.7rem; line-height: 1.2; }
	.agent-list { display: flex; flex-direction: column; gap: 0.75rem; }
	.agent-node { flex-direction: row; align-items: center; gap: 0.55rem; padding: 0.7rem 0.65rem; }
	.agent-connector { height: 1px; background: var(--color-accent); }
	.agent-connector--main { position: relative; }
	.agent-connector--main::after { content: ''; position: absolute; right: 0; top: -2.9rem; width: 1px; height: 5.8rem; background: var(--color-accent); }
	.travel-preview { display: grid; place-items: center; min-height: 12.5rem; padding: 0.9rem; background: #f4fcf8; }
	.travel-card { position: relative; width: 100%; max-width: 18rem; padding: 0.8rem; border: 1px solid var(--color-accent-border); border-radius: 10px; background: #fff; box-shadow: 0 8px 18px rgba(5, 150, 105, 0.09); }
	.travel-card__top { display: flex; align-items: center; gap: 0.45rem; color: #4b6382; font-size: 0.72rem; }
	.travel-card__top span { color: var(--color-accent); }
	.travel-card strong { display: block; margin-top: 0.35rem; color: #13213a; font-size: 0.9rem; }
	.travel-hero { position: absolute; top: 0; right: 0; width: 42%; height: 3.45rem; border-radius: 0 10px 0 12px; background: linear-gradient(140deg, #c9f0dd 0 35%, #e8d5aa 36% 52%, #92c7b1 53%); opacity: 0.72; }
	.travel-days { display: flex; flex-direction: column; gap: 0.35rem; margin-top: 0.85rem; }
	.travel-days > div { display: grid; grid-template-columns: 0.65rem 2.5rem 1fr; gap: 0.35rem; align-items: center; min-height: 1.25rem; }
	.timeline-dot { width: 0.45rem; height: 0.45rem; border: 2px solid var(--color-accent); border-radius: 50%; }
	.travel-days b, .travel-days small { color: #506783; font-size: 0.57rem; }
	.travel-days b { color: #17243b; }
	.tenda-preview { display: flex; flex-direction: column; justify-content: space-between; min-height: 12.5rem; padding: 1rem; background: linear-gradient(135deg, #162949, #0d1a31); }
	.tenda-preview > img { width: 7.5rem; height: 2.15rem; object-fit: contain; object-position: left center; }
	.tenda-panel { padding: 0.7rem; border: 1px solid rgba(255,255,255,0.1); border-radius: 9px; background: rgba(255,255,255,0.08); box-shadow: 0 10px 18px rgba(0,0,0,0.12); }
	.tenda-type { color: #fff; font-size: 2rem; font-weight: 600; line-height: 1; }
	.tenda-swatches, .tenda-buttons { display: flex; gap: 0.35rem; margin-top: 0.7rem; }
	.tenda-swatches i { width: 1rem; height: 1rem; border-radius: 3px; background: #e7eef8; }.tenda-swatches i:nth-child(2) { background: #77b2ec; }.tenda-swatches i:nth-child(3) { background: #2d79d5; }.tenda-swatches i:nth-child(4) { background: #1b3559; border: 1px solid #476383; }
	.tenda-buttons b { width: 4rem; height: 0.7rem; border-radius: 4px; background: #2588ff; }.tenda-buttons b:nth-child(2) { background: #71839e; }.tenda-buttons b:nth-child(3) { background: #233d62; }
	.bric-preview { display: flex; flex-direction: column; gap: 0.85rem; min-height: 12.5rem; padding: 1rem; background: #effcfb; }
	.bric-preview > img { width: 7.8rem; height: 1.8rem; object-fit: contain; object-position: left center; }
	.bric-dashboard { display: grid; grid-template-columns: 2.3rem 1fr; min-height: 7.5rem; overflow: hidden; border: 1px solid #d5f1ef; border-radius: 9px; background: #fff; box-shadow: 0 8px 16px rgba(16, 148, 143, 0.08); }
	.bric-dashboard aside { display: flex; flex-direction: column; gap: 0.65rem; padding: 0.7rem 0.55rem; background: #fbffff; border-right: 1px solid #e7f5f4; }.bric-dashboard aside i { width: 1rem; height: 0.35rem; border-radius: 4px; background: #d3eeee; }.bric-dashboard aside i:first-child { background: #42c6bf; }
	.bric-content { padding: 0.7rem; }.bric-bars { display: flex; gap: 0.5rem; }.bric-bars i { width: 35%; height: 0.45rem; border-radius: 3px; background: #d6eeee; }.bric-bars i:first-child { width: 48%; background: #45c5be; }.bric-calendar { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.25rem; margin-top: 0.7rem; padding: 0.45rem; border-radius: 5px; background: #f2fbfb; }.bric-calendar i { height: 0.42rem; border-radius: 2px; background: #c9e8e6; }.bric-calendar i:nth-child(3n) { background: #6bd4cd; }.bric-rows { display: flex; flex-direction: column; gap: 0.3rem; margin-top: 0.55rem; }.bric-rows i { width: 75%; height: 0.32rem; border-radius: 3px; background: #d8efee; }.bric-rows i:nth-child(2) { width: 58%; }
	.sarfaty-preview { display: flex; flex-direction: column; gap: 0.8rem; min-height: 12.5rem; padding: 1rem; background: #f4f8f5; }
	.sarfaty-preview__top { display: flex; flex-direction: column; gap: 0.35rem; color: #476254; font-size: 0.58rem; }.sarfaty-preview__top img { width: 7.8rem; height: 2.25rem; object-fit: contain; object-position: left center; }.sarfaty-preview__top span { color: #476254; }
	.sarfaty-preview__panel { display: grid; grid-template-columns: 2rem 1fr; min-height: 7.2rem; overflow: hidden; border: 1px solid #d9e7dc; border-radius: 8px; background: #fff; box-shadow: 0 8px 16px rgba(19, 58, 36, 0.08); }.sarfaty-preview__panel aside { display: flex; flex-direction: column; gap: 0.55rem; padding: 0.65rem 0.45rem; background: #133a24; }.sarfaty-preview__panel aside i { width: 1rem; height: 0.3rem; border-radius: 3px; background: #86a391; }.sarfaty-preview__panel aside i:first-child { background: #d5af00; }.sarfaty-preview__panel > div { padding: 0.75rem; }.sarfaty-preview__panel strong, .sarfaty-preview__panel small { display: block; }.sarfaty-preview__panel strong { color: #133a24; font-size: 0.68rem; }.sarfaty-preview__panel small { margin-top: 0.18rem; color: #6a806f; font-size: 0.52rem; }.sarfaty-preview__rows { display: flex; flex-direction: column; gap: 0.42rem; margin-top: 0.75rem; }.sarfaty-preview__rows i { display: block; width: 90%; height: 0.45rem; border-radius: 4px; background: #e6efe8; }.sarfaty-preview__rows i:nth-child(2) { width: 72%; }.sarfaty-preview__rows i:nth-child(3) { width: 82%; }
	.consigaz-preview { display: grid; min-height: 12.5rem; padding: 0.65rem; background: #d8edfc; }
	.consigaz-preview__frame { position: relative; min-width: 0; min-height: 0; overflow: hidden; border: 1px solid rgba(31, 70, 145, 0.12); border-radius: 8px; background: #fff; box-shadow: 0 7px 16px rgba(31, 70, 145, 0.1); }
	.consigaz-preview__art { display: block; width: 100%; height: 100%; min-height: 0; object-fit: contain; object-position: center; }
	.consigaz-preview__logo-wrap { position: absolute; top: 0.7rem; left: 0.7rem; display: grid; place-items: center; width: 6.4rem; height: 2.1rem; padding: 0.35rem 0.55rem; border-radius: 0.45rem; background: rgba(255, 255, 255, 0.96); box-shadow: 0 3px 9px rgba(31, 70, 145, 0.12); }
	.consigaz-preview__logo { display: block; width: 100%; height: 100%; object-fit: contain; }
	.goldn-preview { display: grid; min-height: 12.5rem; padding: 0.65rem; background: #1e1112; }
	.goldn-preview__frame { position: relative; min-width: 0; min-height: 0; overflow: hidden; border: 1px solid rgba(231, 175, 100, 0.24); border-radius: 8px; background: #261617; box-shadow: 0 7px 16px rgba(22, 9, 10, 0.28); }
	.goldn-preview__art { display: block; width: 100%; height: 100%; min-height: 0; object-fit: contain; object-position: center; }
	.goldn-preview__logo-wrap { position: absolute; top: 0.7rem; left: 0.7rem; display: grid; place-items: center; width: 7.3rem; height: 2.15rem; padding: 0.35rem 0.55rem; border: 1px solid rgba(242, 190, 107, 0.55); border-radius: 0.45rem; background: rgba(24, 11, 12, 0.86); box-shadow: 0 3px 9px rgba(0, 0, 0, 0.24); }
	.goldn-preview__logo { display: block; width: 100%; height: 100%; object-fit: contain; }
	.guiapgo-preview { display: grid; min-height: 12.5rem; padding: 0.65rem; background: #dff6f1; }
	.guiapgo-preview__frame { position: relative; min-width: 0; min-height: 0; overflow: hidden; border: 1px solid rgba(16, 112, 125, 0.2); border-radius: 8px; background: #fff; box-shadow: 0 7px 16px rgba(16, 112, 125, 0.14); }
	.guiapgo-preview__art { display: block; width: 100%; height: 100%; min-height: 0; object-fit: contain; object-position: center; }
	.guiapgo-preview__brand { position: absolute; top: 0.7rem; left: 0.7rem; display: flex; align-items: center; gap: 0.38rem; padding: 0.28rem 0.58rem 0.28rem 0.34rem; border: 1px solid rgba(133, 232, 208, 0.75); border-radius: 0.45rem; background: rgba(7, 61, 76, 0.9); color: #fff; font-size: 0.75rem; font-weight: 800; letter-spacing: -0.03em; box-shadow: 0 3px 9px rgba(4, 44, 56, 0.18); }
	.guiapgo-preview__icon-wrap { display: grid; place-items: center; width: 1.15rem; height: 1.5rem; overflow: visible; }
	.guiapgo-preview__icon-wrap img { display: block; width: 1.15rem; height: 1.5rem; object-fit: contain; object-position: center; mix-blend-mode: screen; }
	.filtr-preview { display: grid; min-height: 12.5rem; padding: 0.65rem; background: #d8d9db; }
	.filtr-preview__frame { position: relative; min-width: 0; min-height: 0; overflow: hidden; border: 1px solid rgba(24, 24, 24, 0.24); border-radius: 8px; background: #191919; box-shadow: 0 7px 16px rgba(24, 24, 24, 0.2); }
	.filtr-preview__art { display: block; width: 100%; height: 100%; min-height: 0; object-fit: contain; object-position: center; }
	.filtr-preview__logo-wrap { position: absolute; top: 0.7rem; left: 0.7rem; display: grid; place-items: center; width: 6.3rem; height: 2.2rem; padding: 0.35rem 0.55rem; border: 1px solid rgba(255, 255, 255, 0.26); border-radius: 0.45rem; background: rgba(25, 25, 25, 0.9); box-shadow: 0 3px 9px rgba(0, 0, 0, 0.24); }
	.filtr-preview__logo { display: block; width: 100%; height: 100%; object-fit: contain; }
	.gustavo-preview { display: grid; min-height: 12.5rem; padding: 0.65rem; background: #151020; }
	.gustavo-preview__frame { position: relative; min-width: 0; min-height: 0; overflow: hidden; border: 1px solid rgba(255, 160, 21, 0.3); border-radius: 8px; background: #10091b; box-shadow: 0 7px 16px rgba(13, 5, 24, 0.28); }
	.gustavo-preview__art { display: block; width: 100%; height: 100%; min-height: 0; object-fit: contain; object-position: center; }
	.gustavo-preview__brand { position: absolute; top: 0.7rem; left: 0.7rem; display: flex; flex-direction: column; align-items: flex-start; padding: 0.42rem 0.62rem; border: 1px solid rgba(255, 176, 42, 0.6); border-radius: 0.45rem; background: rgba(13, 7, 26, 0.88); color: #fff; box-shadow: 0 3px 9px rgba(0, 0, 0, 0.24); }
	.gustavo-preview__brand strong { color: #fff; font-size: 0.6rem; font-weight: 800; letter-spacing: 0.07em; line-height: 1; }
	.gustavo-preview__brand span { margin-top: 0.18rem; color: #ffad1a; font-size: 0.52rem; font-weight: 800; letter-spacing: 0.18em; line-height: 1; }
	@media (max-width: 640px) {
		.preview { height: auto; min-height: 0; aspect-ratio: 1.45; }
		.preview > div { height: 100%; min-height: 0 !important; }
	}
	@media (max-width: 520px) { .agents-preview { min-height: 0; } }
</style>
