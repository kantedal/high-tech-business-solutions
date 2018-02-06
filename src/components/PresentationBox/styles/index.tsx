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

namespace ImageDiv {
  export interface Props {
    isMobile?: boolean
    imagePositionUpdated: (x: number, y: number) => void
    inited?: boolean
  }
}

export class ImageDiv extends React.Component<ImageDiv.Props, any> {
  private _element: any
  private _top: number
  private _left: number

  constructor(props: any) {
    super(props)
    this.state = {
      hasMounted: false
    }
  }

  render() {
    const { imagePositionUpdated, children, isMobile, inited, ...rest } = this.props
    const { hasMounted } = this.state

    return (
      <div 
        ref={(element) => {
          if (element && !this._element) {
            this._element = element
          }
        }}
        {...rest}
      >
        {children}
      </div>
    )
  }
  
  componentWillUpdate() {
    if (this._element) {
      const rect = this._element.getBoundingClientRect()
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      const top = rect.left + scrollLeft
      const left = rect.top + scrollTop
      if (this._top !== top || this._left !== left) {
        this._top = top
        this._left = left
        this.props.imagePositionUpdated(rect.left + scrollLeft, rect.top + scrollTop)              
      }
    }
  }

  componentDidMount() {
    this.setState({ ...this.state, hasMounted: true })
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
  transition: ${({ inited }: any) => inited ? 'transform 500ms ease' : 'transform 500ms ease' };
`

export const StyledPresentationImageContainer: any = styled.div`
  height: ${({ isMobile }: any) => isMobile ? '130px' : '200px'};
`
