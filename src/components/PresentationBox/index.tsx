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
        <Row>
          <div className={style.presentationImage} style={{ backgroundImage: 'url(' + imgUrl + ')' }} />
        </Row>
        <Row> 
          {name}
        </Row>
      </Grid>
    </div>
  )
}