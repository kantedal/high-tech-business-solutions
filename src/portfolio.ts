export enum Categories {
  Web = 'Web',
  Animation = '3d\xa0animation',
  GraphicsProgramming = 'Graphics\xa0programming',
  Simulation =  'Simulation',
  MobileApp = 'Mobile\xa0app',
  Hardware = 'Hardware',
  AI = 'AI',
  Games = 'Games'
}

export interface IMedia {
  mediaType: 'IMAGE' | 'VIDEO'
  src: string
  description?: string
}

export interface IPortfolioItem {
  header: string
  shortDescription: string
  longDescription: string
  tags: string[]
  coverImage: string
  medias: IMedia[]
  projectUrl?: string
  projectSourceUrl?: string
  weight: number
}

export const portfolioItems: IPortfolioItem[] = [
  {
    header: 'Looking for host',
    shortDescription: '3D animated film that was created as a hobby project.',
    longDescription: 'Long 3D animated film that was created as a hobby project.',
    tags: [ Categories.Animation ],
    coverImage: './images/lfh.png',
    weight: 1.0,
    medias: [
      {
        mediaType: 'VIDEO',
        src: 'https://www.youtube.com/embed/xwJPhZyZ-6A',
        description: ''
      },
      {
        mediaType: 'IMAGE',
        src: './images/lfh.png',
        description: 'Looking for host'
      },
    ]
  },
  {
    header: 'Rob`s Vengeance',
    shortDescription: '3D animated film that was created as a hobby project.',
    longDescription: '3D animated film that was created as a hobby project.',
    tags: [ Categories.Animation ],
    coverImage: './images/rv.png',
    weight: 1.0,
    medias: [
      {
        mediaType: 'VIDEO',
        src: 'https://www.youtube.com/embed/Hiiruh8nHKQ',
        description: ''
      },
      {
        mediaType: 'IMAGE',
        src: './images/rv.png',
        description: 'Robs Vengeance'
      },
    ]
  },
  {
    header: 'Pathtracing in WebGL',
    shortDescription: 'Path tracing rendering engine for the web',
    longDescription: 'Path tracing rendering engine for the web',
    tags: [ Categories.Web, Categories.GraphicsProgramming ],
    coverImage: './images/pathtracer.png',
    projectUrl: 'https://kantedal.github.io/pathtracer-webgl2/',
    projectSourceUrl: 'https://github.com/kantedal/pathtracer-webgl2',
    weight: 2.0,
    medias: [
      {
        mediaType: 'VIDEO',
        src: 'https://www.youtube.com/embed/AGrCNlCXXfY',
      },
      {
        mediaType: 'IMAGE',
        src: './images/pathtracer.png',
      },
    ]
  },
  {
    header: 'Flight visualization',
    shortDescription: 'Visualization of thousands of flights in realtime',
    longDescription: 'Visualization of thousands of flights in realtime',
    projectUrl: 'https://kantedal.github.io/flight-visualization-gpu/',
    projectSourceUrl: 'https://github.com/kantedal/flight-visualization-gpu',
    tags: [ Categories.Web, Categories.GraphicsProgramming ],
    coverImage: './images/flight-vis.png',
    weight: 1.5,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/flight-vis.png',
      },
    ]
  },
  {
    header: 'Heja Blåvitt',
    shortDescription: 'Native Android app collecting and presenting news',
    longDescription: 'Native Android app collecting and presenting news',
    tags: [ Categories.MobileApp ],
    projectSourceUrl: 'https://github.com/kantedal/heja-blavitt',
    coverImage: './images/blavitt.png',
    weight: 1.4,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/blavitt.png',
      },
    ]
  },
  {
    header: 'Self balancing robot',
    shortDescription: 'Two wheeled Arduino robot balancing using PID',
    longDescription: 'Two wheeled Arduino robot balancing using PID',
    tags: [ Categories.Hardware ],
    coverImage: './images/pid.png',
    weight: 1.45,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/pid.png',
      },
    ]
  },
  {
    header: 'micfx',
    shortDescription: 'App for real time modification of input sound',
    longDescription: 'App for real time modification of input sound',
    projectSourceUrl: 'https://github.com/kantedal/MicrophoneModifier',
    tags: [ Categories.MobileApp ],
    coverImage: './images/micfx.png',
    weight: 1.1,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/micfx.png',
      },
    ]
  },
  {
    header: 'Give Blood',
    shortDescription: '3d animation created as school project',
    longDescription: `During exchange in Singapore Simon created this short 
    animated film about a mosquito donating blood. 
    Blender was used for modelling and animating. Cycles was used for rendering.`,
    tags: [ Categories.Animation ],
    coverImage: './images/giveblood.jpg',
    weight: 1.2,
    medias: [
      {
        mediaType: 'VIDEO',
        src: 'https://www.youtube.com/embed/F3LkmUsgyb4',
      },
      {
        mediaType: 'IMAGE',
        src: './images/giveblood.jpg',
      },
    ]
  },
  {
    header: 'WebGL Water',
    shortDescription: 'Displacement water with perlin noise',
    longDescription: `Perlin noise is used to creta displacement, a 
      bumpmap and colors for a grid generated in the browser using three js.`,
    tags: [ Categories.Web, Categories.GraphicsProgramming ],
    coverImage: './images/webglwater.jpg',
    weight: 1.4,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/webglwater.jpg',
      },
    ]
  },
  {
    header: 'Intelligent Agent',
    shortDescription: 'Path finder using the Bell equation',
    longDescription: `Agent recieves points for finding green squares and looses points on red squares. 
      The agent expands a tree of options and calculates the most beneficial.`,
    tags: [ Categories.AI, Categories.Web ],
    coverImage: './images/pathfinder.jpg',
    projectUrl: 'https://hedlundaren.github.io/hide-and-seek/',
    projectSourceUrl: 'https://github.com/Hedlundaren/hide-and-seek/',
    weight: 1.0,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/pathfinder.jpg',
      },
    ]
  },
  {
    header: 'Temojano',
    shortDescription: 'Tower defence in 3d made with Unity',
    longDescription: `Procedurally generated terrain, intelligent bots, physically correct animations, tower defence. 
      Won price for best project in class at Nanyang Technological University, Singapore.`,
    tags: [ Categories.Games, Categories.GraphicsProgramming ],
    coverImage: './images/temojano.jpg',
    projectSourceUrl: 'https://github.com/Grahnen92/Temoji',
    weight: 1.0,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/temojano.jpg',
      },
    ]
  },
  {
    header: 'Web Clock',
    shortDescription: 'Interactive 3d web clock',
    longDescription: `Clock made in WebGL using three js.`,
    tags: [ Categories.Web, Categories.GraphicsProgramming],
    coverImage: './images/webclock.jpg',
    projectUrl: 'http://hedlundaren.github.io/clock/',
    projectSourceUrl: 'https://github.com/Hedlundaren/Clock',
    weight: 1.38,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/webclock.jpg',
      },
    ]
  },
  {
    header: 'SPH Simulation',
    shortDescription: 'Particle based water simulation on the GPU',
    longDescription: `Particle simulation using Navier-stokes smoothed particle hydrodynamics approach. 
      OpenGL is used for graphics and OpenCL for GPU computations.`,
    tags: [ Categories.Simulation, Categories.GraphicsProgramming ],
    coverImage: './images/sph.jpg',
    projectSourceUrl: 'https://github.com/Hedlundaren/vattenoverhuvudet',
    weight: 1.6,
    medias: [
      {
        mediaType: 'VIDEO',
        src: 'https://www.youtube.com/watch?v=15oeGll4-80',
      },
      {
        mediaType: 'IMAGE',
        src: './images/sph.jpg',
      },
    ]
  },
  {
    header: 'Fireworks',
    shortDescription: 'Interactive fireworks in WebGL',
    longDescription: `Click the screen to send fireworks. Implemented in WebGL using three js. It is basically particles emitting new particles`,
    tags: [ Categories.Web, Categories.Simulation ],
    coverImage: './images/fireworks.jpg',
    projectUrl: 'http://hedlundaren.github.io/fireworks2/',
    projectSourceUrl: 'https://github.com/Hedlundaren/Fireworks',
    weight: 1.3,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/fireworks.jpg',
      },
    ]
  },
  {
    header: 'Soft body physics',
    shortDescription: 'Soft body phyisics in WebGL',
    longDescription: `Simulation of soft body physics written in Typescript and WebGL. The integration method used is position based and fits the purpose well.`,
    tags: [ Categories.GraphicsProgramming, Categories.Simulation, Categories.Web ],
    coverImage: './images/softbody_small.jpg',
    projectUrl: 'http://kantedal.github.io/soft-body-app/',
    weight: 1.3,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/softbody_small.jpg',
      },
    ]
  },
  {
    header: 'Mandelbrot visualization',
    shortDescription: 'Mandelbrot visualization in WebGL 2',
    longDescription: `Mandelbrot visualziation run on the GPU. Works well as long as the 32 bit precision float in enough.`,
    tags: [ Categories.GraphicsProgramming, Categories.Web ],
    coverImage: './images/mandelbrot.png',
    projectUrl: 'https://kantedal.github.io/mandelbrot-webgl2/',
    weight: 1.1,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/mandelbrot.png',
      },
    ]
  },
  {
    header: 'Car simulation',
    shortDescription: 'Car simulation with self written physics engine',
    longDescription: `Car simulation with self written physics engine.`,
    tags: [ Categories.GraphicsProgramming, Categories.Web, Categories.Games, Categories.Simulation ],
    coverImage: './images/carsim.png',
    projectUrl: 'http://kantedal.github.io/car-simulator/',
    weight: 1.0,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/carsim.png',
      },
    ]
  },
  {
    header: 'Cloth simulation',
    shortDescription: 'Cloth simulation with verlet integration',
    longDescription: `Cloth simulation with verlet integration.`,
    tags: [ Categories.GraphicsProgramming, Categories.Web, Categories.Simulation ],
    coverImage: './images/cloth.png',
    projectUrl: 'http://kantedal.github.io/cloth-simulation/',
    weight: 1.0,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/cloth.png',
      },
    ]
  },
  {
    header: 'Connected points',
    shortDescription: 'Weird WebGL visualization/simulation',
    longDescription: `Weird WebGL visualization similar to particles.js, but with physics. On the GPU.`,
    tags: [ Categories.GraphicsProgramming, Categories.Web, Categories.Simulation ],
    coverImage: './images/connected-particles.jpg',
    projectSourceUrl: 'https://github.com/kantedal/connected-particles-webgl',
    weight: 1.3,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/connected-points-video.gif',
      },
    ]
  },
  {
    header: 'The Lake',
    shortDescription: 'Lake with reflection and refraction in OpenGL',
    longDescription: `Clock made in WebGL using three js.`,
    tags: [ Categories.GraphicsProgramming ],
    coverImage: './images/theLake.jpg',
    projectUrl: 'http://hedlundaren.github.io/fireworks2/',
    projectSourceUrl: 'https://github.com/Hedlundaren/Fireworks',
    weight: 1.0,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/theLake.jpg',
      },
    ]
  },
  {
    header: 'Cloth Simulation',
    shortDescription: 'Cloth simulated in OpenGL',
    longDescription: `Cloth simulated in OpenGL using a mass-spring system.`,
    tags: [ Categories.Simulation, Categories.GraphicsProgramming ],
    coverImage: './images/cloth.jpg',
    projectSourceUrl: 'https://github.com/Hedlundaren/cloth-simulation',
    weight: 1.0,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/cloth.gif',
      },
      {
        mediaType: 'IMAGE',
        src: './images/cloth.jpg',
      },
    ]
  },
  {
    header: 'TexMesh',
    shortDescription: 'Drawing tool controlled with android app',
    longDescription: `TexMesh is a tool developed with OpengL where the user can paint and create textures. 
    The user can also navigate and choose paint brushes with an external android app.`,
    tags: [ Categories.GraphicsProgramming, Categories.MobileApp ],
    coverImage: './images/texmesh.png',
    projectSourceUrl: 'https://github.com/Hedlundaren/opengl-remote-server',
    projectUrl: 'https://vimeo.com/212475647',
    weight: 2.0,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/texmesh-controls.gif',
      },
      {
        mediaType: 'IMAGE',
        src: './images/texmesh-painting.gif',
      }
    ]
  },
  {
    header: 'Key Quest',
    shortDescription: 'App for the board game Key Quest',
    longDescription: `App for Iphone and Android made for the popular board game Key Quest`,
    tags: [ Categories.MobileApp, Categories.Games ],
    coverImage: './images/kq.png',
    weight: 1.35,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/kq.png',

      },
    ]
  },
  {
    header: 'Unemployment Vis',
    shortDescription: 'Web app for visualizing unemployment',
    longDescription: `Web app for visualizing unemployment using WebGL.`,
    tags: [ Categories.Web, Categories.GraphicsProgramming ],
    coverImage: './images/swevis.jpg',
    projectUrl: 'http://sofiekhullar.github.io/hack4swe/',
    projectSourceUrl: 'https://github.com/sofiekhullar/hack4swe',
    weight: 0.95,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/swevis.jpg',

      },
    ]
  },
  {
    header: 'Volume Renderer',
    shortDescription: 'Visualize pvm data with raymarching in real time',
    longDescription: `Volume renderer implemented on the GPU using OpenGL. Load pvm data and render them using your own transfer functions.`,
    tags: [ Categories.GraphicsProgramming ],
    coverImage: './images/vr1.png',
    projectSourceUrl: 'https://github.com/Hedlundaren/raymarcher',
    weight: 1.7,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/vr1.png',
      },
      {
        mediaType: 'IMAGE',
        src: './images/vr2.png',
      },
      {
        mediaType: 'IMAGE',
        src: './images/vr3.png',
      },
      {
        mediaType: 'IMAGE',
        src: './images/vr4.png',
      },
      {
        mediaType: 'IMAGE',
        src: './images/vr5.png',
      }
    ]
  },
  {
    header: 'Listig',
    shortDescription: 'List app for Android',
    longDescription: `List app for Android.`,
    tags: [ Categories.MobileApp ],
    coverImage: './images/listig.png',
    weight: 1.1,
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/listig.png',
      },
    ]
  },
]
