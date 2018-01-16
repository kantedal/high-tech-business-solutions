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
const ScrollAnimation = require('react-animate-on-scroll')

export namespace App {
  export interface Props { // extends RouteComponentProps<void> {
    activePortfolioItem: IPortfolioItem
    filterPortfolioItemBy: Categories
    actions: typeof AppActions
   }
  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component<App.Props, App.State> {

  render() {
    const { activePortfolioItem, actions, filterPortfolioItemBy, children, actions: { backToMenu } } = this.props
    console.log(ScrollAnimation)
    return (
      <div id='bodyHolder' style={AppContainerStyle}>
        <Link activeClass='active' to='test1' spy={true} smooth={true} offset={50} duration={500} onSetActive={() => console.log('now this is active')}>
          Test 1
        </Link>
        <Header  />
        <MainSection 
          activePortfolioItem={activePortfolioItem}
          openPortfolioItem={actions.openPortfolioItem}
          closePortfolioItem={actions.closePortfolioItem}
          filterByPortfolioCategory={actions.filterByPortfolioCategory}
          portfolioFilter={filterPortfolioItemBy}
        />

        <ScrollAnimation animateIn='fadeIn'>
          <div style={{ width: '100px', height: '100px', background: '#f0f' }}>
            Heja blåvitt
          </div>
        </ScrollAnimation>

        <Footer />
      </div>
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
  position: 'absolute',
  width: '100%',
  minHeight: '100%',
  // background: '#353999'
}

export default withRouter(App)
