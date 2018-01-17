import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import * as AppActions from '../../actions/app'
import { Footer, Header, MainSection } from '../../components'
import { Categories, IPortfolioItem } from '../../portfolio'
import { RootState } from '../../reducers'
import * as style from './style.css'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// const ScrollAnimation = require('react-animate-on-scroll')
import * as _ from 'lodash'
import { SmallHeader } from '../../components/SmallHeader/index';

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

{/* <Link 
  to='test1'
  activeClass='activeHeader'
  spy={true}
  smooth={true}
  offset={0}
  duration={500}
>
  test
</Link>  */}

@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component<App.Props, App.State> {

  constructor(props: App.Props) {
    super(props)
    this.state = { headerActive: false, contentActive: false, scrollY: 0 }
  }

  render() {
    const { activePortfolioItem, actions, filterPortfolioItemBy, children, actions: { backToMenu } } = this.props

    return (
      <div id='bodyHolder' style={AppContainerStyle}>
        {/* <SmallHeader isActive={this.state.contentActive} /> */}

        <Element name='headerContent'>
          <Header 
            mainContentActiveChange={(isActive: boolean) => this.setState({ ...this.state, contentActive: isActive})}
            scrollY={this.state.scrollY}
            isActive={this.state.headerActive}
          />
        </Element>
        
        <Element name='mainContent'>
          <MainSection 
            activePortfolioItem={activePortfolioItem}
            openPortfolioItem={actions.openPortfolioItem}
            closePortfolioItem={actions.closePortfolioItem}
            filterByPortfolioCategory={actions.filterByPortfolioCategory}
            portfolioFilter={filterPortfolioItemBy}
          />
        </Element>

        <Link 
          to='headerContent'
          activeClass='activeHeader'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={() => { this.setState({ ...this.state, headerActive: true }); console.log('header active') }}
          onSetInactive={() => { this.setState({ ...this.state, headerActive: false }); console.log('header inactive') }}
        >
          test
        </Link>

        {/* <Footer /> */}
      </div>
    )
  }

  componentDidMount() {
    // window.addEventListener('scroll', _.throttle((e) => {
    //   this.setState({ ...this.state, scrollY: window.pageYOffset, headerActive: window.pageYOffset === 0 })
    // }, 300))

    scrollSpy.update()
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
  position: 'absolute',
  width: '100%',
  minHeight: '100%',
  // background: '#353999'
}

export default withRouter(App)
