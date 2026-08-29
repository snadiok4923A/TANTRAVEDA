// NEBULA - Flowing Fiber Animation System
// WebGL particle system with scroll-driven transformations

let scene, camera, renderer, particles, particleSystem;
let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
let scrollProgress = 0;
let currentSection = 0;

const config = {
    particleCount: 800,
    fiberSegments: 80,
    colors: {
        purple: new THREE.Color(0xa78bfa),
        violet: new THREE.Color(0xc084fc),
        lavender: new THREE.Color(0xe9d5ff),
        blue: new THREE.Color(0x60a5fa)
    }
};

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

class FiberParticle {
    constructor(index) {
        this.index = index;
        this.positions = [];
        this.velocities = [];
        this.colors = [];
        this.phase = Math.random() * Math.PI * 2;
        this.speed = 0.5 + Math.random() * 0.5;
        this.amplitude = 0.5 + Math.random() * 1.5;
        this.frequency = 0.5 + Math.random() * 0.5;

        // Initialize fiber segments
        for (let i = 0; i < config.fiberSegments; i++) {
            const t = i / config.fiberSegments;
            this.positions.push(new THREE.Vector3());
            this.velocities.push(new THREE.Vector3());

            // Color interpolation
            const colorMix = Math.random();
            const color = colorMix < 0.6 ? config.colors.purple :
                         colorMix < 0.85 ? config.colors.violet :
                         config.colors.blue;
            this.colors.push(color.clone());
        }

        this.reset();
    }

    reset() {
        const spread = 8;
        const startX = -15 + (this.index / config.particleCount) * spread;
        const startY = (Math.random() - 0.5) * 10;
        const startZ = (Math.random() - 0.5) * 10;

        for (let i = 0; i < config.fiberSegments; i++) {
            const offset = i * 0.1;
            this.positions[i].set(startX - offset * 2, startY, startZ);
        }
    }

    update(time, section, mouseInfluence) {
        const dt = prefersReducedMotion ? 0.001 : 0.016;

        // Section-based behavior
        switch(section) {
            case 0: // Hero - flowing from left to right
                this.updateHero(time, dt, mouseInfluence);
                break;
            case 1: // Convergence - flowing to center
                this.updateConvergence(time, dt, mouseInfluence);
                break;
            case 2: // Distortion - horizontal stretch
                this.updateDistortion(time, dt, mouseInfluence);
                break;
            case 3: // Crossing - X pattern
                this.updateCrossing(time, dt, mouseInfluence);
                break;
            case 4: // Flow - diagonal wave
                this.updateFlow(time, dt, mouseInfluence);
                break;
            case 5: // Final - single strand
                this.updateFinal(time, dt, mouseInfluence);
                break;
        }
    }

    updateHero(time, dt, mouseInfluence) {
        for (let i = 0; i < config.fiberSegments; i++) {
            const pos = this.positions[i];
            const t = i / config.fiberSegments;

            // Flow forward
            pos.x += this.speed * dt * 8;

            // Organic sine wave motion
            const waveY = Math.sin(time * this.frequency + this.phase + t * 3) * this.amplitude;
            const waveZ = Math.cos(time * this.frequency * 0.7 + this.phase + t * 2) * this.amplitude * 0.5;

            pos.y += (waveY - pos.y) * 0.05;
            pos.z += (waveZ - pos.z) * 0.05;

            // Mouse distortion
            if (mouseInfluence.active) {
                const dx = pos.x - mouseInfluence.x;
                const dy = pos.y - mouseInfluence.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 5) {
                    const force = (5 - dist) / 5;
                    pos.x += dx * force * 0.1;
                    pos.y += dy * force * 0.1;
                }
            }

            // Reset when off screen
            if (pos.x > 20) {
                pos.x = -15;
                pos.y = (Math.random() - 0.5) * 10;
                pos.z = (Math.random() - 0.5) * 10;
            }
        }
    }

    updateConvergence(time, dt, mouseInfluence) {
        for (let i = 0; i < config.fiberSegments; i++) {
            const pos = this.positions[i];
            const t = i / config.fiberSegments;

            // Pull towards center
            const targetX = Math.sin(time * 0.5 + this.phase) * 2 * (1 - t);
            const targetY = Math.cos(time * 0.5 + this.phase) * 2 * (1 - t);

            pos.x += (targetX - pos.x) * 0.02;
            pos.y += (targetY - pos.y) * 0.02;
            pos.z += (Math.sin(time + t * 5) * 2 - pos.z) * 0.03;
        }
    }

    updateDistortion(time, dt, mouseInfluence) {
        for (let i = 0; i < config.fiberSegments; i++) {
            const pos = this.positions[i];
            const t = i / config.fiberSegments;

            // Horizontal stretch
            const stretch = 15;
            const targetX = (Math.random() - 0.5) * stretch;
            const targetY = Math.sin(time * 0.3 + this.phase + i * 0.1) * 0.3;

            pos.x += (targetX - pos.x) * 0.01;
            pos.y += (targetY - pos.y) * 0.05;

            // Strong mouse interaction
            if (mouseInfluence.active) {
                const dx = pos.x - mouseInfluence.x;
                const dy = pos.y - mouseInfluence.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 8) {
                    const force = (8 - dist) / 8;
                    pos.x += dx * force * 0.3;
                    pos.y += dy * force * 0.3;
                }
            }
        }
    }

    updateCrossing(time, dt, mouseInfluence) {
        for (let i = 0; i < config.fiberSegments; i++) {
            const pos = this.positions[i];
            const t = i / config.fiberSegments;

            // X pattern
            const side = this.index % 2;
            const progress = (time * 0.2 + this.phase) % (Math.PI * 2);

            if (side === 0) {
                pos.x = -10 + t * 20;
                pos.y = -8 + t * 16;
            } else {
                pos.x = 10 - t * 20;
                pos.y = -8 + t * 16;
            }

            pos.z = Math.sin(progress + t * 3) * 2;
        }
    }

    updateFlow(time, dt, mouseInfluence) {
        for (let i = 0; i < config.fiberSegments; i++) {
            const pos = this.positions[i];
            const t = i / config.fiberSegments;

            // Diagonal wave flow
            const wave = Math.sin(time * 0.5 + this.phase + t * 4);
            pos.x = -12 + t * 24 + wave * 2;
            pos.y = -10 + t * 20 + Math.cos(time * 0.3 + t * 3) * 1.5;
            pos.z = wave * 3;
        }
    }

    updateFinal(time, dt, mouseInfluence) {
        // Fade out most particles, keep only a few
        const keepProbability = 0.05;
        if (Math.random() > keepProbability) {
            for (let i = 0; i < config.fiberSegments; i++) {
                this.positions[i].set(1000, 1000, 1000); // Move off screen
            }
        } else {
            // Single flowing strand
            for (let i = 0; i < config.fiberSegments; i++) {
                const pos = this.positions[i];
                const t = i / config.fiberSegments;

                pos.x = -15 + (time * 2 % 30);
                pos.y = Math.sin(time + t * 5) * 0.5;
                pos.z = 0;
            }
        }
    }
}

function init() {
    // Scene setup
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 15;

    // Renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Create fiber particles
    particles = [];
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const indices = [];

    for (let i = 0; i < config.particleCount; i++) {
        particles.push(new FiberParticle(i));
    }

    // Build geometry for all fibers
    let vertexOffset = 0;
    for (let i = 0; i < config.particleCount; i++) {
        const particle = particles[i];

        for (let j = 0; j < config.fiberSegments; j++) {
            const pos = particle.positions[j];
            positions.push(pos.x, pos.y, pos.z);

            const color = particle.colors[j];
            colors.push(color.r, color.g, color.b);

            // Create line segments
            if (j < config.fiberSegments - 1) {
                indices.push(vertexOffset + j, vertexOffset + j + 1);
            }
        }

        vertexOffset += config.fiberSegments;
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setIndex(indices);

    // Material with additive blending for glow
    const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        linewidth: 1
    });

    particleSystem = new THREE.LineSegments(geometry, material);
    scene.add(particleSystem);

    // Mouse tracking
    document.addEventListener('mousemove', onMouseMove, false);

    // Scroll tracking with GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => { currentSection = index; },
            onEnterBack: () => { currentSection = index; }
        });
    });

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);

    // Start animation loop
    animate();
}

function onMouseMove(event) {
    mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    if (prefersReducedMotion) {
        renderer.render(scene, camera);
        return;
    }

    const time = Date.now() * 0.001;

    // Smooth mouse follow
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    // Convert mouse to 3D space
    const mouseInfluence = {
        active: Math.abs(mouse.targetX) > 0 || Math.abs(mouse.targetY) > 0,
        x: mouse.x * 12,
        y: mouse.y * 8
    };

    // Update all particles
    let index = 0;
    for (let i = 0; i < config.particleCount; i++) {
        particles[i].update(time, currentSection, mouseInfluence);

        // Update geometry
        for (let j = 0; j < config.fiberSegments; j++) {
            const pos = particles[i].positions[j];
            const offset = index * 3;
            particleSystem.geometry.attributes.position.array[offset] = pos.x;
            particleSystem.geometry.attributes.position.array[offset + 1] = pos.y;
            particleSystem.geometry.attributes.position.array[offset + 2] = pos.z;
            index++;
        }
    }

    particleSystem.geometry.attributes.position.needsUpdate = true;

    // Subtle camera movement
    camera.position.x = mouse.x * 0.5;
    camera.position.y = mouse.y * 0.5;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
}

// Initialize when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
