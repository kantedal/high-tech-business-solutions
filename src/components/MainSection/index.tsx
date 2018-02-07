import * as React from 'react'
import { CSSProperties } from 'react'
import { Grid, Row } from 'react-flexbox-grid'

import { Categories, IPortfolioItem } from '../../portfolio'
import { FilterPanel } from '../FilterPanel'
import { PortfolioItem } from '../PortfolioItem'
import * as style from './style.css'
import { StyledMainSectionDiv } from './styles'

export namespace MainSection {
  export interface Props {
    activePortfolioItems: IPortfolioItem[]
    openPortfolioItem: (portfolioItem: IPortfolioItem) => void
    filterByPortfolioCategory: (category: string) => void
    portfolioFilter: Categories
    isMobile: boolean
    allowedPortfolioItems: number
  }
  export interface State {}
}

export class MainSection extends React.Component<MainSection.Props, MainSection.State> {
  
  render() {
    const { activePortfolioItems, openPortfolioItem, filterByPortfolioCategory, 
      portfolioFilter, allowedPortfolioItems, isMobile } = this.props

    const portfolioComponents = activePortfolioItems
      .map((portfolioItem: IPortfolioItem, index: number) => {
        const animationDelay = (index) * 150
        return <PortfolioItem key={portfolioItem.header + index} delay={animationDelay} portfolioItem={portfolioItem} isMobile={isMobile} portfolioItemClick={openPortfolioItem}/>
      })
      
    return (
      <StyledMainSectionDiv>
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
