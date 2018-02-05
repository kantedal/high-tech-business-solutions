
export const portfolioItems: IPortfolioItem[] = []

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

export const defaultPortfolioItem = {
  header: '',
  shortDescription: '',
  longDescription: ``,
  tags: [],
  coverImage: '',
  weight: 1.0,
  medias: []
}

const GoogleSpreadsheet = require('google-spreadsheet')

const loadDocument = async (doc: any) => {
  return new Promise<any>((resolve, reject) => {
    doc.getInfo((err, info) => resolve(info.worksheets[0]))
  })
}

const getRows = async (sheet) => {
  return new Promise<any>((resolve, reject) => {
    sheet.getRows({ offset: 1, limit: 200, orderby: 'weight' }, (err, rows) => resolve(rows))
  })
}

export const loadPortfolioItems = async () => {
  const doc =  new GoogleSpreadsheet('1psUEBs0saRcPAido3mL5Nrh_WvFVHOx0N1cwK5jEudc')
  const sheet = await loadDocument(doc)
  const rows = await getRows(sheet)

  for (const row of rows) {
    try {
      portfolioItems.push({
        ...row,
        shortDescription: row.shortdescription,
        coverImage: row.coverimage,
        longDescription: row.longdescription,
        projectUrl: row.projecturl,
        projectSourceUrl: row.projectsourceurl,
        tags: JSON.parse(row.tags), 
        medias: JSON.parse(row.medias),
        weight: Number(row.weight)
      })
    } catch (err) {
      console.log(row)
    }
  }
  return
}
