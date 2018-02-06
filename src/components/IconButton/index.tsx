import * as React from 'react'
import { CSSProperties } from 'react'

import * as style from './style.css'
import { StyledButtonDiv } from './styles/index';

export namespace IconButton {
  export interface Props {
    text?: string
    icon: string
    color?: string
    round?: boolean
    styles?: CSSProperties
    onClick: () => void
  }
}

export const IconButton: React.SFC<IconButton.Props> = ({ text, icon, color, onClick, round, styles }) => {
  const textColor = color ? color : '#38ef7d'
  const stylings = styles ? styles : {}
  return (
    <StyledButtonDiv round={round} color={textColor} onClick={onClick}>
      <i style={{ marginRight: text ? '3px' : '0px', lineHeight: round ? '50px' : '', ...stylings }} className={icon}/>
      {text && <span>{text}</span>}
    </StyledButtonDiv>
  )
}
