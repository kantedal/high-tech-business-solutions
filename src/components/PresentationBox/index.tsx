import * as React from 'react'
import { CSSProperties } from 'react'
import IconButton from 'material-ui/IconButton'
import { Grid, Row, Col } from 'react-flexbox-grid'
import * as style from './style.css'

export namespace PresentationBox {
  export interface Props {
    name: string
    imgUrl: string
  }
}

export const PresentationBox: React.SFC<PresentationBox.Props> = ({name, imgUrl}) => {
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
          <Col xs={12} sm={12} md={6}>
            <Row>
              <Col xs={4} className={style.contactCol}>
                <IconButton aria-label='LinkedIn'>
                  <i className={'zmdi zmdi-linkedin ' + style.contactIcon} />
                </IconButton>
              </Col>
              <Col xs={4} className={style.contactCol}>
                <IconButton aria-label='Email'>
                  <i className={'zmdi zmdi-email ' + style.contactIcon} />
                </IconButton>
              </Col>
              <Col xs={4} className={style.contactCol}>
                <IconButton aria-label='Github'>
                  <i className={'zmdi zmdi-github ' + style.contactIcon} />
                </IconButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}