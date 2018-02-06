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
import { PresentationBox } from '../PresentationBox/index'

export namespace AboutUsModal {
  export interface Props {
    isMobile: boolean,
    isOpen: boolean
    closeModal: () => void
    originalImgPos: Array<{ x: number, y: number }>
  }
  export interface State {
    isVisible: boolean
    imagePos: Array<{ x: number, y: number }>
    inited: boolean
    translationImg1: { x: number, y: number }
    translationImg2: { x: number, y: number }
  }
}
export class AboutUsModal extends React.Component<AboutUsModal.Props, AboutUsModal.State> {
  private _imagePos1: { x: number, y: number }
  private _imagePos2: { x: number, y: number }
  private _translation1: { x: number, y: number }
  private _translation2: { x: number, y: number }

  constructor(props: AboutUsModal.Props) {
    super(props)
    this.state = { 
      isVisible: false,
      imagePos: [ { x: 1, y: 0 }, { x: 0, y: 0 } ],
      translationImg1: { x: 0, y: 0 },
      translationImg2: { x: 0, y: 0 },
      inited: false
    }
  }

  render() {
    const { isOpen, closeModal, isMobile, originalImgPos } = this.props
    const { imagePos, inited, translationImg1, translationImg2 } = this.state

    const bgAlpha = this.state.isVisible ? '0.5' : '0.0'
    const customStyles = {
      content: {
        background: 'transparent',
        border: 'none',
        pointerEvents: 'none',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, ' + bgAlpha + ')',
        transition: 'background-color 300ms ease'
      }
    }

    const close = () => {
      closeModal()
      this.setState({ ...this.state, isVisible: false, translationImg1: this._translation1, translationImg2: this._translation2, inited: false })
    }

    return (
      <div>
        <ReactModal
          isOpen={isOpen}
          onRequestClose={close}
          onAfterOpen={() => this.setState({ ...this.state, isVisible: true })}
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
                    style={{ backgroundImage: 'url(./images/simon.jpg)', width: '150px', height: '150px', transform: `translate(${translationImg1.x}px, ${translationImg1.y}px)`}}
                    imagePositionUpdated={(x: number, y: number) => this._imagePos1 = { x, y }}
                  />
                </Col>
                <Col sm={6} md={3}>
                  <StyledPresentationImage
                    isMobile={isMobile}
                    inited={inited}
                    style={{ backgroundImage: 'url(./images/filip.jpg)', width: '154px', height: '154px',  transform: `translate(${translationImg2.x}px, ${translationImg2.y}px)`}}
                    imagePositionUpdated={(x: number, y: number) => this._imagePos2 = { x, y }}
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
    if (this.props.isOpen && this.state.inited === false) {
      setTimeout(() => {
        const { inited } = this.state
        const { originalImgPos } = this.props

        this._translation1 = { 
          x: inited ? originalImgPos[0].x - this._imagePos1.x + 3 : 0,
          y: inited ? originalImgPos[0].y - this._imagePos1.y : 0
        }
    
        this._translation2 = { 
          x: inited ? originalImgPos[1].x - this._imagePos2.x + 6 : 0,
          y: inited ? originalImgPos[1].y - this._imagePos2.y : 0
        }

        this.setState({ ...this.state, inited: true, translationImg1: this._translation1, translationImg2: this._translation2 })
      }, 100)

      setTimeout(() => {
        const translationImg1 = { x: 0, y: 0 }
        const translationImg2 = { x: 0, y: 0 }

        this.setState({ ...this.state, translationImg1, translationImg2 })
      }, 500)
    }
  }
}

// transform: `translate(${translationImg1.x}px, ${translationImg1.y}px)`
