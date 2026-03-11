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

		const isSkills = container.closest('#skills') != null;
		const stagger = isSkills ? 0.1 : 0.18;
		const duration = isSkills ? 0.6 : 0.8;
		const yFrom = isSkills ? 40 : 60;

		gsap.fromTo(
			items,
			{ opacity: 0, y: yFrom },
			{
				opacity: 1,
				y: 0,
				duration,
				ease: 'power3.out',
				stagger,
				scrollTrigger: {
					trigger: container,
					start: 'top 85%',
					toggleActions: 'play none none none'
				}
			}
		);
	});

	// Skills section: header fade + slide
	const skillsSection = targetRoot.querySelector<HTMLElement>('#skills');
	if (skillsSection) {
		const header = skillsSection.querySelector<HTMLElement>('.section__header');
		if (header) {
			gsap.fromTo(
				header,
				{ opacity: 0, y: 32 },
				{
					opacity: 1,
					y: 0,
					duration: 0.65,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: skillsSection,
						start: 'top 85%',
						toggleActions: 'play none none none'
					}
				}
			);
		}

		// Pills inside each card: subtle stagger after card is visible
		const cards = Array.from(
			skillsSection.querySelectorAll<HTMLElement>('.skills__card')
		);
		cards.forEach((card) => {
			const pills = Array.from(
				card.querySelectorAll<HTMLElement>('.skill-pill')
			);
			if (!pills.length) return;
			gsap.fromTo(
				pills,
				{ opacity: 0, y: 10 },
				{
					opacity: 1,
					y: 0,
					duration: 0.4,
					ease: 'power3.out',
					stagger: 0.06,
					delay: 0.15,
					scrollTrigger: {
						trigger: card,
						start: 'top 88%',
						toggleActions: 'play none none none'
					}
				}
			);
		});
	}
}

