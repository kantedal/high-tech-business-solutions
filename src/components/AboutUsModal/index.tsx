import * as React from 'react'
import * as ReactModal from 'react-modal'

import { IPortfolioItem } from '../../portfolio'
import { IconButton } from '../IconButton'
import { MediaCarousel } from '../MediaCarousel'
import * as style from './styles/style.css'
import { AboutUsContainer } from './styles/index'
import { StyledPresentationImage } from '../PresentationBox/styles/index';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { StyledRow } from '../Header/styles/index';
import { PresentationBox } from '../PresentationBox/index';

export namespace AboutUsModal {
  export interface Props {
    isMobile: boolean,
    isOpen: boolean
    closeModal: () => void
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
    const { isOpen, closeModal, isMobile } = this.props

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

              <Row around='xs'>
                <Col sm={6} md={3}>
                  <PresentationBox
                    name={'Simon Hedlund'}
                    imgUrl={'./images/simon.jpg'}
                    linkedInUrl={'https://www.linkedin.com/in/simon-hedlund-a1a656128/'}
                    emailUrl={'sermonhedlund@gmail.com'}
                    githubUrl={'https://github.com/Hedlundaren'}
                    websiteUrl={'http://simonhedlund.github.io'}
                    isMobile={false}
                    imagePositionUpdated={(x: number, y: number) => console.log('Simon', x, y)}
                  />
                </Col>
                <Col sm={6} md={3}>
                  <PresentationBox
                    name={'Filip Kantedal'}
                    imgUrl={'./images/filip.jpg'}
                    linkedInUrl={'https://www.linkedin.com/in/filip-kantedal-33b84240/'}
                    emailUrl={'kantedal@gmail.com'}
                    githubUrl={'https://github.com/kantedal'}
                    websiteUrl={'http://kantedal.se'}
                    isMobile={false}
                    imagePositionUpdated={(x: number, y: number) => console.log('Filip', x, y)}
                  />
                </Col>
              </Row>
            </Grid>
          </AboutUsContainer>
        </ReactModal>
      </div>
    )
  }
}

ReactModal.setAppElement('#root')
