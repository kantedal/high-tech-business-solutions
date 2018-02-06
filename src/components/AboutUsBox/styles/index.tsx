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

// @keyframes mymove {
//   0% {transform: scale(1, 1);}
//   50% {transform: scale(-100, 1);}
//   100% {transform: scale(1, 1);}
// }

// export const SkillMeter: any = styled.div`
//  height: 10px;
//   width: 1px;
//   transform-origin: 1px 0px;
//   background: red;
//   animation: mymove 5s infinite;
// `
