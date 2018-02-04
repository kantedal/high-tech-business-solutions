import * as React from 'react'
import { isMobile } from 'react-device-detect'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import { Header } from '../../components/Header'
import { MainSection } from '../../components/MainSection'
import { MobileHeader } from '../../components/MobileHeader'
import { Categories, IPortfolioItem, portfolioItems } from '../../portfolio'
import * as style from './styles/style.css'

export namespace App {
  export interface Props {}
  export interface State {
    activePortfolioItem: IPortfolioItem
    filterPortfolioItemBy: Categories
    pageLoading: boolean
    portfolioItemsLoading: boolean
    maxPortfolioItems: number
    activePortfolioItems: IPortfolioItem[]
  }
}

export default class App extends React.Component<App.Props, App.State> {

  constructor(props: App.Props) {
    super(props)
    this.state = {
      activePortfolioItem: null,
      filterPortfolioItemBy: null,
      pageLoading: true,
      portfolioItemsLoading: false,
      maxPortfolioItems: 26,
      activePortfolioItems: this.filterPortfilioItems(null),
    }
  }

  render() {
    const { 
      pageLoading, maxPortfolioItems, activePortfolioItem, 
      filterPortfolioItemBy, activePortfolioItems 
    } = this.state

    const filterHandle = (category: Categories) => {
      this.setState({ ...this.state, filterPortfolioItemBy: category, portfolioItemsLoading: true, activePortfolioItems: this.filterPortfilioItems(category) })
    }

    const mainSection = (
      <MainSection 
        activePortfolioItem={activePortfolioItem}
        openPortfolioItem={(portfolioItem: IPortfolioItem) => this.setState({ ...this.state, activePortfolioItem: portfolioItem })}
        closePortfolioItem={() => this.setState({ ...this.state, activePortfolioItem: null })}
        filterByPortfolioCategory={filterHandle}
        portfolioFilter={filterPortfolioItemBy}
        activePortfolioItems={activePortfolioItems}
        allowedPortfolioItems={maxPortfolioItems}
        isMobile={isMobile}
      />
    )

    return (
      <ParallaxProvider>
        <div id='bodyHolder' className={style.appContainerStyle}>
          {!isMobile && (
            <div>
              <Parallax offsetYMin={-100} offsetYMax={100} slowerScrollRate={true}>
                <Header active={true} isMobile={isMobile} />
              </Parallax>
              <Parallax>
                {mainSection}
              </Parallax>
            </div>            
          )}
          
          {isMobile && (
            <div>
              <MobileHeader active={true} isMobile={isMobile}/>
              {mainSection}
            </div>            
          )}
        </div>
      </ParallaxProvider>
    )
  }

  filterPortfilioItems(category?: any, maxItems?: number) {
    const cat = category !== 'undefined' ? category : this.state.filterPortfolioItemBy

    let itemCount = 0
    const portfolioFilterHandle = (portfolioItem: IPortfolioItem) => {
      if (cat != null) {
        for (const portfolioCat of portfolioItem.tags) {
          if (portfolioCat === Categories[cat]) {
            itemCount++
            return true
          }
        }
        return false
      }
      itemCount++
      return true
    }

    const portfolioSort = (a: IPortfolioItem, b: IPortfolioItem) => {
      if (a.weight === b.weight) {
        return a.header < b.header ? -1.0 : 1.0
      }
      return a.weight > b.weight ? -1.0 : 1.0
    }

    return portfolioItems.sort(portfolioSort).filter(portfolioFilterHandle)
  }

}

const AppContainerStyle: React.CSSProperties = {
  background: 'rgb(107, 224, 163)',
  position: 'absolute',
  width: '100%',
  minHeight: '100%'
}
