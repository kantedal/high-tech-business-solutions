
export const aboutItems: IAbout[] = []

export interface ISkill {
  skillName: string
  skillWeight: number
}
export interface IAbout {
  name: string
  shortDescription: string
  skills: ISkill[]
  imgUrl: string
  emailUrl: string
  linkedInUrl: string
  githubUrl: string
  websiteUrl: string
}

const queryGoogleSheets = async () => {
  return new Promise<any>((resolve, reject) => {
    const sheetId = '1psUEBs0saRcPAido3mL5Nrh_WvFVHOx0N1cwK5jEudc'
    const apiKey = 'AIzaSyDjAzVuG0GXjOkYJ6PTjpmw6yGFnRNreXQ '

    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/aboutData!A1:Z50?key=${apiKey}`, true)
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

export const loadAboutData = async () => {
  const values = await queryGoogleSheets()
  const header = values[0]

  for (let i = 1; i < values.length; i++) {
    const newItem = { name: '', shortDescription: '', skills: [], imgUrl: '', emailUrl: '', linkedInUrl: '', githubUrl: '', websiteUrl: '' }
    for (let j = 0; j < header.length; j++) {
      const headerKey = header[j]
      try {
        switch (headerKey) {
          case 'skills':
            newItem.skills = JSON.parse(values[i][j])
            break
          default:
            newItem[headerKey] = values[i][j]
        }

      } catch (err) {
        console.log(err)
      }
    }
    aboutItems.push(newItem)
  }

  console.log(aboutItems)
  return
}
