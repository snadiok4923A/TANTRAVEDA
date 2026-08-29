import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NebulaCanvas = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const fibersRef = useRef([]);
  const particleSystemRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, hasMoved: false });
  const scrollRef = useRef({ current: 0, target: 0 });
  const animationFrameRef = useRef(null);
  const energyPulseRef = useRef({
    active: false,
    progress: 0,
    direction: 1, // 1 = left to right, -1 = right to left
    startTime: 0,
    duration: 1.4
  });
  const lastSectionRef = useRef(-1);
  const scrollDirectionRef = useRef(0);
  const portalPlaneRef = useRef(null);
  const waveInteractionRef = useRef({ current: 0, target: 0 }); // Smooth wave interaction strength

  const config = {
    fiberCount: 160,
    segmentsPerFiber: 150,
    waveWidth: 35,
    waveHeight: 12
  };

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Smooth interpolation helpers
  const lerp = (a, b, t) => a + (b - a) * t;
  const smoothstep = (t) => t * t * (3 - 2 * t);
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  // Smooth low-frequency noise (Perlin-like)
  const noise2D = (x, y) => {
    const X = Math.floor(x);
    const Y = Math.floor(y);
    const fx = x - X;
    const fy = y - Y;

    // Smooth interpolation
    const u = fx * fx * (3 - 2 * fx);
    const v = fy * fy * (3 - 2 * fy);

    const hash = (i, j) => {
      const n = Math.sin(i * 374761393 + j * 668265263) * 43758.5453;
      return n - Math.floor(n);
    };

    const a = hash(X, Y);
    const b = hash(X + 1, Y);
    const c = hash(X, Y + 1);
    const d = hash(X + 1, Y + 1);

    return lerp(lerp(a, b, u), lerp(c, d, u), v);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 28);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // === HIDDEN IMAGE PORTAL LAYER ===
    // Create background plane with hidden image texture

    // Placeholder gradient texture
    const createPlaceholder = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1920;
      canvas.height = 1080;
      const ctx = canvas.getContext('2d');

      // Create a mystical gradient placeholder
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#4a148c');
      gradient.addColorStop(0.5, '#880e4f');
      gradient.addColorStop(1, '#1a237e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      return new THREE.CanvasTexture(canvas);
    };

    const hiddenTexture = createPlaceholder();

    // Try loading from assets folder
    // User can place their image at: src/assets/portal-image.jpg (or .png)
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      '/src/assets/portal-image.jpg',
      (texture) => {
        if (portalPlaneRef.current) {
          portalPlaneRef.current.material.uniforms.uTexture.value = texture;
          if (texture.image) {
            portalPlaneRef.current.material.uniforms.uImageResolution.value.set(texture.image.width, texture.image.height);
          }
        }
      },
      undefined,
      () => {
        // Fallback to placeholder if image not found
        console.log('Portal image not found, using placeholder. Add your image to src/assets/portal-image.jpg');
      }
    );

    // Calculate exact plane size to cover the screen at z=-5
    const distanceToPortal = 28 - (-5); // camera z - portal z
    const vFov = (60 * Math.PI) / 180; // camera fov
    const planeHeight = 2 * Math.tan(vFov / 2) * distanceToPortal;
    const aspect = window.innerWidth / window.innerHeight;
    const planeWidth = planeHeight * aspect;

    const portalGeometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
    const portalMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: hiddenTexture },
        uImageResolution: { value: new THREE.Vector2(1920, 1080) }, // Default placeholder size
        uMousePos: { value: new THREE.Vector2(0, 0) },
        uMouseActive: { value: 0.0 },
        uInnerRadius: { value: 3.0 }, // Inner reveal radius
        uOuterRadius: { value: 6.0 }, // Outer black hole radius
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uTime: { value: 0.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;

        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform vec2 uImageResolution;
        uniform vec2 uMousePos;
        uniform float uMouseActive;
        uniform float uInnerRadius;
        uniform float uOuterRadius;
        uniform vec2 uResolution;
        uniform float uTime;

        varying vec2 vUv;
        varying vec3 vPosition;

        // Smooth step function
        float smootherstep(float edge0, float edge1, float x) {
          float t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
          return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
        }

        void main() {
          // Distance from mouse position
          float dist = distance(vPosition.xy, uMousePos);

          // Only reveal inside inner radius
          float revealStrength = 0.0;

          if (dist < uInnerRadius && uMouseActive > 0.5) {
            // Smooth radial falloff from center to inner edge
            float normalizedDist = dist / uInnerRadius;
            revealStrength = 1.0 - smootherstep(0.0, 1.0, normalizedDist);

            // Background size cover logic
            float planeAspect = uResolution.x / uResolution.y;
            float imageAspect = uImageResolution.x / uImageResolution.y;
            
            vec2 coverUv = vUv;
            if (planeAspect < imageAspect) {
               float scale = planeAspect / imageAspect;
               coverUv.x = (coverUv.x - 0.5) * scale + 0.5;
            } else {
               float scale = imageAspect / planeAspect;
               coverUv.y = (coverUv.y - 0.5) * scale + 0.5;
            }

            // Subtle radial distortion (gravitational lens effect)
            vec2 direction = vPosition.xy - uMousePos;
            float distortAmount = revealStrength * 0.15;
            vec2 distortedUv = coverUv + direction * distortAmount * 0.02;

            // Add subtle swirl
            float angle = atan(direction.y, direction.x);
            float swirl = normalizedDist * 0.3 * sin(uTime * 0.5);
            float cosA = cos(swirl);
            float sinA = sin(swirl);
            vec2 rotatedDir = vec2(
              direction.x * cosA - direction.y * sinA,
              direction.x * sinA + direction.y * cosA
            );
            distortedUv += rotatedDir * 0.01 * revealStrength;

            // Sample texture with distortion
            vec4 texColor = texture2D(uTexture, distortedUv);

            // Apply reveal with subtle opacity (25-35%)
            float opacity = revealStrength * 0.3 * uMouseActive;

            gl_FragColor = vec4(texColor.rgb, opacity);
          } else {
            // Completely invisible outside inner radius
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
          }
        }
      `,
      transparent: true,
      depthWrite: false
    });

    const portalPlane = new THREE.Mesh(portalGeometry, portalMaterial);
    portalPlane.position.z = -5; // Behind the fibers
    scene.add(portalPlane);
    portalPlaneRef.current = portalPlane;

    // Fiber class with smooth elegant curves
    class Fiber {
      constructor(index, totalFibers) {
        this.index = index;
        this.totalFibers = totalFibers;

        // Normalized position (0 to 1)
        this.normalizedY = index / totalFibers;
        this.baseY = (this.normalizedY - 0.5) * config.waveHeight;

        // Unique offsets for variation
        this.timeOffset = Math.random() * Math.PI * 2;
        this.spatialOffset = Math.random() * 50;
        this.speed = 0.7 + Math.random() * 0.3;

        // Color palette
        const colorChoice = Math.random();
        if (colorChoice < 0.4) {
          this.color = new THREE.Color(0x8b5cf6); // Deep violet
        } else if (colorChoice < 0.7) {
          this.color = new THREE.Color(0xa78bfa); // Lavender
        } else if (colorChoice < 0.92) {
          this.color = new THREE.Color(0x7dd3fc); // Soft blue
        } else {
          this.color = new THREE.Color(0xc4b5fd); // Lilac
        }

        // Center fibers are brighter
        const centerDist = Math.abs(this.normalizedY - 0.5) * 2;
        this.baseOpacity = 0.5 + (1 - centerDist) * 0.4;

        // Depth layer (fibers at different depths)
        this.depthLayer = Math.sin(this.normalizedY * Math.PI) * 0.5 + 0.5;

        this.points = [];
        this.basePoints = [];
        for (let i = 0; i < config.segmentsPerFiber; i++) {
          this.points.push(new THREE.Vector3());
          this.basePoints.push(new THREE.Vector3());
        }
      }

      calculateBasePositions(time, scrollProgress, mouseInfluence) {
        const t = time * 0.2 * this.speed;
        const progress = scrollProgress;
        let minDist = Infinity;

        // === SMOOTHLY INTERPOLATED PARAMETERS ===
        const baseAmplitude = lerp(1.8, 2.8, 0.5 + Math.sin(progress * Math.PI * 0.4) * 0.5);
        const waveFrequency = lerp(1.5, 2.2, smoothstep((Math.sin(progress * Math.PI * 0.3) * 0.5 + 0.5)));
        const verticalBend = lerp(0, 1, smoothstep(Math.min(progress / 2.5, 1)));
        const convergePeak = 2.4;
        const convergeDist = Math.abs(progress - convergePeak);
        const convergeStrength = Math.max(0, 1 - convergeDist / 1.5);
        const crossPeak = 3.0;
        const crossDist = Math.abs(progress - crossPeak);
        const crossStrength = Math.max(0, 1 - crossDist / 2.5);
        const diagonalStrength = smoothstep(Math.max(0, Math.min((progress - 4.5) / 1.2, 1)));
        const expansionStrength = smoothstep(Math.max(0, Math.min((progress - 5.5) / 1.2, 1)));

        // === BUILD SMOOTH FIBER PATH ===
        for (let i = 0; i < config.segmentsPerFiber; i++) {
          const t_segment = i / config.segmentsPerFiber;

          let x = (t_segment - 0.5) * config.waveWidth;
          let y = this.baseY;
          let z = this.depthLayer * 1.5;

          // Primary wave motion
          const wave1 = Math.sin(t_segment * Math.PI * waveFrequency + t + this.timeOffset) * baseAmplitude;
          const wave2 = Math.sin(t_segment * Math.PI * waveFrequency * 1.6 + t * 0.6 + this.timeOffset + Math.PI / 3) * baseAmplitude * 0.35;
          y += wave1 + wave2;
          z += Math.sin(t_segment * Math.PI * 2.5 + t * 0.5 + this.timeOffset) * 1.8;

          // Low-frequency organic motion
          const noiseScale = 0.6;
          const noiseX = noise2D(t_segment * noiseScale + this.spatialOffset, t * 0.15 + this.timeOffset * 0.1) * 0.5;
          const noiseY = noise2D(t_segment * noiseScale + this.spatialOffset + 50, t * 0.12 + this.timeOffset * 0.1) * 0.4;
          const noiseZ = noise2D(t_segment * noiseScale + this.spatialOffset + 100, t * 0.18 + this.timeOffset * 0.1) * 0.8;

          x += noiseX;
          y += noiseY;
          z += noiseZ;

          // Morphing transformations
          if (verticalBend > 0) {
            const bendCurve = Math.sin((t_segment - 0.5) * Math.PI * 1.2) * 4.5;
            y += bendCurve * verticalBend;
          }

          if (convergeStrength > 0) {
            const centerPull = 1 - Math.abs(t_segment - 0.5) * 2;
            const squeeze = 1 - centerPull * 0.55 * convergeStrength;
            y *= squeeze;
            const twist = Math.sin(t_segment * Math.PI * 2 + t * 0.4) * 0.8;
            z += twist * convergeStrength;
          }

          if (crossStrength > 0) {
            const fiberPosition = (this.normalizedY - 0.5) * 2;
            const easedCrossStrength = smoothstep(crossStrength);
            const crossShift = fiberPosition * t_segment * 7 * easedCrossStrength;
            y += crossShift;
            const crossDepth = Math.sin(t_segment * Math.PI * 1.8 + t * 0.4) * 2.5;
            z += crossDepth * easedCrossStrength;
            const rotationEffect = Math.cos(t_segment * Math.PI * 2 + t * 0.3) * 1.2;
            z += rotationEffect * easedCrossStrength * 0.5;
          }

          if (diagonalStrength > 0) {
            const diagonalShift = t_segment * 4.5 * diagonalStrength;
            y += diagonalShift - 2.25 * diagonalStrength;
            const diagWave = Math.sin(t_segment * Math.PI * 2 + t + this.timeOffset) * 1.5;
            y += diagWave * (1 - diagonalStrength * 0.4);
          }

          if (expansionStrength > 0) {
            y *= 1 + expansionStrength * 0.35;
            const ribbonWave = Math.sin(t_segment * Math.PI * 1.6 + t * 0.4 + this.timeOffset) * 3.2;
            y += ribbonWave * expansionStrength;
            const depthSwell = Math.sin(t_segment * Math.PI * 2 + t * 0.35) * 3;
            z += depthSwell * expansionStrength;
          }

          this.basePoints[i].set(x, y, z);

          // Track distance to unperturbed fiber
          if (mouseInfluence.active) {
            const dx = x - mouseInfluence.x;
            const dy = y - mouseInfluence.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < minDist) minDist = dist;
          }
        }

        return minDist;
      }

      applyDisplacementAndEnergy(interactionStrength, mouseInfluence, energyPulse) {
        for (let i = 0; i < config.segmentsPerFiber; i++) {
          let x = this.basePoints[i].x;
          let y = this.basePoints[i].y;
          let z = this.basePoints[i].z;

          // Apply instant displacement without history
          if (interactionStrength > 0 && mouseInfluence.active) {
            const dx = x - mouseInfluence.x;
            const dy = y - mouseInfluence.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 12) {
              const influence = smoothstep(1 - dist / 12);
              const force = influence * 2.2 * interactionStrength; // Global strength clipping
              const angle = Math.atan2(dy, dx);

              x += Math.cos(angle) * force;
              y += Math.sin(angle) * force;
              z += force * 0.5;
            }
          }

          this.points[i].set(x, y, z);
        }

        // Energy pulse effect
        this.energyInfluence = 0;
        if (energyPulse.active) {
          const avgX = this.points.reduce((sum, p) => sum + p.x, 0) / this.points.length;
          const normalizedX = (avgX + config.waveWidth / 2) / config.waveWidth;
          const energyPos = energyPulse.direction > 0 ? energyPulse.progress : 1 - energyPulse.progress;
          const dist = Math.abs(normalizedX - energyPos);
          const pulseWidth = 0.15;
          const coreWidth = 0.08;

          if (dist < pulseWidth) {
            if (dist < coreWidth) {
              this.energyInfluence = smoothstep(1 - dist / coreWidth);
            } else {
              this.energyInfluence = smoothstep(1 - (dist - coreWidth) / (pulseWidth - coreWidth)) * 0.6;
            }
          }
        }
      }
    }

    // Initialize fibers
    const fibers = [];
    for (let i = 0; i < config.fiberCount; i++) {
      fibers.push(new Fiber(i, config.fiberCount));
    }
    fibersRef.current = fibers;

    // Build geometry with high subdivision
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const opacities = [];
    const indices = [];

    let vertexIndex = 0;
    fibers.forEach(fiber => {
      fiber.points.forEach((point, i) => {
        positions.push(point.x, point.y, point.z);
        colors.push(fiber.color.r, fiber.color.g, fiber.color.b);

        // Smooth edge fade
        const edgeFade = Math.sin((i / config.segmentsPerFiber) * Math.PI);
        opacities.push(fiber.baseOpacity * edgeFade);

        if (i < config.segmentsPerFiber - 1) {
          indices.push(vertexIndex, vertexIndex + 1);
        }
        vertexIndex++;
      });
    });

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('opacity', new THREE.Float32BufferAttribute(opacities, 1));
    geometry.setAttribute('energyBoost', new THREE.Float32BufferAttribute(new Array(positions.length / 3).fill(0), 1));
    geometry.setIndex(indices);

    // Enhanced shader for glow with energy pulse
    const material = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float opacity;
        attribute float energyBoost;
        varying vec3 vColor;
        varying float vOpacity;
        varying float vEnergyBoost;

        void main() {
          vColor = color;
          vOpacity = opacity;
          vEnergyBoost = energyBoost;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vOpacity;
        varying float vEnergyBoost;

        void main() {
          // Base glow
          vec3 glow = vColor * 1.8;

          // Energy pulse boost
          if (vEnergyBoost > 0.0) {
            // Brighten towards white-lavender
            vec3 energyColor = mix(glow, vec3(1.0, 0.95, 1.0), vEnergyBoost * 0.7);
            glow = energyColor * (1.0 + vEnergyBoost * 1.2);
          }

          float alpha = vOpacity * (0.75 + vEnergyBoost * 0.25);
          gl_FragColor = vec4(glow, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true
    });

    const particleSystem = new THREE.LineSegments(geometry, material);
    scene.add(particleSystem);
    particleSystemRef.current = particleSystem;

    // Smooth mouse tracking
    const handleMouseMove = (event) => {
      mouseRef.current.hasMoved = true;
      mouseRef.current.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Smooth scroll with GSAP and section detection
    let lastScrollY = 0;

    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
      onUpdate: (self) => {
        scrollRef.current.target = self.progress * 6;

        // Detect scroll direction
        const currentScrollY = window.scrollY;
        const direction = currentScrollY > lastScrollY ? 1 : -1;
        lastScrollY = currentScrollY;
        scrollDirectionRef.current = direction;

        // Detect section crossing
        const currentSection = Math.floor(self.progress * 6);
        if (currentSection !== lastSectionRef.current && currentSection >= 0 && currentSection <= 5) {
          // Trigger energy pulse
          const pulse = energyPulseRef.current;
          if (!pulse.active) {
            pulse.active = true;
            pulse.progress = 0;
            pulse.direction = direction;
            pulse.startTime = Date.now() * 0.001;
          }
          lastSectionRef.current = currentSection;
        }
      }
    });

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      if (portalPlaneRef.current) {
        const distanceToPortal = 28 - (-5);
        const vFov = (60 * Math.PI) / 180;
        const newPlaneHeight = 2 * Math.tan(vFov / 2) * distanceToPortal;
        const newPlaneWidth = newPlaneHeight * camera.aspect;
        
        portalPlaneRef.current.geometry.dispose();
        portalPlaneRef.current.geometry = new THREE.PlaneGeometry(newPlaneWidth, newPlaneHeight);
        
        portalPlaneRef.current.material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      if (prefersReducedMotion) {
        renderer.render(scene, camera);
        return;
      }

      const time = Date.now() * 0.001;
      const mouse = mouseRef.current;
      const scroll = scrollRef.current;
      const energyPulse = energyPulseRef.current;
      const portalPlane = portalPlaneRef.current;
      const waveInteraction = waveInteractionRef.current;

      // Update energy pulse progress
      if (energyPulse.active) {
        const elapsed = time - energyPulse.startTime;
        energyPulse.progress = Math.min(elapsed / energyPulse.duration, 1);

        // Use easeOutCubic for smooth energy travel
        const easedProgress = easeOutCubic(energyPulse.progress);
        energyPulse.progress = easedProgress;

        // Deactivate when complete
        if (elapsed >= energyPulse.duration) {
          energyPulse.active = false;
          energyPulse.progress = 0;
        }
      }

      // Smooth damped scroll with faster response
      scroll.current = lerp(scroll.current, scroll.target, 0.12);

      // Smooth damped mouse for camera (gentle parallax)
      mouse.x = lerp(mouse.x, mouse.targetX, 0.12);
      mouse.y = lerp(mouse.y, mouse.targetY, 0.12);

      // 1. SMOOTH CAMERA MOVEMENT (Updated first for exact unprojection)
      const targetCamX = mouse.x * 1.2;
      const targetCamY = mouse.y * 1.2;
      camera.position.x = lerp(camera.position.x, targetCamX, 0.06);
      camera.position.y = lerp(camera.position.y, targetCamY, 0.06);
      camera.lookAt(0, 0, 0);
      camera.updateMatrixWorld();

      // 2. UNPROJECT MOUSE FOR EXACT SCENE COORDINATES
      // This ensures the black hole is exactly under the physical cursor
      const vector = new THREE.Vector3(mouse.targetX, mouse.targetY, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z; // Intersect with z=0 plane
      const exactMousePos = camera.position.clone().add(dir.multiplyScalar(distance));

      const mouseInfluence = {
        active: mouse.hasMoved,
        x: exactMousePos.x,
        y: exactMousePos.y
      };

      // 3. PRE-PASS: CALCULATE BASE WAVES AND FIND MIN DISTANCE
      let minDistanceToWave = Infinity;
      fibers.forEach(fiber => {
        const dist = fiber.calculateBasePositions(time, scroll.current, mouseInfluence);
        if (mouseInfluence.active && dist < minDistanceToWave) {
          minDistanceToWave = dist;
        }
      });

      // 4. CALCULATE INSTANT INTERACTION STRENGTH
      const interactionThreshold = 3.5; // Physical thickness threshold
      let interactionStrength = 0.0;
      
      if (mouseInfluence.active && minDistanceToWave < interactionThreshold) {
        // Smooth falloff only at the boundary
        const normalizedDist = minDistanceToWave / interactionThreshold;
        interactionStrength = 1.0 - smoothstep(normalizedDist);
      }

      // Update for portal and any other subtle effects - NO LERPING for instant response
      waveInteraction.current = interactionStrength;

      // 5. SECOND PASS: APPLY DISPLACEMENT AND UPDATE GEOMETRY
      let vertexIndex = 0;
      fibers.forEach(fiber => {
        fiber.applyDisplacementAndEnergy(interactionStrength, mouseInfluence, energyPulse);

        fiber.points.forEach((point) => {
          const offset = vertexIndex * 3;
          particleSystem.geometry.attributes.position.array[offset] = point.x;
          particleSystem.geometry.attributes.position.array[offset + 1] = point.y;
          particleSystem.geometry.attributes.position.array[offset + 2] = point.z;

          particleSystem.geometry.attributes.energyBoost.array[vertexIndex] = fiber.energyInfluence;
          vertexIndex++;
        });
      });

      particleSystem.geometry.attributes.position.needsUpdate = true;
      particleSystem.geometry.attributes.energyBoost.needsUpdate = true;

      // 6. UPDATE PORTAL EFFECT
      if (portalPlane) {
        // Portal uses the EXACT same mouse coordinates and interaction strength
        portalPlane.material.uniforms.uMousePos.value.set(mouseInfluence.x, mouseInfluence.y);
        portalPlane.material.uniforms.uMouseActive.value = interactionStrength;
        portalPlane.material.uniforms.uTime.value = time;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div id="canvas-container" ref={containerRef}></div>;
};

export default NebulaCanvas;
