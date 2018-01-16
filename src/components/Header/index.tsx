import * as React from 'react'
import { CSSProperties } from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'
import { Link } from 'react-scroll'
import styled, { keyframes } from 'styled-components'

import { PresentationBox } from '../PresentationBox/index'
import * as style from './style.css'

export namespace Header {
  export interface Props {
    isActive: boolean
    scrollY: number
  }
  export interface State {}
}

export const StyledHeaderDiv: any = styled.div`
  position: relative;
  background: linear-gradient(rgba(132, 112, 206, 1.0) 30%, rgba(126, 75, 192, 0.94) 90%);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  margin-bottom: 20px;
  height: ${({ isActive, scrollY }: any) => (window.innerHeight) + 'px'};
  overflow: hidden;
  // transition: all 0.5s ease;
`

const StyledArrowAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(0px); }
`

const StyledArrow = styled.i`
  display: inline-block;
  animation: ${StyledArrowAnimation} 1s ease infinite;
  padding: 1rem 1rem;
  font-size: 40px;
  color: #fff;
`

export class Header extends React.Component<Header.Props, Header.State> {
  render() {
    const { isActive, scrollY } = this.props
    console.log((window.innerHeight - scrollY))
    return (
      <StyledHeaderDiv isActive={isActive}>
        {/* <div className={style.top} /> */}
        <Grid className={style.presentationGrid} fluid={true}>
          <Row center='xs' className={style.presentationRow}>
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
          </Row>
        </Grid>
        <div className={style.arrowRow}>
          <Link 
            activeClass='active'
            to='test2'
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            // onSetActive={() => this.setState({ ...this.state, contentActive: true })}
            // onSetInactive={() => this.setState({ ...this.state, contentActive: false })}
          >
            <StyledArrow className='material-icons'>keyboard_arrow_down</StyledArrow>
          </Link>
          
        </div>
      </StyledHeaderDiv>
    )
  }
}
