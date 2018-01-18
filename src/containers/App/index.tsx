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

const ScrollAnimation = require('react-animate-on-scroll')
// const ScrollAnimation = require('react-animate-on-scroll')
import * as _ from 'lodash'
import { SmallHeader } from '../../components/SmallHeader/index'
import { initThreeBackground } from '../../background';

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
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component<App.Props, App.State> {

  constructor(props: App.Props) {
    super(props)
    this.state = { headerActive: true, contentActive: false, scrollY: 0 }
  }

  render() {
    const { activePortfolioItem, actions, filterPortfolioItemBy, children, actions: { backToMenu } } = this.props

    return (
      <ParallaxProvider>
        <div id='bodyHolder' style={AppContainerStyle}>
          {/* <SmallHeader isActive={this.state.contentActive} /> */}


          <Parallax
            offsetYMin={-100}
            offsetYMax={100}
            slowerScrollRate={true}
          >
            <Header 
              mainContentActiveChange={(isActive: boolean) => this.setState({ ...this.state, contentActive: isActive})}
              scrollY={this.state.scrollY}
              isActive={this.state.headerActive}
            />
          </Parallax>

          <Parallax>
            <MainSection 
              activePortfolioItem={activePortfolioItem}
              openPortfolioItem={actions.openPortfolioItem}
              closePortfolioItem={actions.closePortfolioItem}
              filterByPortfolioCategory={actions.filterByPortfolioCategory}
              portfolioFilter={filterPortfolioItemBy}
            />
          </Parallax>
  

          {/* <Footer /> */}
        </div>
      </ParallaxProvider>
    )
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
