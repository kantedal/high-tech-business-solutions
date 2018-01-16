// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import * as React from 'react'
import * as style from './style.css'
import { Carousel } from 'react-responsive-carousel'
import * as styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

export namespace MediaCarousel {
  export interface Props {
    images: string[]
    onChange?: () => void
    onClickItem?: () => void
    onClickThumb?: () => void
  }
  export interface State { }
}

export class MediaCarousel extends React.Component<MediaCarousel.Props, MediaCarousel.State> {
  render() {
    const { images, onChange, onClickItem, onClickThumb } = this.props
    console.log(styles)
    
    const carouselImages = images.map((imageName: string, index: number) => (
      <div key={index}>
        <img src={imageName}/>
        <p className='legend'>{imageName}</p>
      </div >
    ))
    return (
      <Carousel showThumbs={false} useKeyboardArrows={true} showStatus={false} autoPlay={false} emulateTouch={true}>
        {carouselImages}
      </Carousel>
    )
  }
}

// ReactDOM.render(<MediaCarousel />, document.querySelector('.demo-carousel'))

// Don't forget to include the css in your page

// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

// Using html tag:
// <link rel='stylesheet' href='<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css'/>
