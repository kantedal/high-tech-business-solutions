import * as React from 'react'
import styled, { keyframes } from 'styled-components'

export const StyledPresentationImageContainer: any = styled.div`
  height: ${({ isMobile }: any) => isMobile ? '130px' : '200px'};
`

const skillBarAnimation = keyframes`
  from {transform: scale(0, 1);}
  to {transform: scale(1, 1);}
`
export const SkillMeter: any = styled.div`
  height: 5px;
  width: ${({skillWeight}: any) => skillWeight ? (skillWeight * 100 + '%') : '0px'};
  transform-origin: 0px 0px;
  background: ${({skillWeight}: any) => 'red'};
  animation: ${skillBarAnimation} 2s;
  padding: 0;
  margin: 0;
  border-radius: 3px;
`

export const SkillMeterContainer: any = styled.div`
  height: 5px;
  background: gray;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 0;
  width: 100%;
  border-radius: 3px;
`
