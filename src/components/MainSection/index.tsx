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
    const portfolioComponents = portfolioItems.map((portfolioItem: IPortfolioItem, index: number) => <PortfolioItem key={index} portfolioItem={portfolioItem} />)

    return (
      <Grid fluid className={style.main}>
        <Row className={style.presentationRow}>
          {portfolioComponents}
        </Row>
      </Grid>
    )
  }
}