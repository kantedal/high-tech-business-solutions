import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const LoadingTextAnimation = keyframes`
  0% { transform: scale(1.0); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1.0); }
`

export const StyledLoadingComponent: any = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: ${({isLoading}: any) => isLoading ? 1 : 0};
  pointer-events: ${({isLoading}: any) => isLoading ? 'auto' : 'none'};

  transition: opacity 0.5s;
  z-index: 1000;
`

export const StyledLoadingText: any = styled.div`
  font-family: 'Fugaz One';
  font-size: 5vw;
  text-align: center;
  margin-top: 45vh;
  color: rgb(70, 231, 153);
  animation: ${LoadingTextAnimation} 1s ease infinite;
`
