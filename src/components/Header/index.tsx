import * as React from 'react'
import { CSSProperties } from 'react'
import IconButton from 'material-ui/IconButton'
import { Grid, Row, Col } from 'react-flexbox-grid'
import * as style from './style.css'

export namespace Header {
  export interface Props {
    back: () => void
  }
}

export const Header: React.SFC<Header.Props> = ({ back }) => {
  return (
    <div className={style.headerContent}>
      <Grid fluid>
        <Row className={style.presentationRow}>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
        </Row>
      </Grid>
    </div>
  )
}