import * as React from 'react'
import { CSSProperties } from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'

import { IAbout, ISkill } from '../../about'
import { SkillMeter, SkillMeterContainer } from './styles'
import * as style from './styles/style.css'

export namespace AboutUsBox {
  export interface Props {
    about: IAbout
    isMobile: boolean
  }
}

const GridComponent: any = Grid as any

export const AboutUsBox: React.SFC<AboutUsBox.Props> = ({ about, isMobile }) => {

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

  const sortSkills = (skillA: ISkill, skillB: ISkill) => {
    if (skillA.skillWeight !== skillB.skillWeight) {
      if (skillA.skillWeight > skillB.skillWeight) {
        return -1
      }
      else {
        return 1
      }
    }

    return 0
  }
  return (
    <div className={style.presentationContent}>
      <GridComponent fluid={true}>
        {!isMobile && (
          <Row>
            <div className={style.nameText}>{about.name}</div>
          </Row>
        )}
        {!isMobile && (
          <Row center={'xl'} className={style.contactRow}>
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
                <p> {about.shortDescription} </p>

              </Row>
              <Row>
                <div className={style.nameText}>Skills</div>
              </Row>
              <Row className={style.skillRow}>
                <ul className={style.skillsList}>
                  {about.skills.sort(sortSkills).map((skill: ISkill, index: number) => {
                    return <li className={style.skillItem} key={index}>
                      <div>{skill.skillName}</div>
                      <SkillMeterContainer>
                        <SkillMeter skillWeight={skill.skillWeight} />
                      </SkillMeterContainer>
                    </li>
                  })
                  }
                </ul>
              </Row>
            </Col>

          </Row>
        )}

      </GridComponent>
    </div>
  )
}
