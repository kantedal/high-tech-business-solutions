import * as React from 'react'
import { CSSProperties } from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'
import styled from 'styled-components'

import { PresentationBox } from '../PresentationBox/index'
import * as style from './style.css'

export namespace Header {
  export interface Props {
    isActive: boolean
  }
  export interface State {}
}

export const StyledHeaderDiv: any = styled.div`
  position: relative;
  background: linear-gradient(rgba(132, 112, 206, 1.0) 30%, rgba(126, 75, 192, 0.94) 90%);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  margin-bottom: 20px;
  height: ${({ isActive }: any) => isActive ? window.innerHeight + 'px' : '0px'};
  overflow: hidden;
  transition: all 0.5s ease;
`

export class Header extends React.Component<Header.Props, Header.State> {
  render() {
    const { isActive } = this.props
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
      </StyledHeaderDiv>
    )
  }
}
