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
    activePortfolioItems: IPortfolioItem[]
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
    const { activePortfolioItem, activePortfolioItems, openPortfolioItem, closePortfolioItem, filterByPortfolioCategory, portfolioFilter, allowedPortfolioItems } = this.props

    console.log(activePortfolioItems)
    const portfolioComponents = activePortfolioItems
      .map((portfolioItem: IPortfolioItem, index: number) => {
        const animationDelay = (index) * 200
        return <PortfolioItem key={index} delay={animationDelay} portfolioItem={portfolioItem} portfolioItemClick={openPortfolioItem}/>
      })
      
    return (
      <StyledMainSectionDiv>
        <PortfolioItemModal portfolioItem={activePortfolioItem} isOpen={activePortfolioItem != null} closeModal={closePortfolioItem}/>
        <FilterPanel portfolioFilter={portfolioFilter} filterByPortfolioCategory={filterByPortfolioCategory} />
        <Grid fluid={true} className={style.main}>
          <Row className={style.presentationRow}>
            {portfolioComponents}
          </Row>
          {/* <Row>Loading</Row> */}
        </Grid>
      </StyledMainSectionDiv>
    )
  }
}
