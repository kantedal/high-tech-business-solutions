import * as React from 'react'
import { CSSProperties } from 'react'
import * as style from './style.css'
import { portfolioItems, IPortfolioItem } from '../../portfolio'
import { GridList, GridListTile } from 'material-ui/GridList'
import { Grid, Row, Col } from 'react-flexbox-grid'

export namespace PortfolioItem {
  export interface Props {
    portfolioItem: IPortfolioItem
  }
  export interface State { }
}

export class PortfolioItem extends React.Component<PortfolioItem.Props, PortfolioItem.State> {
  render() {
    const portfolioItem = this.props.portfolioItem

    return (

      <Col xs={6} md={3} className={style.container}>
        <img className={style.image} src={portfolioItem.imagePaths[0]}/> 
        <div className={style.header}>{portfolioItem.header}</div>
        <div className={style.description}>{portfolioItem.description}</div>
      </Col> 
    )
  }
}
