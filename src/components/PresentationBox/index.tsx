import IconButton from 'material-ui/IconButton'
import * as React from 'react'
import { CSSProperties } from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'

import * as style from './style.css'

export namespace PresentationBox {
  export interface Props {
    name: string
    imgUrl: string
    linkedInUrl: string
    emailUrl: string
    githubUrl: string
    websiteUrl: string
  }
}

export const PresentationBox: React.SFC<PresentationBox.Props> = ({name, imgUrl, linkedInUrl, emailUrl, githubUrl, websiteUrl}) => {
  const linkedInClick = () => {
    window.open(linkedInUrl, '_blank')
  }
  const emailClick = () => {
    window.prompt('Copy to clipboard: Ctrl+C, Enter', emailUrl);
  }
  const githubClick = () => {
    window.open(githubUrl, '_blank')
  }
  const homeClick = () => {
    window.open(websiteUrl, '_blank')
  }

  return (
    <div className={style.presentationContent}>
      <Grid fluid>
        <Row className={style.presentationImageContainer}>
          <div className={style.presentationImage} style={{ backgroundImage: 'url(' + imgUrl + ')' }} />
        </Row>
        <Row> 
          <div className={style.nameText}>{name}</div>
        </Row>
        <Row center={'xs'} className={style.contactRow}>
          <Col xs={12} sm={12} md={12}>
            <Row>
              <Col xs={3} className={style.contactCol}>
                <IconButton aria-label='LinkedIn' onClick={linkedInClick}>
                  <i className={'zmdi zmdi-linkedin ' + style.contactIcon} />
                </IconButton>
              </Col>
              <Col xs={3} className={style.contactCol}>
                <IconButton aria-label='Email' onClick={emailClick}>
                  <i className={'zmdi zmdi-email ' + style.contactIcon} />
                </IconButton>
              </Col>
              <Col xs={3} className={style.contactCol}>
                <IconButton aria-label='Github' onClick={githubClick}>
                  <i className={'zmdi zmdi-github ' + style.contactIcon} />
                </IconButton>
              </Col>
              <Col xs={3} className={style.contactCol}>
                <IconButton aria-label='Home' onClick={homeClick}>
                  <i className={'zmdi zmdi-home ' + style.contactIcon} />
                </IconButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}