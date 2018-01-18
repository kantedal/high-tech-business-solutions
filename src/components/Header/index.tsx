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
    isActive: boolean
    scrollY: number
    mainContentActiveChange: (isActive: boolean) => void
  }
  export interface State {
  }
}

export class Header extends React.Component<Header.Props, Header.State> {
  private threeContainer: any
  
  render() {
    const { isActive, scrollY, mainContentActiveChange } = this.props
    return (
      <StyledHeaderDiv>
        {/* <Parallax
          offsetYMin={-50}
          offsetYMax={50}
          slowerScrollRate={true}
        > */}
          <div ref={(element) => this.threeContainer = element}/>
        {/* </Parallax> */}

        {/* <div className={style.top} /> */}
        <Grid className={style.presentationGrid} fluid={true}>
          <StyledRow center='xs' isActive={isActive}>
            <Col xs={12} sm={12} md={12} lg={9}>
              <Row center='xs'>
                <Col xs={0}>
                  <p className={style.presentation}>
                    {/* Welcome to our portfolio. We are two friends who enjoy coding and creativity. 
                    Currently we are looking for work. If you like what you see here and are looking for two programmers, please contact
                    us. */}

                    Welcome to our portfolio. We are two programmers and computer-graphics enthusiasts running our own company. 
                    Our company is a start-up with a too low income for us to make a living. 
                    Therefore we are looking for freelance projects on half-time. 
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
                  />
                </Col>
              </Row>
            </Col>
          </StyledRow>
        </Grid>   
        <div className={style.arrowRow}>
          <StyledHeaderArrow className='material-icons'>keyboard_arrow_down</StyledHeaderArrow>
        </div>

      </StyledHeaderDiv>
    )
  }

  componentDidMount() {
    initThreeBackground(this.threeContainer)
  }
}
