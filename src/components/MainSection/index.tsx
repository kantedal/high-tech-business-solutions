import { StyledMainSectionDiv } from './styles'
import * as React from 'react'
import { CSSProperties } from 'react'
import { Grid, Row } from 'react-flexbox-grid'
import { TransitionGroup } from 'react-transition-group'

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
    isMobile: boolean
    allowedPortfolioItems: number
  }
  export interface State {}
}

export class MainSection extends React.Component<MainSection.Props, MainSection.State> {
  
  render() {
    const { activePortfolioItem, activePortfolioItems, openPortfolioItem, closePortfolioItem, filterByPortfolioCategory, 
      portfolioFilter, allowedPortfolioItems, isMobile } = this.props

    // let itemCount = 0
    // const portfolioFilterHandle = (portfolioItem: IPortfolioItem) => {
    //   if (itemCount >= allowedPortfolioItems) {
    //     return false
    //   }
    //   if (portfolioFilter != null) {
    //     for (const portfolioCat of portfolioItem.tags) {
    //       if (portfolioCat === Categories[portfolioFilter]) {
    //         itemCount++
    //         return true
    //       }
    //     }
    //     return false
    //   }
    //   itemCount++
    //   return true
    // }

    // const portfolioSort = (a: IPortfolioItem, b: IPortfolioItem) => {
    //   if (a.weight === b.weight) {
    //     return a.header > b.header ? -1.0 : 1.0
    //   }
    //   return a.weight > b.weight ? -1.0 : 1.0
    // }

    // const items = portfolioItems.sort(portfolioSort).filter(portfolioFilterHandle)

    console.log(activePortfolioItems.length)
    
    const portfolioComponents = activePortfolioItems
      .map((portfolioItem: IPortfolioItem, index: number) => {
        const animationDelay = (index) * 150
        return <PortfolioItem key={portfolioItem.header + index} delay={animationDelay} portfolioItem={portfolioItem} isMobile={isMobile} portfolioItemClick={openPortfolioItem}/>
      })
      
    return (
      <StyledMainSectionDiv>
        <PortfolioItemModal portfolioItem={activePortfolioItem} isOpen={activePortfolioItem != null} closeModal={closePortfolioItem} isMobile={isMobile}/>
        <FilterPanel portfolioFilter={portfolioFilter} filterByPortfolioCategory={filterByPortfolioCategory} />
        <Grid fluid={true} className={style.main}>
          <Row className={style.presentationRow}>
            <TransitionGroup appear={true}>
              {portfolioComponents}
            </TransitionGroup>
          </Row>
          {/* <Row>Loading</Row> */}
        </Grid>
      </StyledMainSectionDiv>
    )
  }
}
