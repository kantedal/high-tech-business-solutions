import * as React from 'react'
import { CSSProperties } from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'

import * as style from './styles/style.css'
import { StyledPresentationImage, StyledPresentationImageContainer } from './styles'

export namespace PresentationBox {
  export interface Props {
    name: string
    imgUrl: string
    linkedInUrl: string
    emailUrl: string
    githubUrl: string
    websiteUrl: string
    isMobile: boolean
    imagePositionUpdated: (x: number, y: number) => void
  }
}

const GridComponent: any = Grid as any

export const PresentationBox: React.SFC<PresentationBox.Props> = ({name, imgUrl, linkedInUrl, emailUrl, githubUrl, websiteUrl, isMobile, imagePositionUpdated}) => { 

  const linkedInClick = () => {
    window.open(linkedInUrl, '_blank')
  }

  const emailClick = () => {
    window.prompt('Email address of ' + name, emailUrl)
  }

  const githubClick = () => {
    window.open(githubUrl, '_blank')
  }

  const homeClick = () => {
    window.open(websiteUrl, '_blank')
  }

  return (
    <div className={style.presentationContent}>
      <GridComponent fluid={true}>
        <Row>
          <StyledPresentationImage
            isMobile={isMobile}
            style={{ backgroundImage: 'url(' + imgUrl + ')' }}
            imagePositionUpdated={imagePositionUpdated}
          />
        </Row>
        {!isMobile && (
          <Row> 
            <div className={style.nameText}>{name}</div>
          </Row>
        )}
        {!isMobile && (
          <Row center={'xs'} className={style.contactRow}>
            <Col xs={12} sm={12} md={12}>
              <Row>
                <Col xs={3} className={style.contactCol}>
                  <div aria-label='LinkedIn' onClick={linkedInClick}>
                    <i className={'zmdi zmdi-linkedin ' + style.contactIcon} />
                  </div>
                </Col>
                <Col xs={3} className={style.contactCol}>
                  <div aria-label='Email' onClick={emailClick}>
                    <i className={'zmdi zmdi-email ' + style.contactIcon} />
                  </div>
                </Col>
                <Col xs={3} className={style.contactCol}>
                  <div aria-label='Github' onClick={githubClick}>
                    <i className={'zmdi zmdi-github ' + style.contactIcon} />
                  </div>
                </Col>
                <Col xs={3} className={style.contactCol}>
                  <div aria-label='Home' onClick={homeClick}>
                    <i className={'zmdi zmdi-home ' + style.contactIcon} />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
          
      </GridComponent>
    </div>
  )
}