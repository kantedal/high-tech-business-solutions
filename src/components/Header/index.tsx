import { StyledHeaderArrow, StyledHeaderDiv, StyledRow } from './styles'
import * as React from 'react'
import { CSSProperties } from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'
import styled, { keyframes } from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import { PresentationBox } from '../PresentationBox/index'
import * as style from './styles/style.css'
import { initThreeBackground } from '../../background'

export namespace Header {
  export interface Props {
    active: boolean
    isMobile: boolean
  }
  export interface State {
  }
}

export class Header extends React.Component<Header.Props, Header.State> {
  private threeContainer: any
  
  render() {
    const { active, isMobile } = this.props
    return (
      <StyledHeaderDiv isMobile={isMobile}>
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
    setTimeout(() => initThreeBackground(this.threeContainer, this.props.isMobile), 2000)
  }
}
