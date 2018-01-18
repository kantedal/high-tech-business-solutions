import { Row } from 'react-flexbox-grid'
import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledHeaderAnimation = keyframes`
  from { filter: hue-rotate(0deg) grayscale(50%); }
  to { filter: hue-rotate(360deg) grayscale(50%); }
`

export const StyledHeaderDiv: any = styled.div`
  position: relative;
  width: 100%;
  background: transparent;
  background: linear-gradient(rgba(232, 21, 21, 0.5) 30%, rgba(126, 75, 192, 0.9) 80%);
  background: linear-gradient(to right, #11998e, #38ef7d);
  box-shadow: inset 0 0 200px rgba(0,0,0,0.2);
  height: ${({ scrollY }: any) => (window.innerHeight) + 'px'};
  overflow: hidden;
  // transition: all 0.5s ease;
  z-index: -1;
`

const StyledArrowAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(0px); }
`

export const StyledHeaderArrow = styled.i`
  display: inline-block;
  animation: ${StyledArrowAnimation} 1s ease infinite;
  padding: 1rem 1rem;
  font-size: 40px;
  color: #fff;
  cursor: pointer;
`


export const StyledRow: any = styled(Row)`
  position: relative;
  top: 50%;
  transform:  ${({ isActive }: any) => isActive ? 'scale(1.0) translateY(-50%)' : 'scale(0.75) translateY(-85%)'};
  opacity: ${({ isActive }: any) => isActive ? 1 : 0};
  transition: all 0.5s ease;
`
