import * as React from 'react'
import * as style from './style.css'
import { portfolioItems, IPortfolioItem } from '../../portfolio'
import { GridList, GridListTile } from 'material-ui'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Transition } from 'react-transition-group'

const defaultStyle = {
  transition: `opacity 500ms, transform 500ms`,
  opacity: 0,
  transform: 'translateY(100px)',
}

const transitionStyles = {
  entering: { opacity: 0, transform: 'translateY(20px)' },
  entered:  { opacity: 1, transform: 'translateY(0px)' },
  exiting: { opacity: 0, transform: 'translateY(20px)' },
  exited:  { opacity: 0, transform: 'translateY(20px)' },
}

export namespace PortfolioItem {
  export interface Props {
    portfolioItem: IPortfolioItem
    delay: number
    show: boolean
    portfolioItemClick: (portfolioItem: IPortfolioItem) => void 
    key: any
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

  // style={{ ...defaultStyle, ...transitionStyles[state] }}

  render() {
    const { portfolioItem, portfolioItemClick, delay, key } = this.props
    const portfolioClick = () => portfolioItemClick(portfolioItem)
    return (
      <Transition timeout={delay} {...this.props}>
        {(state) => {
          return (
            <Column xs={12} sm={6} md={6} lg={6} xl={4} className={style.portfolioItemContainer} style={{ ...defaultStyle, ...transitionStyles[state] }}>
              <div className={style.portfolioItemForeground} />
              <img className={style.portfolioItemImage} src={portfolioItem.coverImage} onClick={portfolioClick}/> 
              <div className={style.header} onClick={portfolioClick}>{portfolioItem.header}</div>
              <div className={style.portfolioItemDescription}>{portfolioItem.shortDescription}</div>
            </Column>
          )
        }}
      </Transition>
    )
  }

  componentDidMount() {
    this.setState({ ...this.state, show: true })
  }
}
