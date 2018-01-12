import * as React from 'react'
// tslint:disable-next-line:no-duplicate-imports
import { CSSProperties } from 'react'
import { Grid, Row } from 'react-flexbox-grid'

import { Categories, IPortfolioItem, portfolioItems } from '../../portfolio'
import { FilterPanel } from '../FilterPanel'
import { PortfolioItem } from '../PortfolioItem'
import { PortfolioItemModal } from '../PortfolioItemModal'
import * as style from './style.css'

export namespace MainSection {
  export interface Props {
    activePortfolioItem: IPortfolioItem
    openPortfolioItem: (portfolioItem: IPortfolioItem) => void
    filterByPortfolioCategory: (category: string) => void
    closePortfolioItem: () => void 
    portfolioFilter: Categories
  }
  export interface State { }
}

export class MainSection extends React.Component<MainSection.Props, MainSection.State> {
  
  render() {
    const { activePortfolioItem, openPortfolioItem, closePortfolioItem, filterByPortfolioCategory, portfolioFilter } = this.props
    const portfolioComponents = portfolioItems
      .map((portfolioItem: IPortfolioItem, index: number) => <PortfolioItem key={index} portfolioItem={portfolioItem} portfolioItemClick={openPortfolioItem}/>)
      // .filter((PortfolioItem: IPortfolioItem, key: any) => )
    return (
      <div>
        <PortfolioItemModal portfolioItem={activePortfolioItem} isOpen={activePortfolioItem != null} closeModal={closePortfolioItem}/>
        <FilterPanel portfolioFilter={portfolioFilter} filterByPortfolioCategory={filterByPortfolioCategory} />
        <Grid fluid={true} className={style.main}>
          <Row className={style.presentationRow}>
            {portfolioComponents}
          </Row>
        </Grid>
      </div>
    )
  }
}
