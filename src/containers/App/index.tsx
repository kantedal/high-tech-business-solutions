import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import * as AppActions from '../../actions/app'
import { Footer, Header, MainSection } from '../../components'
import { Categories, IPortfolioItem } from '../../portfolio'
import { RootState } from '../../reducers'
import * as style from './style.css'
import styled, { keyframes } from 'styled-components'
import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect'
import AddIcon from 'material-ui-icons/Add'

const ScrollAnimation = require('react-animate-on-scroll')
// const ScrollAnimation = require('react-animate-on-scroll')
import * as _ from 'lodash'
import { SmallHeader } from '../../components/SmallHeader/index'
import { initThreeBackground } from '../../background'
import { MobileHeader } from '../../components/MobileHeader/index';
import { Button } from 'material-ui';

export namespace App {
  export interface Props { // extends RouteComponentProps<void> {
    activePortfolioItem: IPortfolioItem
    filterPortfolioItemBy: Categories
    actions: typeof AppActions
   }
  export interface State {
    headerActive: boolean
    contentActive: boolean
    scrollY: number
    isLoading: boolean
  }
}

const LoadingTextAnimation = keyframes`
  0% { transform: scale(1.0); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1.0); }
`

const LoadingComponent: any = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: ${({isLoading}: any) => isLoading ? 1 : 0};
  pointer-events: ${({isLoading}: any) => isLoading ? 'auto' : 'none'};

  transition: opacity 0.5s;
  z-index: 1000;
`

const LoadingText: any = styled.div`
  font-family: 'Fugaz One';
  font-size: 5vw;
  text-align: center;
  margin-top: 45vh;
  color: rgb(70, 231, 153);
  animation: ${LoadingTextAnimation} 1s ease infinite;
`

@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component<App.Props, App.State> {

  constructor(props: App.Props) {
    super(props)
    this.state = { headerActive: true, contentActive: false, scrollY: 0, isLoading: true }
  }

  render() {
    const { activePortfolioItem, actions, filterPortfolioItemBy, children, actions: { backToMenu } } = this.props
    return (
      <ParallaxProvider>
        <div id='bodyHolder' style={AppContainerStyle}>
          <LoadingComponent isLoading={this.state.isLoading} > <LoadingText> LOADING </LoadingText> </LoadingComponent>
          {/* <SmallHeader isActive={this.state.contentActive} /> */}

          {!isMobile && (
            <div>
              <Parallax
                offsetYMin={-100}
                offsetYMax={100}
                slowerScrollRate={true}
              >
                <Header 
                  active={this.state.headerActive}
                  isMobile={isMobile}
                />
              </Parallax>
              <Parallax>
                <MainSection 
                  activePortfolioItem={activePortfolioItem}
                  openPortfolioItem={actions.openPortfolioItem}
                  closePortfolioItem={actions.closePortfolioItem}
                  filterByPortfolioCategory={actions.filterByPortfolioCategory}
                  portfolioFilter={filterPortfolioItemBy}
                  isMobile={isMobile}
                />
              </Parallax>
            </div>            
          )}
          
          {isMobile && (
            <div>
              <MobileHeader 
                active={this.state.headerActive}
                isMobile={isMobile}
              />
              <MainSection 
                activePortfolioItem={activePortfolioItem}
                openPortfolioItem={actions.openPortfolioItem}
                closePortfolioItem={actions.closePortfolioItem}
                filterByPortfolioCategory={actions.filterByPortfolioCategory}
                portfolioFilter={filterPortfolioItemBy}
                isMobile={isMobile}
                />
            </div>            
          )}
  
          {/* <Footer /> */}
        </div>
      </ParallaxProvider>
    )
  }

  componentDidMount() {
    setTimeout(() => this.setState({ ...this.state, isLoading: false }), 2000)
  }
}

function mapStateToProps(state: RootState) {
  return {
    todos: state.todos,
    activePortfolioItem: state.app.activePortfolioItem,
    filterPortfolioItemBy: state.app.filterPortfolioItemBy
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

export default withRouter(App)
