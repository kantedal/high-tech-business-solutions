import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledHeaderAnimation = keyframes`
  from { filter: hue-rotate(0deg) grayscale(50%); }
  to { filter: hue-rotate(360deg) grayscale(50%); }
`

namespace ImageDiv {
  export interface Props {
    isMobile?: boolean
    inited?: boolean
    getRef?: (ref: any) => void
  }
}

export class ImageDiv extends React.Component<ImageDiv.Props, any> {
  private _element: any

  render() {
    const { children, isMobile, inited, getRef, ...rest } = this.props

    return (
      <div 
        ref={(element) => {
          if (element && !this._element) {
            this._element = element
            if (getRef) {
              getRef(element)
            }
          }
        }}
        {...rest}
      >
        {children}
      </div>
    )
  }

}

export const StyledPresentationImage: any = styled(ImageDiv)`
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
  // transition: ${({ inited }: any) => inited ? 'transform 500ms ease' : 'transform 500ms ease' };
`

export const StyledPresentationImageContainer: any = styled.div`
  height: ${({ isMobile }: any) => isMobile ? '130px' : '200px'};
`
