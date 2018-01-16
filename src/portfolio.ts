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

export interface IPortfolioItem {
  header: string
  shortDescription: string
  longDescription: string
  tags: string[]
  imagePaths: string[]
  mediaType: 'IMAGE' | 'VIDEO'
  videoUrl?: string
  projectUrl?: string
}

export const portfolioItems: IPortfolioItem[] = [
  {
    header: 'Looking for host',
    shortDescription: '3D animated film that was created as a hobby project.',
    longDescription: 'Long 3D animated film that was created as a hobby project.',
    tags: [ Categories.Animation ],
    imagePaths: [ './images/lfh.png' ],
    mediaType: 'VIDEO',
    videoUrl: 'http://simonhedlund.com'
  },
  {
    header: 'Rob`s Vengeance',
    shortDescription: '3D animated film that was created as a hobby project.',
    longDescription: '3D animated film that was created as a hobby project.',
    tags: [ Categories.Animation ],
    imagePaths: [ './images/rv.png' ],
    mediaType: 'VIDEO'
  },
  {
    header: 'Pathtracing in WebGL',
    shortDescription: 'Path tracing rendering engine for the web',
    longDescription: 'Path tracing rendering engine for the web',
    tags: [ Categories.Web, Categories.GraphicsProgramming ],
    imagePaths: [ './images/pathtracer.png' ],
    mediaType: 'VIDEO'
  },
  {
    header: 'Flight visualization',
    shortDescription: 'Visualization of thousands of flights in realtime',
    longDescription: 'Visualization of thousands of flights in realtime',
    tags: [ Categories.Web, Categories.GraphicsProgramming ],
    imagePaths: [ './images/flight-vis.png' ],
    mediaType: 'VIDEO'
  },
  {
    header: 'Heja Blåvitt',
    shortDescription: 'Native Android app collecting and presenting news',
    longDescription: 'Native Android app collecting and presenting news',
    tags: [ Categories.MobileApp ],
    imagePaths: [ './images/blavitt.png' ],
    mediaType: 'VIDEO'
  },
  {
    header: 'Self balancing robot',
    shortDescription: 'Two wheeled Arduino robot balancing using PID',
    longDescription: 'Two wheeled Arduino robot balancing using PID',
    tags: [ Categories.Hardware ],
    imagePaths: [ './images/pid.png' ],
    mediaType: 'VIDEO'
  },
  {
    header: 'micfx',
    shortDescription: 'App for real time modification of input sound',
    longDescription: 'App for real time modification of input sound',
    tags: [ Categories.MobileApp ],
    imagePaths: [ './images/micfx.png' ],
    mediaType: 'VIDEO'
  },
]
