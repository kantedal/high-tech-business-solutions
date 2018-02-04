import * as React from 'react'
import { CSSProperties } from 'react'

import * as style from './style.css'
import { StyledButtonDiv } from './styles/index';

export namespace IconButton {
  export interface Props {
    text: string
    icon: string
    color?: string
    onClick: () => void
  }
}

export const IconButton: React.SFC<IconButton.Props> = ({ text, icon, color, onClick }) => {
  const textColor = color ? color : '#38ef7d'
  return (
    <StyledButtonDiv onClick={onClick}>
      <i style={{ marginRight: '3px' }} className={icon}/>
      <span>{text}</span>
    </StyledButtonDiv>
  )
}
