
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

// const rp = require('request-promise')

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
  const sheetId = '1psUEBs0saRcPAido3mL5Nrh_WvFVHOx0N1cwK5jEudc'
  const apiKey = 'AIzaSyBNb8N5MZ_fu8e7cwk4Hj76pqC1pEcDJbg '
  // const data = await rp(`)
  // console.log(JSON.parse(data))

  const xhttp = new XMLHttpRequest()
  xhttp.open('GET', `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A1:Z50?key=${apiKey}`, true)
  xhttp.setRequestHeader('Content-type', 'application/json')
  xhttp.send()

  setTimeout(() => console.log(JSON.parse(xhttp.responseText)), 2000)
  // const response = JSON.parse(xhttp.responseText)

  return
}
