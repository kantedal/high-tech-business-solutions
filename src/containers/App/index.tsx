import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import * as AppActions from '../../actions/app'
import { Footer, Header, MainSection } from '../../components'
import { Categories, IPortfolioItem } from '../../portfolio'
import { RootState } from '../../reducers'
import * as style from './styles/style.css'
import styled, { keyframes } from 'styled-components'
import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect'
import AddIcon from 'material-ui-icons/Add'

const ScrollAnimation = require('react-animate-on-scroll')
// const ScrollAnimation = require('react-animate-on-scroll')
import * as _ from 'lodash'
import { SmallHeader } from '../../components/SmallHeader/index'
import { initThreeBackground } from '../../background'
import { MobileHeader } from '../../components/MobileHeader/index'
import { Button } from 'material-ui'
import { StyledLoadingComponent, StyledLoadingText } from './styles/index'

export namespace App {
  export interface Props { // extends RouteComponentProps<void> {
    activePortfolioItem: IPortfolioItem
    filterPortfolioItemBy: Categories
    pageLoading: boolean
    portfolioItemsLoading: boolean
    maxPortfolioItems: number
    activePortfolioItems: IPortfolioItem[]
    actions: typeof AppActions
   }
  export interface State {}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component<App.Props, App.State> {

  render() {
    const { 
      pageLoading, maxPortfolioItems, activePortfolioItem, actions, 
      filterPortfolioItemBy, children, activePortfolioItems, actions: { loadPage } 
    } = this.props

    const filterHandle = (category: string) => {
      actions.filterByPortfolioCategory(category)
      actions.loadPortfolioItems(true)      
    }

    const mainSection = (
      <MainSection 
        activePortfolioItem={activePortfolioItem}
        openPortfolioItem={actions.openPortfolioItem}
        closePortfolioItem={actions.closePortfolioItem}
        filterByPortfolioCategory={filterHandle}
        portfolioFilter={filterPortfolioItemBy}
        activePortfolioItems={activePortfolioItems}
        allowedPortfolioItems={maxPortfolioItems}
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
  
          {/* <Footer /> */}
        </div>
      </ParallaxProvider>
    )
  }

  componentDidMount() {
    setTimeout(() => this.props.actions.loadPage(false), 2000)

    const checkScroll = () => {
      const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight
      const body = document.body
      const html = document.documentElement
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight)
      const windowBottom = windowHeight + window.pageYOffset
      if (windowBottom >= docHeight) {
        this.props.actions.loadPortfolioItems(true)
      }
    }

    window.addEventListener('scroll', _.throttle(checkScroll, 200))

    this.props.actions.loadPortfolioItems(true)
  }
}

function mapStateToProps(state: RootState) {
  return {
    activePortfolioItem: state.app.activePortfolioItem,
    filterPortfolioItemBy: state.app.filterPortfolioItemBy,
    portfolioItemsLoading: state.app.portfolioItemsLoading,
    pageLoading: state.app.pageLoading,
    maxPortfolioItems: state.app.maxPortfolioItems,
    activePortfolioItems: state.app.activePortfolioItems
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions as any, dispatch)
  }
}

const AppContainerStyle: React.CSSProperties = {
  background: 'rgb(107, 224, 163)',
  position: 'absolute',
  width: '100%',
  minHeight: '100%'
}
