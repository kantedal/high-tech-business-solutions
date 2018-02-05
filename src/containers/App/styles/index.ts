import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const LoadingTextAnimation = keyframes`
  0% { transform: scale(1.0); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1.0); }
`

export const StyledLoadingComponent: any = styled.div`
  min-height: 600px;
  background: #fff;
  z-index: 1000;
  text-align: center;
  padding: 30px;
`

export const StyledLoadingText: any = styled.p`
  font-family: 'Fugaz One';
  font-size: 20px;
  text-align: center;
  color: rgb(84, 167, 151);
  animation: ${LoadingTextAnimation} 1s ease infinite;
`
