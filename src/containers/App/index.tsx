import * as React from 'react'
import { isMobile } from 'react-device-detect'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import { Header } from '../../components/Header'
import { MainSection } from '../../components/MainSection'
import { MobileHeader } from '../../components/MobileHeader'
import { Categories, IPortfolioItem, portfolioItems, defaultPortfolioItem, loadPortfolioItems } from '../../portfolio'
import { loadAboutData } from '../../about'
import * as style from './styles/style.css'
import { PortfolioItemModal } from '../../components/PortfolioItemModal/index'
import { AboutUsModal } from '../../components/AboutUsModal/index'
import { StyledLoadingText, StyledLoadingComponent } from './styles/index'

export namespace App {
  export interface Props { }
  export interface State {
    activePortfolioItem: IPortfolioItem
    portfolioModalOpen: boolean
    aboutUsModalOpen: boolean
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
      activePortfolioItem: defaultPortfolioItem,
      portfolioModalOpen: false,
      aboutUsModalOpen: false,
      filterPortfolioItemBy: null,
      pageLoading: true,
      portfolioItemsLoading: true,
      maxPortfolioItems: 26,
      activePortfolioItems: this.filterPortfilioItems(null),
    }
  }

  render() {
    const {
      pageLoading, maxPortfolioItems, activePortfolioItem, portfolioItemsLoading,
      filterPortfolioItemBy, activePortfolioItems, portfolioModalOpen, aboutUsModalOpen
    } = this.state

    const filterHandle = (category: Categories) => {
      this.setState({ ...this.state, filterPortfolioItemBy: category, activePortfolioItems: this.filterPortfilioItems(category) })
    }

    const mainSection = !portfolioItemsLoading ? (
      <MainSection
        openPortfolioItem={(portfolioItem: IPortfolioItem) => this.setState({ ...this.state, portfolioModalOpen: true, activePortfolioItem: portfolioItem })}
        filterByPortfolioCategory={filterHandle}
        portfolioFilter={filterPortfolioItemBy}
        activePortfolioItems={activePortfolioItems}
        allowedPortfolioItems={maxPortfolioItems}
        isMobile={isMobile}
      />
    ) : <StyledLoadingComponent><StyledLoadingText>Loading</StyledLoadingText></StyledLoadingComponent>

    return (
      <ParallaxProvider>
        <div id='bodyHolder' className={style.appContainerStyle}>
        <PortfolioItemModal
            portfolioItem={activePortfolioItem}
            isOpen={portfolioModalOpen}
            closeModal={() => this.setState({ ...this.state, portfolioModalOpen: false })}
            isMobile={isMobile}
          />

          <AboutUsModal
            isOpen={aboutUsModalOpen}
            closeModal={() => this.setState({ ...this.state, aboutUsModalOpen: false })}
            isMobile={isMobile}
          />
          {!isMobile && (
            <div>
              <Parallax offsetYMin={-100} offsetYMax={100} slowerScrollRate={true}>
                <Header
                  active={true}
                  isMobile={isMobile}
                  openAboutUsModal={() => this.setState({ ...this.state, aboutUsModalOpen: true })}
                />
              </Parallax>
              <Parallax>
                {mainSection}
              </Parallax>
            </div>
          )}

          {isMobile && (
            <div>
              <MobileHeader active={true} isMobile={isMobile} />
              {mainSection}
            </div>
          )}
        </div>
      </ParallaxProvider>
    )
  }

  componentWillMount() {
    loadPortfolioItems().then(() => this.setState({ ...this.state, portfolioItemsLoading: false, activePortfolioItems: this.filterPortfilioItems(null) }))
    loadAboutData()
  }

  filterPortfilioItems(category?: any, maxItems?: number) {
    const cat = category !== 'undefined' ? category : this.state.filterPortfolioItemBy

    const portfolioFilterHandle = (portfolioItem: IPortfolioItem) => {
      if (cat != null) {
        for (const portfolioCat of portfolioItem.tags) {
          if (Categories[portfolioCat] === Categories[cat]) {
            return true
          }
        }
        return false
      }
      return true
    }

    const portfolioSort = (a: IPortfolioItem, b: IPortfolioItem) => {
      if (a.weight === b.weight) {
        return a.header < b.header ? -1.0 : 1.0
      }
      return a.weight > b.weight ? -1.0 : 1.0
    }

    return portfolioItems.filter(portfolioFilterHandle).sort(portfolioSort)
  }

}

const AppContainerStyle: React.CSSProperties = {
  background: 'rgb(107, 224, 163)',
  position: 'absolute',
  width: '100%',
  minHeight: '100%'
}
