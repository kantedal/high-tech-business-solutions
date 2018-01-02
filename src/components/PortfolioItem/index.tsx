import * as React from 'react'
import { CSSProperties } from 'react'
import * as style from './style.css'
import { portfolioItems, IPortfolioItem } from '../../portfolio'
import { GridList, GridListTile } from 'material-ui/GridList'
import { Grid, Row, Col } from 'react-flexbox-grid'

export namespace PortfolioItem {
  export interface Props {
    portfolioItem: IPortfolioItem
  }
  export interface State { }
}

const onMouseMove = (e) => { 
  const root = document.documentElement


  const parentNode = e.target.parentNode 
  const centerX = parentNode.offsetLeft + parentNode.offsetWidth / 2.0
  const centerY = parentNode.offsetTop + parentNode.offsetHeight / 2.0
  const mouseX = e.pageX 
  const mouseY = e.pageY
  const relativeMouseX = centerX - mouseX
  const relativeMouseY = centerY - mouseY

  const rotX = 10.0*relativeMouseY / parentNode.offsetTop
  const rotY = -10.0*relativeMouseX / parentNode.offsetWidth
  root.style.setProperty('--rot-x', rotX.toString() + 'deg')
  root.style.setProperty('--rot-y', rotY.toString() + 'deg')
}

window.addEventListener( 'mousemove', onMouseMove, false );

export class PortfolioItem extends React.Component<PortfolioItem.Props, PortfolioItem.State> {
  render() {
    const portfolioItem = this.props.portfolioItem

    return (

      <Col xs={6} md={3} className={style.container}>
        <img className={style.image} src={portfolioItem.imagePaths[0]}/> 
        <div className={style.header}>{portfolioItem.header}</div>
        <div className={style.description}>{portfolioItem.description}</div>
      </Col> 
    )
  }
}
