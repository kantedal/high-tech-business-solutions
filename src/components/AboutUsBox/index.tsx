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
  export interface State {
    show: boolean
  }
}

const GridComponent: any = Grid as any
const RowComponent: any = Row as any

export class AboutUsBox extends React.Component<AboutUsBox.Props, AboutUsBox.State> {

  constructor(props: AboutUsBox.Props) {
    super(props)
    this.state = {
      show: false
    }
  }

  render() {
    const { about, isMobile } = this.props
    const linkedInClick = () => window.open(about.linkedInUrl, '_blank')
    const emailClick = () => window.prompt('Email address of ' + about.name, about.emailUrl)
    const githubClick = () => window.open(about.githubUrl, '_blank')
    const homeClick = () => window.open(about.websiteUrl, '_blank')

    const sortSkills = (skillA: ISkill, skillB: ISkill) => {
      if (skillA.skillWeight !== skillB.skillWeight) {
        if (skillA.skillWeight > skillB.skillWeight) {
          return -1
        } else {
          return 1
        }
      }

      return 0
    }

    return (
      <div className={style.presentationContent} style={{ opacity: this.state.show ? 1.0 : 0.0, transition: 'opacity 0.5s ease' }}>
        <GridComponent fluid={true}>
          {!isMobile && (
            <Row>
              <div className={style.nameText}>{about.name}</div>
            </Row>
          )}
          {!isMobile && (
            <Row center={'xl'} className={style.contactRow}>
              <Col xs={12} sm={12} md={12}>
                <RowComponent center='xs' style={{ pointerEvents: 'all' }}>
                  <Col xs={2} className={style.contactCol}>
                    <div aria-label='LinkedIn' onClick={linkedInClick}>
                      <i className={'zmdi zmdi-linkedin ' + style.contactIcon} />
                    </div>
                  </Col>
                  <Col xs={2} className={style.contactCol}>
                    <div aria-label='Email' onClick={emailClick}>
                      <i className={'zmdi zmdi-email ' + style.contactIcon} />
                    </div>
                  </Col>
                  <Col xs={2} className={style.contactCol}>
                    <div aria-label='Github' onClick={githubClick}>
                      <i className={'zmdi zmdi-github ' + style.contactIcon} />
                    </div>
                  </Col>
                  <Col xs={2} className={style.contactCol}>
                    <div aria-label='Home' onClick={homeClick}>
                      <i className={'zmdi zmdi-home ' + style.contactIcon} />
                    </div>
                  </Col>
                </RowComponent>
                <Row>
                  <div style={{ lineHeight: '25px', fontSize: '15px', fontFamily: 'roboto', height: 'calc(720px - 40vw)', minHeight: '230px', marginTop: '20px', overflow: 'hidden' }}>{about.shortDescription}</div>
                </Row>
                <Row>
                  <div className={style.nameText}>Skills</div>
                </Row>
                <Row className={style.skillRow}>
                  <ul className={style.skillsList}>
                    {about.skills.sort(sortSkills).map((skill: ISkill, index: number) => (
                      <li className={style.skillItem} key={index}>
                        <SkillMeterContainer>
                          <SkillMeter skillWeight={skill.skillWeight} delay={0} show={this.state.show}>
                            <div style={{ float: 'left', paddingLeft: '10px' }}>{skill.skillName}</div>
                          </SkillMeter>
                        </SkillMeterContainer>
                      </li>
                    ))}
                  </ul>
                </Row>
              </Col>

            </Row>
          )}

        </GridComponent>
      </div>
    )
  }

  componentDidMount() {
    setTimeout(() => this.setState({ ...this.state, show: true }))
  }

  componentWillUnmount() {
    this.setState({ ...this.state, show: false })
  }  
}
