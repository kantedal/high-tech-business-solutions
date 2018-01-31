import * as _ from 'lodash'
import * as React from 'react'
import { isMobile } from 'react-device-detect'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import { Header } from '../../components/Header'
import { MainSection } from '../../components/MainSection'
import { MobileHeader } from '../../components/MobileHeader'
import { Categories, IPortfolioItem, portfolioItems } from '../../portfolio'
import { StyledLoadingComponent, StyledLoadingText } from './styles'
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
      maxPortfolioItems: 6,
      activePortfolioItems: [],
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
          <StyledLoadingComponent isLoading={pageLoading} > <StyledLoadingText> LOADING </StyledLoadingText> </StyledLoadingComponent>

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
    const max = maxItems ? maxItems : this.state.maxPortfolioItems

    let itemCount = 0
    const portfolioFilterHandle = (portfolioItem: IPortfolioItem) => {
      if (itemCount >= max) {
        return false
      }
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

  loadPortfolioItems() {
    const newMax = Math.min(this.state.maxPortfolioItems + 3, portfolioItems.length)
    const items = this.filterPortfilioItems(this.state.filterPortfolioItemBy, newMax)
    this.setState({ 
      ...this.state,
      portfolioItemsLoading: true,
      maxPortfolioItems: newMax,
      activePortfolioItems: items
    })
  }

  componentDidMount() {
    setTimeout(() => this.setState({ ...this.state, pageLoading: false }), 2000)

    const checkScroll = () => {
      const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight
      const body = document.body
      const html = document.documentElement
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight)
      const windowBottom = windowHeight + window.pageYOffset
      if (windowBottom >= docHeight) {
        this.loadPortfolioItems()
      }
    }

    window.addEventListener('scroll', _.throttle(checkScroll, 200))
    this.loadPortfolioItems()
  }
}

const AppContainerStyle: React.CSSProperties = {
  background: 'rgb(107, 224, 163)',
  position: 'absolute',
  width: '100%',
  minHeight: '100%'
}
