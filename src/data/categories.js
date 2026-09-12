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
    resources: [
      {
        id: 'vscode',
        title: 'Visual Studio Code',
        type: 'file',
        description: 'Stable Windows installer for the extensible code editor.',
        url: 'https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user',
        fileType: 'EXE',
        fileSize: 'Latest build',
        youtube: [
          { title: 'VS Code Tips & Tricks', videoId: 'RZqNXpr7g4g' },
          { title: 'VS Code Extensions Guide', videoId: 'xRfVY2R2C2Q' }
        ]
      },
      {
        id: 'chrome',
        title: 'Google Chrome',
        type: 'file',
        description: 'Direct Windows installer for the current Chrome release.',
        url: 'https://dl.google.com/chrome/install/chrome_installer.exe',
        fileType: 'EXE',
        fileSize: 'Latest build'
      },
      {
        id: 'blender-hub',
        title: 'Blender Download Hub',
        type: 'link',
        description: 'Open-source 3D creation suite and release archive.',
        url: 'https://www.blender.org/download/',
        youtube: [
          { title: 'Blender 3.0 — New Features', videoId: 'JZIFWEY3l6k' },
          { title: 'Blender Beginner Tutorial', videoId: 'TPrnSACiTJ4' },
          { title: 'Blender Geometry Nodes', videoId: 'X5aW9Qxh5WQ' }
        ]
      },
      {
        id: 'github',
        title: 'GitHub',
        type: 'link',
        description: 'Discover, share, and build open-source software.',
        url: 'https://github.com/'
      }
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
    resources: [
      {
        id: 'free-programming-books',
        title: 'Free Programming Books',
        type: 'file',
        description: 'Community-maintained index of free programming books and courses.',
        url: 'https://raw.githubusercontent.com/EbookFoundation/free-programming-books/main/books/free-programming-books.md',
        fileType: 'MD',
        fileSize: 'Repository file',
        youtube: [
          { title: 'Python Full Course for Beginners', videoId: '_uQrJ0TkZlc' },
          { title: 'JavaScript Full Course', videoId: 'W6NZfCO5SIk' }
        ]
      },
      {
        id: 'python-gitignore',
        title: 'Python Gitignore Template',
        type: 'file',
        description: 'A practical starting template for Python projects and virtual environments.',
        url: 'https://raw.githubusercontent.com/github/gitignore/main/Python.gitignore',
        fileType: 'GITIGNORE',
        fileSize: 'Repository file'
      },
      {
        id: 'mdn',
        title: 'MDN Web Docs',
        type: 'link',
        description: 'Reference documentation for web technologies and standards.',
        url: 'https://developer.mozilla.org/',
        youtube: [
          { title: 'MDN Web Docs Tutorial', videoId: 'G3e-cpL7ofc' }
        ]
      },
      {
        id: 'freecodecamp',
        title: 'freeCodeCamp',
        type: 'link',
        description: 'Free project-based programming lessons and certifications.',
        url: 'https://www.freecodecamp.org/',
        youtube: [
          { title: 'freeCodeCamp Python Course', videoId: 'rfscVS0vtbw' },
          { title: 'freeCodeCamp JS Course', videoId: 'jS4aFq5-91M' }
        ]
      }
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
    resources: [
      {
        id: 'big-buck-bunny',
        title: 'Big Buck Bunny',
        type: 'file',
        description: 'Open movie source file for studying animation and production pipelines.',
        url: 'https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_720p_stereo.avi',
        fileType: 'AVI',
        fileSize: '720p'
      },
      {
        id: 'sintel-trailer',
        title: 'Sintel Trailer',
        type: 'file',
        description: 'High-resolution trailer asset from the Blender open movie project.',
        url: 'https://download.blender.org/sintel/trailer/Sintel.Trailer.1080p.mp4',
        fileType: 'MP4',
        fileSize: '1080p'
      },
      {
        id: 'archive-films',
        title: 'Internet Archive Feature Films',
        type: 'link',
        description: 'A public-domain and Creative Commons film collection.',
        url: 'https://archive.org/details/feature_films',
        youtube: [
          { title: 'Solaris — Mosfilm', videoId: 'Z8ZhQPaw4rE' },
          { title: 'Stalker — Mosfilm', videoId: 'm5nL2xJ8K9w' }
        ]
      },
      {
        id: 'blender-movies',
        title: 'Blender Open Movies',
        type: 'link',
        description: 'Open-source films, assets, and production files from Blender.',
        url: 'https://www.blender.org/open-movies/',
        youtube: [
          { title: 'Spring — Blender Open Movie', videoId: 'WhWc3b3KfQs' },
          { title: 'Sprite Fright — Blender', videoId: 'Fh5g8k9J0L2' }
        ]
      }
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
    resources: [
      {
        id: 'hubble-deep-field',
        title: 'Hubble Ultra Deep Field',
        type: 'file',
        description: 'A high-resolution celestial reference image for visual research.',
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Hubble_ultra_deep_field.jpg',
        fileType: 'JPG',
        fileSize: 'High resolution'
      },
      {
        id: 'landscape-reference',
        title: 'Landscape Reference Frame',
        type: 'file',
        description: 'A large-format landscape image for composition and color studies.',
        url: 'https://picsum.photos/id/1015/3840/2160',
        fileType: 'JPG',
        fileSize: '3840 × 2160'
      },
      {
        id: 'unsplash',
        title: 'Unsplash',
        type: 'link',
        description: 'High-resolution photography for creative and commercial projects.',
        url: 'https://unsplash.com/',
        youtube: [
          { title: 'Milky Way Photography Tutorial', videoId: 'PQ6YSwBGbC0' },
          { title: 'Landscape Photography Tips', videoId: 'K8vL2mN1pQ4' }
        ]
      },
      {
        id: 'nasa-images',
        title: 'NASA Image and Video Library',
        type: 'link',
        description: "Search NASA's public archive of images, audio, and video.",
        url: 'https://images.nasa.gov/',
        youtube: [
          { title: 'NASA Image Processing', videoId: 'R9xL3mN8pQ2' }
        ]
      }
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
    resources: [
      {
        id: 'big-buck-bunny-sample',
        title: 'Big Buck Bunny Sample',
        type: 'file',
        description: 'A compact MP4 sample for testing playback and edit pipelines.',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        fileType: 'MP4',
        fileSize: 'Sample'
      },
      {
        id: 'bigger-blazes',
        title: 'For Bigger Blazes Sample',
        type: 'file',
        description: 'A short sample clip for motion and color workflow testing.',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        fileType: 'MP4',
        fileSize: 'Sample'
      },
      {
        id: 'mixkit',
        title: 'Mixkit Free Stock Video',
        type: 'link',
        description: 'Royalty-free video clips and motion assets for editors.',
        url: 'https://mixkit.co/free-stock-video/',
        youtube: [
          { title: 'CapCut Video Editing Full Course', videoId: 'qfHX2cNA4MY' },
          { title: 'DaVinci Resolve Tutorial', videoId: 'G3vK2mN9pQ1' }
        ]
      },
      {
        id: 'pexels-videos',
        title: 'Pexels Videos',
        type: 'link',
        description: 'Free stock videos contributed by creators worldwide.',
        url: 'https://www.pexels.com/videos/',
        youtube: [
          { title: 'Pexels Video Search Guide', videoId: 'X5vL8mN2pQ7' }
        ]
      }
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
    resources: [
      {
        id: 'interface-button',
        title: 'Interface Button',
        type: 'file',
        description: 'A clean UI click suitable for futuristic interface design.',
        url: 'https://www.soundjay.com/buttons/sounds/button-1.mp3',
        fileType: 'MP3',
        fileSize: 'Short sample'
      },
      {
        id: 'rain-atmosphere',
        title: 'Rain Atmosphere',
        type: 'file',
        description: 'A compact rain recording for ambience and mixing studies.',
        url: 'https://www.soundjay.com/nature/sounds/rain-01.mp3',
        fileType: 'MP3',
        fileSize: 'Short sample'
      },
      {
        id: 'bbc-sfx',
        title: 'BBC Sound Effects',
        type: 'link',
        description: "Explore the BBC's public sound-effects archive.",
        url: 'https://sound-effects.bbcrewind.co.uk/',
        youtube: [
          { title: 'Sound Design Masterclass', videoId: 'UOMMyu__FTM' },
          { title: 'Foley Art Tutorial', videoId: 'V8xL3mN9pQ5' }
        ]
      },
      {
        id: 'freesound',
        title: 'Freesound',
        type: 'link',
        description: 'A collaborative database of Creative Commons audio samples.',
        url: 'https://freesound.org/',
        youtube: [
          { title: 'Freesound Tutorial', videoId: 'Z7xL2mN8pQ3' }
        ]
      }
    ]
  }
];

export function getCategoryById(id) {
  return categories.find((cat) => cat.id.toLowerCase() === id.toLowerCase());
}