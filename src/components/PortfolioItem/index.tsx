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

$(".container").hover( function () {
  alert("hello");
}, function() {
  alert("And we're out");
});

const onMouseMove = (e) => { 
  const root = document.documentElement

  // var t = $(this);
  // var offset = t.offset();
  // var width = t.width();
  // var height = t.height();
  
  // var centerX = offset.left + width / 2;
  // var centerY = offset.top + height / 2;

  const rotX = 20*((e.pageY - window.innerHeight*0.5)/window.innerHeight);
  const rotY =  -10*((e.pageX - window.innerWidth*0.5)/window.innerHeight);
  root.style.setProperty('--rot-x', rotX.toString() + 'deg')
  root.style.setProperty('--rot-y', rotY.toString() + 'deg')
  // $("." + e.target.className).css({'opacity': '0.3' });
  console.log(e.target.className);
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
