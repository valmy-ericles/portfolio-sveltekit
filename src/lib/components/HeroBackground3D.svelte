<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let container: HTMLDivElement;
	let frameId = 0;
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let sphere: THREE.Group;
	let targetMouseX = 0;
	let targetMouseY = 0;
	let currentMouseX = 0;
	let currentMouseY = 0;

	const ROTATION_SPEED = 0.0008;
	const MOUSE_INFLUENCE = 0.0002;
	const MOUSE_LERP = 0.025;
	const WIREFRAME_COLOR = 0x38bdf8; // cool accent blue
	const GLOW_COLOR = 0x22d3ee; // subtle teal
	const PARTICLE_COUNT = 1000;

	onMount(() => {
		if (!container) return;

		const width = container.clientWidth;
		const height = container.clientHeight;

		scene = new THREE.Scene();

		camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
		camera.position.z = 4;

		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(width, height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setClearColor(0x000000, 0);
		container.appendChild(renderer.domElement);

		// Wireframe sphere (icosahedron for tech look)
		const wireGeometry = new THREE.IcosahedronGeometry(1.55, 1);
		const wireMaterial = new THREE.MeshBasicMaterial({
			color: WIREFRAME_COLOR,
			wireframe: true,
			transparent: true,
			opacity: 0.1
		});
		const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);

		// Inner glow
		const glowGeometry = new THREE.SphereGeometry(1.05, 32, 24);
		const glowMaterial = new THREE.MeshBasicMaterial({
			color: GLOW_COLOR,
			transparent: true,
			opacity: 0.025,
			depthWrite: false
		});
		const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);

		// Particle sphere
		const particleGeometry = new THREE.BufferGeometry();
		const positions = new Float32Array(PARTICLE_COUNT * 3);
		const radius = 1.22;
		for (let i = 0; i < PARTICLE_COUNT; i++) {
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(2 * Math.random() - 1);
			positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
			positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
			positions[i * 3 + 2] = radius * Math.cos(phi);
		}
		particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		particleGeometry.computeBoundingSphere();

		const particleMaterial = new THREE.PointsMaterial({
			color: WIREFRAME_COLOR,
			size: 0.02,
			transparent: true,
			opacity: 0.32,
			sizeAttenuation: true,
			depthWrite: false
		});
		const particles = new THREE.Points(particleGeometry, particleMaterial);

		sphere = new THREE.Group();
		sphere.add(wireMesh);
		sphere.add(glowMesh);
		sphere.add(particles);
		scene.add(sphere);

		// Center the globe in the hero background
		sphere.position.set(0, 0, 0);

		function onResize() {
			if (!container) return;
			const w = container.clientWidth;
			const h = container.clientHeight;
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setSize(w, h);
		}

		function onMouseMove(e: MouseEvent) {
			targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
			targetMouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
		}

		window.addEventListener('resize', onResize);
		window.addEventListener('mousemove', onMouseMove);

		function animate() {
			frameId = requestAnimationFrame(animate);
			sphere.rotation.y += ROTATION_SPEED;
			currentMouseX += (targetMouseX * MOUSE_INFLUENCE - currentMouseX) * MOUSE_LERP;
			currentMouseY += (targetMouseY * MOUSE_INFLUENCE - currentMouseY) * MOUSE_LERP;
			sphere.rotation.y += currentMouseX;
			sphere.rotation.x = Math.PI * 0.02 + currentMouseY;
			renderer.render(scene, camera);
		}
		animate();

		return () => {
			window.removeEventListener('resize', onResize);
			window.removeEventListener('mousemove', onMouseMove);
			cancelAnimationFrame(frameId);
			renderer.dispose();
			wireGeometry.dispose();
			wireMaterial.dispose();
			glowGeometry.dispose();
			glowMaterial.dispose();
			particleGeometry.dispose();
			particleMaterial.dispose();
			if (container?.contains(renderer.domElement)) {
				container.removeChild(renderer.domElement);
			}
		};
	});
</script>

<div class="hero-bg3d" bind:this={container} aria-hidden="true"></div>

<style>
	.hero-bg3d {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		overflow: hidden;
		pointer-events: none;
	}
	.hero-bg3d :global(canvas) {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
