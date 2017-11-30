import * as React from 'react'
import { CSSProperties } from 'react'
import * as style from './style.css'
import { portfolioItems, IPortfolioItem } from '../../portfolio'
import { GridList, GridListTile } from 'material-ui/GridList'

export namespace MainSection {
  export interface Props {
    filterOn?: string
  }
  export interface State {}
}

export class MainSection extends React.Component<MainSection.Props, MainSection.State> {

  render() {
    // const porfolioComponents = portfolioItems
    //   .map((portfolioItem: IPortfolioItem) => (
    //     <div>
    //       {portfolioItem.header}
    //       <img src={portfolioItem.imagePaths[0]} />
    //     </div>
    //   ))
      


    return (

      <GridList cellHeight={160} cols={3}>
        <div > hej</div>
      </GridList>
    )
  }
}


//   {tileData.map(tile => (
    //     <GridListTile key={tile.img} cols={tile.cols || 1}>
    //       <img src={tile.img} alt={tile.title} />
    //     </GridListTile>
    //   ))}
    