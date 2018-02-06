import * as React from 'react'
import * as ReactModal from 'react-modal'

import { IPortfolioItem } from '../../portfolio'
import { IconButton } from '../IconButton'
import { MediaCarousel } from '../MediaCarousel'
import * as style from './styles/style.css'
import { AboutUsContainer } from './styles/index'
import { StyledPresentationImage } from '../PresentationBox/styles/index'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { StyledRow } from '../Header/styles/index'
import { AboutUsBox } from '../AboutUsBox/index'
import { IAbout, ISkill } from '../../about'
import { PresentationBox } from '../PresentationBox/index'
import { headerImage1, headerImage2 } from '../Header/index'

const calculateAbsolutePostion = (element: any, scale?: number): { x: number, y: number }  => {
  const rect = element.getBoundingClientRect()

  if (scale) {
    rect.x = rect.x + (scale * 154 - 154) / 2
    rect.y = rect.y + (scale * 154 - 154) / 2
  }

  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return { x: rect.x + scrollLeft, y: rect.y + scrollTop}
}

export namespace AboutUsModal {
  export interface Props {
    isMobile: boolean,
    isOpen: boolean
    closeModal: () => void
    aboutData: IAbout[]
  }
  export interface State {
    isVisible: boolean
    inited: boolean
  }
}
export class AboutUsModal extends React.Component<AboutUsModal.Props, AboutUsModal.State> {
  private _imagePos1: { x: number, y: number }
  private _imagePos2: { x: number, y: number }
  private _translation1: { x: number, y: number } = { x: 0, y: 0 }
  private _translation2: { x: number, y: number }
  private _imageElement1: any
  private _imageElement2: any

  constructor(props: AboutUsModal.Props) {
    super(props)
    this.state = { 
      isVisible: false,
      inited: false
    }
  }

  render() {
    const { isOpen, closeModal, isMobile } = this.props
    const { inited } = this.state

    const bgAlpha = this.state.isVisible ? '0.8' : '0.0'
    const customStyles = {
      content: { background: 'transparent', border: 'none', pointerEvents: 'none', top: '0px', left: '0px', right: '0px', bottom: '0px', },
      overlay: { backgroundColor: 'rgba(0, 0, 0, ' + bgAlpha + ')', transition: 'background-color 500ms ease' }
    }

    const close = () => {
      closeModal()
      this.setState({ ...this.state, isVisible: false, inited: false })
      
      const pos1 = calculateAbsolutePostion(this._imageElement1, 1.3)
      const origPos1 = calculateAbsolutePostion(headerImage1)
      const pos2 = calculateAbsolutePostion(this._imageElement2, 1.3)
      const origPos2 = calculateAbsolutePostion(headerImage2)

      this._translation1 = { x: origPos1.x - pos1.x, y: origPos1.y - pos1.y }
      this._translation2 = { x: origPos2.x - pos2.x, y: origPos2.y - pos2.y }

      this._imageElement1.style.transform = `scale(1.0) translate(${this._translation1.x}px, ${this._translation1.y}px)`
      this._imageElement2.style.transform = `scale(1.0) translate(${this._translation2.x}px, ${this._translation2.y}px)`
    }

    if (isOpen && !inited) {
      if (this._imageElement1) {
        setTimeout(() => {
          this._imageElement1.style.transition = `transform 500ms ease-in-out`
          this._imageElement1.style.transform = `translate(0px, 0px) scale(1.3)`
          this._imageElement2.style.transition = `transform 500ms ease-in-out`
          this._imageElement2.style.transform = `translate(0px, 0px) scale(1.3)`
          this.setState({ ...this.state, inited: true,  isVisible: true })
        }, 50)
      }
    }

    return (
      <div>
        <ReactModal
          isOpen={isOpen}
          onRequestClose={close}
          onAfterOpen={() => this.setState({ ...this.state })}
          shouldCloseOnOverlayClick={true}
          style={customStyles}
          closeTimeoutMS={500}
          contentLabel='Modal'
        >
          <AboutUsContainer inited={inited} isOpen={this.state.isVisible} isMobile={isMobile} >
            <Grid className={style.presentationGrid} fluid={true}>

              <Row around='xs'>
                <Col sm={6} md={3}>
                  <StyledPresentationImage
                    isMobile={isMobile}
                    inited={inited}
                    style={{ backgroundImage: 'url(./images/simon.jpg)', width: '150px', height: '150px' }}
                    getRef={(ref: any) => this._imageElement1 = ref}
                  />
                </Col>
                <Col sm={6} md={3}>
                  <StyledPresentationImage
                    isMobile={isMobile}
                    inited={inited}
                    style={{ backgroundImage: 'url(./images/filip.jpg)', width: '150px', height: '150px' }}
                    getRef={(ref: any) => this._imageElement2 = ref}
                  />
                </Col>
              </Row>
            </Grid>
          </AboutUsContainer>
        </ReactModal>
      </div>
    )
  }

  componentDidUpdate() {
    const { isOpen } = this.props
    const { inited } = this.state

    if (isOpen && !inited) {
      if (this._imageElement1) {
        this._imageElement1.style.transition = ``

        const pos1 = calculateAbsolutePostion(this._imageElement1)
        const origPos1 = calculateAbsolutePostion(headerImage1)

        const pos2 = calculateAbsolutePostion(this._imageElement2)
        const origPos2 = calculateAbsolutePostion(headerImage2)
        
        if (pos1.x !== origPos1.x && pos1.y !== origPos1.y) {
          this._translation1 = { x: origPos1.x - pos1.x, y: origPos1.y - pos1.y }
          this._imageElement1.style.transform = `translate(${this._translation1.x}px, ${this._translation1.y}px)`

          this._translation2 = { x: origPos2.x - pos2.x, y: origPos2.y - pos2.y }
          this._imageElement2.style.transform = `translate(${this._translation2.x}px, ${this._translation2.y}px)`
        }
      }
    }
  }
}
