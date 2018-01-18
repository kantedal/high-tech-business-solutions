import * as React from 'react'
import styled, { keyframes } from 'styled-components'

interface StyledSmallHeaderDivProps {
  isActive: boolean
}
export const StyledSmallHeaderDiv: any = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(rgba(132, 112, 206, 1.0) 30%, rgba(126, 75, 192, 1.0) 90%);
  transform: ${ ({ isActive }: StyledSmallHeaderDivProps) => isActive ? 'translateY(0px)' : 'translateY(-60px)' };
  transition: 0.1s ease;
  z-index: 1000;
`
