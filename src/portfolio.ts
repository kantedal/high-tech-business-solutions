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
]
