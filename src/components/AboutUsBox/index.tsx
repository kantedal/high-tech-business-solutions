import * as React from 'react'
import { CSSProperties } from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'

import * as style from './styles/style.css'
import { StyledPresentationImage, StyledPresentationImageContainer } from './styles'
import { IAbout, ISkill } from '../../about'

export namespace AboutUsBox {
  export interface Props {
    about: IAbout
    isMobile: boolean
    imagePositionUpdated: (x: number, y: number) => void
  }
}

const GridComponent: any = Grid as any

export const AboutUsBox: React.SFC<AboutUsBox.Props> = ({ about, isMobile, imagePositionUpdated }) => {

  const linkedInClick = () => {
    window.open(about.linkedInUrl, '_blank')
  }

  const emailClick = () => {
    window.prompt('Email address of ' + about.name, about.emailUrl)
  }

  const githubClick = () => {
    window.open(about.githubUrl, '_blank')
  }

  const homeClick = () => {
    window.open(about.websiteUrl, '_blank')
  }

  return (
    <div className={style.presentationContent}>
      <GridComponent fluid={true}>
        <Row>
          <StyledPresentationImage
            isMobile={isMobile}
            style={{ backgroundImage: 'url(' + about.imgUrl + ')' }}
            imagePositionUpdated={imagePositionUpdated}
          />
        </Row>
        {!isMobile && (
          <Row>
            <div className={style.nameText}>{about.name}</div>
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
              <Row>
                <p> {about.emailUrl} </p>
                <p> {about.shortDescription} </p>
                {about.skills.map((skill: ISkill, index: number) => {
                  return <li key={index}> {skill.skillName} </li>
                })
                }
              </Row>
            </Col>
          </Row>
        )}

      </GridComponent>
    </div>
  )
}
