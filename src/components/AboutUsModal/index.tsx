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

export namespace AboutUsModal {
  export interface Props {
    isMobile: boolean,
    isOpen: boolean
    closeModal: () => void
    aboutData: IAbout[]
  }
  export interface State {
    isVisible: boolean
  }
}
export class AboutUsModal extends React.Component<AboutUsModal.Props, AboutUsModal.State> {

  constructor(props: AboutUsModal.Props) {
    super(props)
    this.state = { isVisible: false }
  }

  render() {
    const { isOpen, closeModal, isMobile, aboutData } = this.props
    const bgAlpha = this.state.isVisible ? '0.5' : '0.0'
    const customStyles = {
      content: {
        background: 'transparent',
        border: 'none',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        margin: '0px',
        padding: '0px',
        width: '100%',
        height: '100%',

      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, ' + bgAlpha + ')',
        transition: 'background-color 300ms ease'
      }
    }

    const close = () => {
      closeModal()
      this.setState({ ...this.state, isVisible: false })
    }

    return (
      <div>
        <ReactModal
          isOpen={isOpen}
          onRequestClose={close}
          onAfterOpen={() => this.setState({ ...this.state, isVisible: true })}
          shouldCloseOnOverlayClick={true}
          style={customStyles}
          closeTimeoutMS={100}
          contentLabel='Modal'
        >
          <AboutUsContainer isOpen={this.state.isVisible} isMobile={isMobile} >
            <Grid className={style.presentationGrid} fluid={true}>
              {this.renderAboutUsBoxes(aboutData)}
            </Grid>
          </AboutUsContainer>
        </ReactModal>
      </div>
    )
  }

  private renderAboutUsBoxes(aboutData: IAbout[]) {

    if (aboutData.length !== 0) {
      return (
        <Row around='xl'>
          <Col sm={6}>
            <AboutUsBox
              about={aboutData[0]}
              isMobile={false}
              imagePositionUpdated={(x: number, y: number) => console.log('About us: Simon', x, y)}
            />
          </Col>
          <Col sm={6}>
            <AboutUsBox
              about={aboutData[1]}
              isMobile={false}
              imagePositionUpdated={(x: number, y: number) => console.log('About us: Filip', x, y)}
            />
          </Col>
        </Row>

      )
    }
  }
}

ReactModal.setAppElement('#root')
