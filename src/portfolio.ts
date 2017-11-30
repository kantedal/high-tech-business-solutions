export const portfolioCategories: string[] = [
  'Web',
  '3D animation',
  'Simulation',
  'Hard'
]

export interface IPortfolioItem {
  header: string
  description: string
  tags: string[]
  imagePaths: string[]
  mediaType: 'IMAGE' | 'VIDEO'
  videoUrl?: string
  projectUrl?: string
}

export const portfolioItems: IPortfolioItem[] = [
  {
    header: 'Looking for host',
    description: '3D animated film that was created as a hobby project.',
    tags: [ '3D animation' ],
    imagePaths: [ 'http://kantedal.se/wp-content/uploads/2015/03/rv.png' ],
    mediaType: 'VIDEO'
  },
  {
    header: 'Looking for host',
    description: '3D animated film that was created as a hobby project.',
    tags: [ '3D animation' ],
    imagePaths: [ './images/rv.png' ],
    mediaType: 'VIDEO'
  },
  {
    header: 'Looking for host',
    description: '3D animated film that was created as a hobby project.',
    tags: [ '3D animation' ],
    imagePaths: [ './rv.png' ],
    mediaType: 'VIDEO'
  },
  {
    header: 'Looking for host',
    description: '3D animated film that was created as a hobby project.',
    tags: [ '3D animation' ],
    imagePaths: [ './rv.png' ],
    mediaType: 'VIDEO'
  },
  {
    header: 'Looking for host',
    description: '3D animated film that was created as a hobby project.',
    tags: [ '3D animation' ],
    imagePaths: [ './rv.png' ],
    mediaType: 'VIDEO'
  },
  {
    header: 'Looking for host',
    description: '3D animated film that was created as a hobby project.',
    tags: [ '3D animation' ],
    imagePaths: [ './rv.png' ],
    mediaType: 'VIDEO'
  },
  {
    header: 'Looking for host',
    description: '3D animated film that was created as a hobby project.',
    tags: [ '3D animation' ],
    imagePaths: [ './rv.png' ],
    mediaType: 'VIDEO'
  },
  {
    header: 'Looking for host',
    description: '3D animated film that was created as a hobby project.',
    tags: [ '3D animation' ],
    imagePaths: [ './rv.png' ],
    mediaType: 'VIDEO'
  },
]