import { StyledMainSectionDiv } from './styles'
import * as React from 'react'
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
    allowedPortfolioItems: number
  }
  export interface State {}
}

export class MainSection extends React.Component<MainSection.Props, MainSection.State> {
  
  render() {
    const { activePortfolioItem, openPortfolioItem, closePortfolioItem, filterByPortfolioCategory, portfolioFilter, allowedPortfolioItems } = this.props

    let itemCount = 0
    const portfolioFilterHandle = (portfolioItem: IPortfolioItem) => {
      if (itemCount >= allowedPortfolioItems) {
        return false
      }
      if (portfolioFilter != null) {
        for (const portfolioCat of portfolioItem.tags) {
          if (portfolioCat === Categories[portfolioFilter]) {
            itemCount++
            return true
          }
        }
        return false
      }
      itemCount++
      return true
    }

    const portfolioComponents = portfolioItems
      .sort((a: IPortfolioItem, b: IPortfolioItem) => a.weight > b.weight ? -1.0 : 1.0)            
      .filter(portfolioFilterHandle)    
      .map((portfolioItem: IPortfolioItem, index: number) => <PortfolioItem key={index} portfolioItem={portfolioItem} portfolioItemClick={openPortfolioItem}/>)
      
    return (
      <StyledMainSectionDiv>
        <PortfolioItemModal portfolioItem={activePortfolioItem} isOpen={activePortfolioItem != null} closeModal={closePortfolioItem}/>
        <FilterPanel portfolioFilter={portfolioFilter} filterByPortfolioCategory={filterByPortfolioCategory} />
        <Grid fluid={true} className={style.main}>
          <Row className={style.presentationRow}>
            {portfolioComponents}
          </Row>
        </Grid>
      </StyledMainSectionDiv>
    )
  }
}
