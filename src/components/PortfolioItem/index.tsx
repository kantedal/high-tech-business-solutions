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
    const {header} = this.props.portfolioItem;

    return (

      <Grid fluid>
        <Row className={style.presentationRow}>
          <Col xs={6} md={3}>
            {header}
          </Col> 
        </Row>
      </Grid>

    )
  }
}
