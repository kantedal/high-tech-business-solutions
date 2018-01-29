import * as React from 'react'
import * as style from './style.css'
import { portfolioItems, IPortfolioItem } from '../../portfolio'
import { GridList, GridListTile } from 'material-ui'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Transition from 'react-transition-group/Transition'

const defaultStyle = {
  transition: `opacity 500ms, transform 200ms`,
  opacity: 0,
  transform: 'translateY(100px)',
}

const transitionStyles = {
  entering: { opacity: 0, transform: 'translateY(100px)' },
  entered: { opacity: 1, transform: 'translateY(0px)' },
}

export namespace PortfolioItem {
  export interface Props {
    portfolioItem: IPortfolioItem
    isMobile: boolean
    delay: number
    portfolioItemClick: (portfolioItem: IPortfolioItem) => void
  }
  export interface State {
    show: boolean
  }
}

const Column: any = Col

export class PortfolioItem extends React.Component<PortfolioItem.Props, PortfolioItem.State> {

  constructor(props: PortfolioItem.Props) {
    super(props)
    this.state = { show: false }
  }

  render() {
    const { portfolioItem, portfolioItemClick, delay, isMobile } = this.props
    const portfolioClick = () => portfolioItemClick(portfolioItem)
    return (
      <Transition in={this.state.show} timeout={100}>
        {(state) => (
          <Column xs={12} sm={6} md={6} lg={6} xl={4} className={isMobile ? style.portfolioItemContainerMobile : style.portfolioItemContainer}
            style={{ ...defaultStyle, ...transitionStyles[state] }}>
            <div className={style.portfolioItemForeground} />
            <img className={style.portfolioItemImage} src={portfolioItem.coverImage} onClick={portfolioClick} />
            <div className={style.header} onClick={portfolioClick}>{portfolioItem.header}</div>
            <div className={style.portfolioItemDescription}>{portfolioItem.shortDescription}</div>
          </Column>
        )}
      </Transition>
    )
  }

  componentDidMount() {
    this.setState({ ...this.state, show: true })
  }
}
