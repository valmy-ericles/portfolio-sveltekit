// @ts-nocheck

let initialized = false;

// Tipamos como `any` para evitar depender dos types de GSAP no build/cheque.
// Em runtime, os imports funcionam normalmente no browser.
type AnyGsap = any;

export async function initScrollReveal(root?: Document | HTMLElement) {
	if (typeof window === 'undefined') return;

	const targetRoot = root ?? document;

	// Lazy-load GSAP only in the browser
	const { gsap }: { gsap: AnyGsap } = await import('gsap');
	const { ScrollTrigger }: { ScrollTrigger: AnyGsap } = await import('gsap/ScrollTrigger');
	if (!initialized) {
		gsap.registerPlugin(ScrollTrigger);
		initialized = true;
	}

	// Simple fade-up for standalone elements
	const singles = Array.from(
		targetRoot.querySelectorAll<HTMLElement>('.reveal')
	);

	singles.forEach((el) => {
		gsap.fromTo(
			el,
			{ opacity: 0, y: 60 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: el,
					start: 'top 85%',
					toggleActions: 'play none none none'
				}
			}
		);
	});

	// Stagger groups: container with data-reveal-stagger,
	// children with class .reveal-item
	const groups = Array.from(
		targetRoot.querySelectorAll<HTMLElement>('[data-reveal-stagger]')
	);

	groups.forEach((container) => {
		const items = Array.from(
			container.querySelectorAll<HTMLElement>('.reveal-item')
		);
		if (!items.length) return;

		gsap.fromTo(
			items,
			{ opacity: 0, y: 60 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
				stagger: 0.18,
				scrollTrigger: {
					trigger: container,
					start: 'top 85%',
					toggleActions: 'play none none none'
				}
			}
		);
	});
}

