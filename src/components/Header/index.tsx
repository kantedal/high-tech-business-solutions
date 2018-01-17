import { StyledHeaderArrow, StyledHeaderDiv, StyledRow } from './styles'
import * as React from 'react'
import { CSSProperties } from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'
import { Link } from 'react-scroll'
import styled, { keyframes } from 'styled-components'

import { PresentationBox } from '../PresentationBox/index'
import * as style from './styles/style.css'

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
  render() {
    const { isActive, scrollY, mainContentActiveChange } = this.props
    return (
      <StyledHeaderDiv>
        {/* <div className={style.top} /> */}
        <Grid className={style.presentationGrid} fluid={true}>
          <StyledRow center='xs' isActive={isActive}>
            <Col xs={12} sm={12} md={12} lg={9}>
              <Row>
                <Col xs={0} sm={6}>
                  <p className={style.presentation}>
                    Welcome to our portfolio. We are two friends who enjoy coding and creativity. 
                    Currently we are looking for work. If you like what you see here and are looking for two programmers, please contact
                    us.
                  </p>
                </Col>
                <Col xs={6} sm={3}>
                  <PresentationBox
                    name={'Simon Hedlund'}
                    imgUrl={'./images/simon.jpg'}
                    linkedInUrl={'https://www.linkedin.com/in/simon-hedlund-a1a656128/'}
                    emailUrl={'sermonhedlund@gmail.com'}
                    githubUrl={'https://github.com/Hedlundaren'}
                    websiteUrl={'http://simonhedlund.github.io'}
                  />
                </Col>
                <Col xs={6} sm={3}>
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
          <Link 
            activeClass='active'
            to='mainContent'
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onSetActive={() => { mainContentActiveChange(true); console.log('content active') }}
            onSetInactive={() => { mainContentActiveChange(false); console.log('content inactive') }}
          >
            <StyledHeaderArrow className='material-icons'>keyboard_arrow_down</StyledHeaderArrow>
          </Link>
          
        </div>
      </StyledHeaderDiv>
    )
  }
}
