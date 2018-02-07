import * as React from 'react'
import styled, { keyframes } from 'styled-components'

export const StyledPresentationImageContainer: any = styled.div`
  height: ${({ isMobile }: any) => isMobile ? '130px' : '200px'};
`

const skillBarAnimation = keyframes`
  from { transform: scale(0, 1); opacity: 0; }
  to { transform: scale(1, 1); opacity: 1; }
`
export const SkillMeter: any = styled.div`
  height: 20px;
  width: ${({skillWeight}: any) => skillWeight ? (skillWeight * 100 + '%') : '0px'};
  transform-origin: 0px 0px;
  background: ${({skillWeight}: any) => `rgba(${Math.round(Math.pow((1.0 - skillWeight), 1.0) * 255)}, ${Math.round(Math.pow(skillWeight, 2.0) * 255)}, ${Math.round(Math.pow(skillWeight, 3.0) * 255)}, 0.8)`};
  animation: ${skillBarAnimation} 1s;
  animation-delay: ${({delay}: any) => delay / 2.0}ms;
  padding: 0;
  margin: 0;
  opacity: 1;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
}
`

export const SkillMeterContainer: any = styled.div`
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  margin-top: 3px;
  margin-bottom: 10px;
  padding: 0;
  width: 100%;
  border-radius: 10px;
`
