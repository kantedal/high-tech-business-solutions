export enum Categories {
  Web = 'Web',
  Animation = '3d animation',
  GraphicsProgramming = 'Graphics programming',
  Simulation =  'Simulation',
  MobileApp = 'Mobile app',
  Hardware = 'Hardware'
}

export const portfolioCategories: string[] = [
  'Web',
  '3D animation',
  'Graphics programming',
  'Simulation',
  'Hardware'
]

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
}

export const portfolioItems: IPortfolioItem[] = [
  {
    header: 'Looking for host',
    shortDescription: '3D animated film that was created as a hobby project.',
    longDescription: 'Long 3D animated film that was created as a hobby project.',
    tags: [ Categories.Animation ],
    coverImage: './images/lfh.png',
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
    tags: [ Categories.Web, Categories.GraphicsProgramming ],
    coverImage: './images/flight-vis.png',
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
    coverImage: './images/blavitt.png',
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
    tags: [ Categories.MobileApp ],
    coverImage: './images/micfx.png',
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
    tags: [ Categories.MobileApp ],
    coverImage: './images/giveblood.jpg',
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
    tags: [ Categories.MobileApp ],
    coverImage: './images/webglwater.jpg',
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
    tags: [ Categories.MobileApp ],
    coverImage: './images/pathfinder.jpg',
    projectUrl: 'https://hedlundaren.github.io/hide-and-seek/',
    projectSourceUrl: 'https://github.com/Hedlundaren/hide-and-seek/',
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
    tags: [ Categories.MobileApp ],
    coverImage: './images/temojano.jpg',
    projectSourceUrl: 'https://github.com/Grahnen92/Temoji',
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
    tags: [ Categories.MobileApp ],
    coverImage: './images/webclock.jpg',
    projectUrl: 'http://hedlundaren.github.io/clock/',
    projectSourceUrl: 'https://github.com/Hedlundaren/Clock',
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
    tags: [ Categories.MobileApp ],
    coverImage: './images/sph.jpg',
    projectSourceUrl: 'https://github.com/Hedlundaren/vattenoverhuvudet',
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
    shortDescription: 'Interactive 3d web clock',
    longDescription: `Clock made in WebGL using three js.`,
    tags: [ Categories.MobileApp ],
    coverImage: './images/fireworks.jpg',
    projectUrl: 'http://hedlundaren.github.io/fireworks2/',
    projectSourceUrl: 'https://github.com/Hedlundaren/Fireworks',
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
    tags: [ Categories.GraphicsProgramming, Categories.Web ],
    coverImage: './images/carsim.png',
    projectUrl: 'http://kantedal.github.io/car-simulator/',
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
    medias: [
      {
        mediaType: 'IMAGE',
        src: './images/connected-points-video.gif',
      },
    ]
  },
]
