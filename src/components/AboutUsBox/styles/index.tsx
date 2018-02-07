import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledHeaderAnimation = keyframes`
  from { filter: hue-rotate(0deg) grayscale(50%); }
  to { filter: hue-rotate(360deg) grayscale(50%); }
`

const Div = ({children, imagePositionUpdated, isMobile, ...props}: any) => (
  <div 
    ref={(element) => {
      if (element) {
        const rect = element.getBoundingClientRect()
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        imagePositionUpdated(rect.left + scrollLeft, rect.top + scrollTop)
      }
    }}
    {...props}
  >
    {children}
  </div>
)

export const StyledPresentationImage: any = styled(Div)`
  border-radius: 50%;
  min-width: ${({ isMobile }: any) => isMobile ? '120px' : '150px'};  
  min-height: ${({ isMobile }: any) => isMobile ? '120px' : '150px'};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin: auto;
  box-shadow: 0px 0px 30px #333;
  border: 2px solid #fff;
  margin-top: ${({ isMobile }: any) => isMobile ? '0px' : '30px'};  
  margin-bottom: ${({ isMobile }: any) => isMobile ? '10px' : '15px'};  
`

export const StyledPresentationImageContainer: any = styled.div`
  height: ${({ isMobile }: any) => isMobile ? '130px' : '200px'};
`

const skillBarAnimation = keyframes`
  from {transform: scale(0, 1);}
  to {transform: scale(1, 1);}
`
export const SkillMeter: any = styled.div`
  height: 5px;
  width: ${({skillWeight}: any) => skillWeight ? (skillWeight + 'vw') : '200px'};
  transform-origin: 0px 0px;
  background: red;
  animation: ${skillBarAnimation} 2s;
  padding: 0;
  margin: 0;
  border-radius: 10px;
`

export const SkillMeterContainer: any = styled.div`
  height: 5px;
  width: 10vw;
  background: gray;
  margin: 5px;
  margin-bottom: 10px;
  padding: 0;
  border-radius: 10px;
  `
