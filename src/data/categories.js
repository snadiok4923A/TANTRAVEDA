/**
 * Categories configuration for TANTRAVEDA Main Content & Discovery
 */

export const categories = [
  {
    id: 'software',
    number: '01',
    title: 'SOFTWARE & APPS',
    route: '/start/software',
    tagline: 'Open-Source Engines & Creative Toolkits',
    description:
      'High-performance creative suites, developer utilities, neural workstations, and standalone systems curated for boundary-pushing digital creators.',
    accentColor: '#a78bfa',
    secondaryAccent: '#8b5cf6',
    glowColor: 'rgba(167, 139, 250, 0.45)',
    gradient: 'linear-gradient(135deg, rgba(167, 139, 250, 0.16) 0%, rgba(139, 92, 246, 0.04) 100%)',
    tags: ['DEV TOOLS', 'CREATIVE APPS', 'UTILITIES', 'OPEN ACCESS'],
    stats: { items: '420+ Tools', updated: 'Realtime Sync', access: '100% Free' },
    previewItems: [
      { name: 'VedaCompute IDE', version: 'v3.2', desc: 'Lightweight reactive shader & quantum graphics editor' },
      { name: 'AetherSynth Engine', version: 'v1.8', desc: 'Realtime procedural 3D synthesis & node compositor' },
      { name: 'OmniTerminal OS', version: 'v4.0', desc: 'Cybernetic cross-platform workflow terminal' }
    ]
  },
  {
    id: 'education',
    number: '02',
    title: 'EDUCATION',
    route: '/start/education',
    tagline: 'Deep Archives, Papers & Masterclasses',
    description:
      'Unrestricted repositories of advanced technical documentation, algorithmic blueprints, generative architecture masterclasses, and computational physics papers.',
    accentColor: '#38bdf8',
    secondaryAccent: '#0ea5e9',
    glowColor: 'rgba(56, 189, 248, 0.45)',
    gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.16) 0%, rgba(14, 165, 233, 0.04) 100%)',
    tags: ['RESEARCH PAPERS', 'MASTERCLASSES', 'BLUEPRINTS', 'KNOWLEDGE BASE'],
    stats: { items: '1,280+ Archives', updated: 'Weekly Drops', access: '100% Free' },
    previewItems: [
      { name: 'Non-Euclidean Field Theory', version: 'Vol. VII', desc: 'Mathematical foundations of dynamic spacetime warp' },
      { name: 'WebGL Shader Architecture', version: 'Course 04', desc: 'Raymarching, signed distance fields & GPU optimization' },
      { name: 'Cognitive Cybernetics', version: 'Manuscript', desc: 'Human-machine feedback loops and neural interfaces' }
    ]
  },
  {
    id: 'movies',
    number: '03',
    title: 'MOVIES',
    route: '/start/movies',
    tagline: 'Visionary Cinema & Sci-Fi Archives',
    description:
      'A cinematic vault of groundbreaking independent cinema, experimental sci-fi journeys, visual essays, and remastered avant-garde documentaries.',
    accentColor: '#e879f9',
    secondaryAccent: '#d946ef',
    glowColor: 'rgba(232, 121, 249, 0.45)',
    gradient: 'linear-gradient(135deg, rgba(232, 121, 249, 0.16) 0%, rgba(217, 70, 239, 0.04) 100%)',
    tags: ['4K CINEMA', 'SCI-FI DOCS', 'SHORT FILMS', 'EXPERIMENTS'],
    stats: { items: '340+ Films', updated: 'Bi-Weekly', access: '100% Free' },
    previewItems: [
      { name: 'Chronos Horizon', version: '4K Ultra', desc: 'Experimental narrative across collapsed dimensional timelines' },
      { name: 'The Silicon Monolith', version: 'Director’s Cut', desc: 'Documentary tracking the ascension of synthetic consciousness' },
      { name: 'Vesper Void', version: 'Short Film', desc: 'Atmospheric audiovisual odyssey through deep cosmic silence' }
    ]
  },
  {
    id: 'images',
    number: '04',
    title: 'IMAGES',
    route: '/start/images',
    tagline: 'Ultra-Res Art, Textures & Celestial Captures',
    description:
      'Pristine 8K raw captures, procedural seamless textures, cinematic backdrop art, and astral telescopic imagery primed for visual production.',
    accentColor: '#fbbf24',
    secondaryAccent: '#f59e0b',
    glowColor: 'rgba(251, 191, 36, 0.45)',
    gradient: 'linear-gradient(135deg, rgba(251, 191, 36, 0.16) 0%, rgba(245, 158, 11, 0.04) 100%)',
    tags: ['8K TEXTURES', 'CELESTIAL RAW', 'CONCEPT ART', 'FREE COMMERCIAL'],
    stats: { items: '18,500+ Assets', updated: 'Daily Pipeline', access: '100% Free' },
    previewItems: [
      { name: 'Deep Space Nebula EXR Plates', version: '32-Bit Float', desc: 'High dynamic range multi-band astrophysical panoramas' },
      { name: 'Procedural Alien Biome Textures', version: 'Seamless 8K', desc: 'Displacement, normal, roughness & albedo material packs' },
      { name: 'Brutalist Monolith Studies', version: 'Raw DNG', desc: 'Monolithic architecture captured under extreme lighting' }
    ]
  },
  {
    id: 'videos',
    number: '05',
    title: 'VIDEOS',
    route: '/start/videos',
    tagline: 'VFX Overlays, Motion Graphics & Visual Loops',
    description:
      'Seamless 60FPS motion loops, volumetric light overlays, alpha-channel visual effects, and dynamic particle systems built for editors and VJs.',
    accentColor: '#34d399',
    secondaryAccent: '#10b981',
    glowColor: 'rgba(52, 211, 153, 0.45)',
    gradient: 'linear-gradient(135deg, rgba(52, 211, 153, 0.16) 0%, rgba(16, 185, 129, 0.04) 100%)',
    tags: ['60FPS LOOPS', 'VFX PLATES', 'ALPHA CHANNEL', 'PRORES 422'],
    stats: { items: '3,100+ Loops', updated: 'Weekly Release', access: '100% Free' },
    previewItems: [
      { name: 'Quantum Plasma Distortion Plates', version: 'ProRes 4444', desc: 'Volumetric chromatic aberration & light distortion passes' },
      { name: 'Cybernetic HUD Overlays', version: '4K Alpha', desc: 'Loopable futuristic telemetry, radar & data telemetry feeds' },
      { name: 'Hyperdrive Warp Chamber', version: 'Seamless 60fps', desc: 'Hypnotic tunnel velocity loops for stage & interactive displays' }
    ]
  },
  {
    id: 'sfx',
    number: '06',
    title: 'SFX',
    route: '/start/sfx',
    tagline: 'Spatial Audio, Cinematic Hits & Synthesizers',
    description:
      'Uncompressed 24-bit 96kHz spatial sound effects, sub-bass braams, modular synth patches, dark futuristic ambiences, and acoustic Foley.',
    accentColor: '#c084fc',
    secondaryAccent: '#a855f7',
    glowColor: 'rgba(192, 132, 252, 0.45)',
    gradient: 'linear-gradient(135deg, rgba(192, 132, 252, 0.16) 0%, rgba(168, 85, 247, 0.04) 100%)',
    tags: ['SPATIAL SFX', '96KHZ / 24-BIT', 'SYNTH PRESETS', 'CINEMATIC HITS'],
    stats: { items: '9,400+ Sounds', updated: 'Weekly Bundles', access: '100% Free' },
    previewItems: [
      { name: 'Dark Void Sub-Bass Impacts', version: 'WAV 96k/24b', desc: 'Tremendous cinematic low-end impacts with harmonic tail' },
      { name: 'Modular Analog Glitch & Micro-Noise', version: 'Sample Pack', desc: 'Eurorack chaotic signals, clicks, bursts & telemetry clicks' },
      { name: 'Cosmic Drone Ambience Collection', version: 'Binaural', desc: 'Hypnotic continuous soundscapes recorded across deep spaces' }
    ]
  }
];

export function getCategoryById(id) {
  return categories.find((cat) => cat.id.toLowerCase() === id.toLowerCase());
}
