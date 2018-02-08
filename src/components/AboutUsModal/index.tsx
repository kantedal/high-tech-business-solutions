import * as React from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'
import * as ReactModal from 'react-modal'

import { IAbout } from '../../about'
import { AboutUsBox } from '../AboutUsBox'
import { headerImage1, headerImage2 } from '../Header'
import { StyledPresentationImage } from '../PresentationBox/styles'
import { AboutUsContainer } from './styles'
import * as style from './styles/style.css'

const RowComp: any = Row

const calculateAbsolutePostion = (element: any, scale?: number, yOffet?: number): { x: number, y: number }  => {
  const rect = element.getBoundingClientRect()

  if (scale) {
    rect.x = rect.x + (scale * 154 - 154) / 2
    rect.y = rect.y + (scale * 154 - 154) / 2
  }

  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop + (yOffet ? yOffet : 0)

  return { x: rect.x + scrollLeft, y: rect.y + scrollTop }
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
    showAboutUsBox: boolean
  }
}
export class AboutUsModal extends React.Component<AboutUsModal.Props, AboutUsModal.State> {
  private _imagePos1: { x: number, y: number }
  private _imagePos2: { x: number, y: number }
  private _imageElement1: any
  private _imageElement2: any
  private _modalElement: any

  constructor(props: AboutUsModal.Props) {
    super(props)
    this.state = { 
      isVisible: false,
      inited: false,
      showAboutUsBox: false,
    }
  }

  render() {
    const { isOpen, closeModal, isMobile, aboutData } = this.props
    const { inited, isVisible, showAboutUsBox } = this.state

    const bgAlpha = this.state.isVisible ? '0.9' : '0.0'
    const customStyles = {
      content: { 
        background: 'transparent',border: 'none', top: '0px', left: '0px', right: '0px', bottom: '0px',
        margin: '0px', padding: '0px', width: '100%', height: '100%', overflow: 'hidden' 
      },
      overlay: { backgroundColor: 'rgba(0, 0, 0, ' + bgAlpha + ')', transition: 'background-color 300ms ease' }
    }

    const close = () => {
      closeModal()
      this.setState({ ...this.state, isVisible: false, inited: false, showAboutUsBox: false })
      
      const pos1 = calculateAbsolutePostion(this._imageElement1, 1.3, this._modalElement.scrollTop)
      const origPos1 = calculateAbsolutePostion(headerImage1)
      const pos2 = calculateAbsolutePostion(this._imageElement2, 1.3, this._modalElement.scrollTop)
      const origPos2 = calculateAbsolutePostion(headerImage2)

      const translation1 = { x: origPos1.x - pos1.x, y: origPos1.y - pos1.y }
      const translation2 = { x: origPos2.x - pos2.x, y: origPos2.y - pos2.y }

      this._imageElement1.style.transform = `scale(1.0) translate(${translation1.x}px, ${translation1.y}px)`
      this._imageElement2.style.transform = `scale(1.0) translate(${translation2.x}px, ${translation2.y}px)`
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
        setTimeout(() => this.setState({ ...this.state, showAboutUsBox: true }), 550)
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
          <AboutUsContainer 
            inited={inited}
            isOpen={this.state.isVisible}
            isMobile={isMobile}
            onClick={close}
            getRef={(ref: any) => this._modalElement = ref}
            style={{ overflowY: 'scroll'}}
          >
            <Grid className={style.presentationGrid} fluid={true}>
              <RowComp around='xs' style={{ marginTop: '20px'}}>
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
              </RowComp>
              {showAboutUsBox && <div>
                {this.renderAboutUsBoxes(aboutData)}
              </div>}
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
          const translation1 = { x: origPos1.x - pos1.x, y: origPos1.y - pos1.y }
          this._imageElement1.style.transform = `translate(${translation1.x}px, ${translation1.y}px)`

          const translation2 = { x: origPos2.x - pos2.x, y: origPos2.y - pos2.y }
          this._imageElement2.style.transform = `translate(${translation2.x}px, ${translation2.y}px)`
        }
      }
    }
  }

  private renderAboutUsBoxes(aboutData: IAbout[]) {
    if (aboutData.length !== 0) {
      return (
        <RowComp style={{ marginTop: '30px' }} around='xl'>
          <Col sm={6}>
            <AboutUsBox
              about={aboutData[0]}
              isMobile={false}
            />
          </Col>
          <Col sm={6}>
            <AboutUsBox
              about={aboutData[1]}
              isMobile={false}
            />
          </Col>
        </RowComp>
      )
    }
  }
}
