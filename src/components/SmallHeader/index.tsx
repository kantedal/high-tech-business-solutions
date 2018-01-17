import * as React from 'react'
import { CSSProperties } from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'
import { StyledSmallHeaderDiv } from './styles'

import * as style from './style.css'

export namespace SmallHeader {
  export interface Props {
    isActive: boolean
  }
}

export const SmallHeader: React.SFC<SmallHeader.Props> = ({isActive}: SmallHeader.Props) => {
  return (
    <StyledSmallHeaderDiv isActive={isActive}>
      hej
    </StyledSmallHeaderDiv>
  )
}
