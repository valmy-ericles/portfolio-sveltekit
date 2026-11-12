<script lang="ts">
	import type { Project } from '$lib/types';
	import tendaLogo from '$lib/assets/tenda.webp';
	import bricHealthLogo from '$lib/assets/brichealth.webp';
	import sarfatyLogo from '$lib/assets/sarfaty.svg';

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
		<div class="travel-preview">
			<div class="travel-card">
				<div class="travel-card__top"><span>✈</span><small>Trip plan</small></div>
				<strong>Lisbon · 5 days</strong>
				<div class="travel-hero" aria-hidden="true"></div>
				<div class="travel-days">
					{#each [['Day 1', 'Arrival and city tour'], ['Day 2', 'Historical landmarks'], ['Day 3', 'Sintra day trip']] as day}
						<div><span class="timeline-dot"></span><b>{day[0]}</b><small>{day[1]}</small></div>
					{/each}
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
	.preview { position: relative; overflow: hidden; min-width: 0; min-height: 100%; border-radius: 10px; }
	.preview-icon { color: #1677ff; font-size: 1.15rem; line-height: 1; }
	.agents-preview { position: relative; display: grid; grid-template-columns: 7.4rem 2.2rem 1fr; align-items: center; gap: 0.25rem; width: 100%; height: 100%; min-height: 12.5rem; padding: 1rem; background: #f4f9ff; }
	.agent-main, .agent-node { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: flex-start; gap: 0.18rem; border: 1px solid #a8cfff; border-radius: 10px; background: #fff; box-shadow: 0 7px 15px rgba(37, 99, 235, 0.08); }
	.agent-main { align-items: center; justify-content: center; min-height: 5.6rem; text-align: center; }
	.agent-main strong, .agent-node strong { color: #13213a; font-size: 0.7rem; line-height: 1.2; }
	.agent-list { display: flex; flex-direction: column; gap: 0.75rem; }
	.agent-node { flex-direction: row; align-items: center; gap: 0.55rem; padding: 0.7rem 0.65rem; }
	.agent-connector { height: 1px; background: #66a9ff; }
	.agent-connector--main { position: relative; }
	.agent-connector--main::after { content: ''; position: absolute; right: 0; top: -2.9rem; width: 1px; height: 5.8rem; background: #66a9ff; }
	.travel-preview { display: grid; place-items: center; min-height: 12.5rem; padding: 0.9rem; background: #f4f9ff; }
	.travel-card { position: relative; width: 100%; max-width: 18rem; padding: 0.8rem; border: 1px solid #dcecff; border-radius: 10px; background: #fff; box-shadow: 0 8px 18px rgba(37, 99, 235, 0.09); }
	.travel-card__top { display: flex; align-items: center; gap: 0.45rem; color: #4b6382; font-size: 0.72rem; }
	.travel-card__top span { color: #1677ff; }
	.travel-card strong { display: block; margin-top: 0.35rem; color: #13213a; font-size: 0.9rem; }
	.travel-hero { position: absolute; top: 0; right: 0; width: 42%; height: 3.45rem; border-radius: 0 10px 0 12px; background: linear-gradient(140deg, #bbdbff 0 35%, #f6c7a2 36% 52%, #8ab6dc 53%); opacity: 0.72; }
	.travel-days { display: flex; flex-direction: column; gap: 0.35rem; margin-top: 0.85rem; }
	.travel-days > div { display: grid; grid-template-columns: 0.65rem 2.5rem 1fr; gap: 0.35rem; align-items: center; min-height: 1.25rem; }
	.timeline-dot { width: 0.45rem; height: 0.45rem; border: 2px solid #1677ff; border-radius: 50%; }
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
	@media (max-width: 520px) { .agents-preview { min-height: 13rem; } }
</style>
