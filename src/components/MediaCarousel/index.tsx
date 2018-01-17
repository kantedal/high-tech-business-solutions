// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import * as React from 'react'
import * as style from './style.css'
import { Carousel } from 'react-responsive-carousel'
import * as styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { IMedia } from '../../portfolio'

export namespace MediaCarousel {
  export interface Props {
    medias: IMedia[]
    onChange?: () => void
    onClickItem?: () => void
    onClickThumb?: () => void
  }
  export interface State { }
}

export class MediaCarousel extends React.Component<MediaCarousel.Props, MediaCarousel.State> {
  render() {
    const { medias, onChange, onClickItem, onClickThumb } = this.props

    const carouselImages = medias.map((media: IMedia, index: number) => (
      <div className={style.mediaHolder} key={index}>
        {this.carouselItem(media)}
        {this.legendItem(media.description)}
      </div >

    ))
    return (
      <Carousel showThumbs={false} useKeyboardArrows={true} showStatus={false} autoPlay={false} emulateTouch={true}>
        {carouselImages}
      </Carousel>
    )
  }

  private legendItem(description: string) {
    if (description) {
      return  <p className='legend'>{description}</p>
    }
  }

  private carouselItem(media: IMedia) {
    if (media.mediaType === 'IMAGE') {
      return <img src={media.src} />
    } else {
      return <iframe className={style.modalVideo} src={media.src} />
    }
  }
}
