import { PortfolioItemModal } from '../PortfolioItemModal'
import { PortfolioItem } from '../PortfolioItem';
import * as React from 'react'
import { CSSProperties } from 'react'
import * as style from './style.css'
import { portfolioItems, IPortfolioItem } from '../../portfolio'
import { GridList, GridListTile } from 'material-ui/GridList'
import { Grid, Row, Col } from 'react-flexbox-grid'

export namespace MainSection {
  export interface Props {
    activePortfolioItem: IPortfolioItem
    openPortfolioItem: (portfolioItem: IPortfolioItem) => void
    closePortfolioItem: () => void 
  }
  export interface State { }
}

export class MainSection extends React.Component<MainSection.Props, MainSection.State> {
  
  render() {
    const { activePortfolioItem, openPortfolioItem, closePortfolioItem } = this.props
    
    const portfolioComponents = portfolioItems.map((portfolioItem: IPortfolioItem, index: number) => (
      <PortfolioItem key={index} portfolioItem={portfolioItem} portfolioItemClick={openPortfolioItem}/>
    ))

    return (
      <div>
        <PortfolioItemModal portfolioItem={activePortfolioItem} isOpen={activePortfolioItem != null} closeModal={closePortfolioItem}/>
        <Grid fluid className={style.main}>
          <Row className={style.presentationRow}>
            {portfolioComponents}
          </Row>
        </Grid>
      </div>
    )
  }
}