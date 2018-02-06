import { StyledHeaderArrow, StyledHeaderDiv, StyledRow } from './styles'
import * as React from 'react'
import { CSSProperties } from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'
import styled, { keyframes } from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import { PresentationBox } from '../PresentationBox/index'
import * as style from './styles/style.css'
import { initThreeBackground } from '../../background'
import { IconButton } from '../IconButton/index'

export namespace Header {
  export interface Props {
    active: boolean
    isMobile: boolean
    openAboutUsModal: () => void

  }
  export interface State {
    opacity: number
  }
}

export class Header extends React.Component<Header.Props, Header.State> {
  private threeContainer: any

  constructor(props: Header.Props) {
    super(props)
    this.state = {
      opacity: 0
    }
  }
  
  render() {
    const { active, isMobile, openAboutUsModal } = this.props
    return (
      <StyledHeaderDiv isMobile={isMobile} opacity={this.state.opacity}>
        <canvas
          style={{position: 'absolute', width: '100%', height: '100%'}}
          width={window.innerWidth} height={window.innerHeight}
          ref={(element) => this.threeContainer = element}
        />

        {/* <div className={style.top} /> */}
        <Grid className={style.presentationGrid} fluid={true}>
          <StyledRow center='xs'>
            <Col xs={12} sm={12} md={12} lg={9}>
              <Row center='xs'>
                <Col xs={0}>
                  <p className={style.presentation}>
                    Welcome to our portfolio. We are two programmers and computer-graphics enthusiasts running our own company. 
                    We are looking for freelance projects on half-time. 
                    Do you need help with anything you think we can help you with, please contact us.
                  </p>
                </Col>
              </Row>
              <Row center='xs'>
                <Col xs={0}>
                  <IconButton text={'More Info'} icon={'zmdi zmdi-unfold-more'} color={'#44a07c'} onClick={openAboutUsModal} />
                </Col>
              </Row>
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
              
            </Col>
          </StyledRow>
        </Grid>   
        <div className={style.arrowRow}>
          <StyledHeaderArrow className='zmdi zmdi-chevron-down' />
        </div>

      </StyledHeaderDiv>
    )
  }

  componentDidMount() {
    initThreeBackground(this.threeContainer, this.props.isMobile)
    setTimeout(() => this.setState({ opacity: 1 }))
  }
}
