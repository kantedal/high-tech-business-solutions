
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

const queryGoogleSheets = async () => {
  return new Promise<any>((resolve, reject) => {
    const sheetId = '1psUEBs0saRcPAido3mL5Nrh_WvFVHOx0N1cwK5jEudc'
    const apiKey = 'AIzaSyBNb8N5MZ_fu8e7cwk4Hj76pqC1pEcDJbg '

    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A1:Z50?key=${apiKey}`, true)
    xhttp.setRequestHeader('Content-type', 'application/json')

    xhttp.onreadystatechange = () => {                                                  
      if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
        const rawdata = xhttp.responseText
        const json = JSON.parse(rawdata).values
        resolve(json)
      }
    }

    xhttp.send()
  })
} 

export const loadPortfolioItems = async () => {
  const values = await queryGoogleSheets()
  const header = values[0]

  for (let i = 1; i < values.length; i++) {
    const newItem = { ...defaultPortfolioItem }
    for (let j = 0; j < header.length; j++) {
      const headerKey = header[j]
      try {
        switch (headerKey) {
          case 'medias':
            newItem.medias = JSON.parse(values[i][j])
            break
          case 'tags':
            newItem.tags = JSON.parse(values[i][j])
            break
          case 'weight':
            newItem.weight = Number(values[i][j])
            break
          default:
            newItem[headerKey] = values[i][j]
        }
        
      } catch (err) {
        console.log(err)
      }
    }
    portfolioItems.push(newItem as IPortfolioItem)
  }
  
  return
}
