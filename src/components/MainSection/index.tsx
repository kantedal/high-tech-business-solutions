import { PortfolioItem } from '../PortfolioItem';
import * as React from 'react';
import { CSSProperties } from 'react'
import * as style from './style.css';
import { portfolioItems, IPortfolioItem } from '../../portfolio'
import { GridList, GridListTile } from 'material-ui/GridList'
import { Grid, Row, Col } from 'react-flexbox-grid'

export namespace MainSection {
  export interface Props {
    filterOn?: string
  }
  export interface State { }
}

export class MainSection extends React.Component<MainSection.Props, MainSection.State> {

  render() {

    const portfolioComponents = portfolioItems
      .map((portfolioItem: IPortfolioItem) => (
        <PortfolioItem portfolioItem={portfolioItem} />
      ))



    return (

      <div>
        {portfolioComponents}
      </div>
    )
  }
}


//   {tileData.map(tile => (
    //     <GridListTile key={tile.img} cols={tile.cols || 1}>
    //       <img src={tile.img} alt={tile.title} />
    //     </GridListTile>
    //   ))}
