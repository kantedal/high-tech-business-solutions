import * as React from 'react'

import { IPortfolioItem } from '../../portfolio'
import * as style from './style.css'

const defaultStyle = {
  transition: `opacity 500ms, transform 500ms`,
  opacity: 0,
  transform: 'translateY(100px)',
  width: 'calc(100% - 14px)'
}

const transitionStyles = {
  entering: { opacity: 0, transform: 'translateY(20px)' },
  entered:  { opacity: 1, transform: 'translateY(0px)' },
  exiting: { opacity: 0, transform: 'translateY(20px)' },
  exited:  { opacity: 0, transform: 'translateY(20px)' },
}

export namespace PortfolioItemContent {
  export interface Props {
    portfolioItem: IPortfolioItem
    isMobile: boolean
    animationState: string
    onLoaded: () => void
    portfolioItemClick: (portfolioItem: IPortfolioItem) => void
  }
  export interface State {}
}

export class PortfolioItemContent extends React.Component<PortfolioItemContent.Props, PortfolioItemContent.State> {
  render() {
    const { portfolioItem, isMobile, portfolioItemClick, animationState } = this.props
    const portfolioClick = () => portfolioItemClick(portfolioItem)
    // console.log(this.props.portfolioItem.header, animationState)
    return (
      <div className={isMobile ? style.portfolioItemContainerMobile : style.portfolioItemContainer} style={{ ...defaultStyle, ...transitionStyles[animationState] }} >
        <div className={style.portfolioItemForeground} />
        <img className={style.portfolioItemImage} src={portfolioItem.coverImage} onClick={portfolioClick} />
        <div className={style.header} onClick={portfolioClick}>{portfolioItem.header}</div>
        <div className={style.portfolioItemDescription}>{portfolioItem.shortDescription}</div>
      </div> 
    )
  }

  componentDidMount() {
    this.props.onLoaded()
  }
}
