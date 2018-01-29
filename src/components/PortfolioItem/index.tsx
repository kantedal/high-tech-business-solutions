import * as React from 'react'
import * as style from './style.css'
import { portfolioItems, IPortfolioItem } from '../../portfolio'
import { GridList, GridListTile } from 'material-ui'
import { Grid, Row, Col } from 'react-flexbox-grid'

const onMouseMove = (e) => { 
  const root = document.documentElement
  const parentNode = e.target.parentNode 
  const centerX = parentNode.offsetLeft + parentNode.offsetWidth / 2.0
  const centerY = parentNode.offsetTop + parentNode.offsetHeight / 2.0
  const mouseX = e.pageX 
  const mouseY = e.pageY
  const relativeMouseX = centerX - mouseX
  const relativeMouseY = centerY - mouseY

  const rotX = 10.0 * relativeMouseY / parentNode.offsetTop
  const rotY = -10.0 * relativeMouseX / parentNode.offsetWidth
  root.style.setProperty('--rot-x', rotX.toString() + 'deg')
  root.style.setProperty('--rot-y', rotY.toString() + 'deg')
}

export namespace PortfolioItem {
  export interface Props {
    portfolioItem: IPortfolioItem
    isMobile: boolean
    portfolioItemClick: (portfolioItem: IPortfolioItem) => void 
  }
  export interface State { }
}

export class PortfolioItem extends React.Component<PortfolioItem.Props, PortfolioItem.State> {
  render() {
    const { portfolioItem, isMobile, portfolioItemClick } = this.props
    const portfolioClick = () => portfolioItemClick(portfolioItem)
    return (
      <Col xs={12} sm={6} md={6} lg={6} xl={4} className={isMobile ? style.portfolioItemContainerMobile : style.portfolioItemContainer}>
        <div className={style.portfolioItemForeground} />
        <img className={style.portfolioItemImage} src={portfolioItem.coverImage} onClick={portfolioClick}/> 
        <div className={style.header} onClick={portfolioClick}>{portfolioItem.header}</div>
        <div className={style.portfolioItemDescription}>{portfolioItem.shortDescription}</div>
      </Col> 
    )
  }
}
