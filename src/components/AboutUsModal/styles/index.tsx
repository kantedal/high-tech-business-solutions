import * as React from 'react'
import styled from 'styled-components'

export const AboutUsContainer: any = styled(({children, isOpen, isMobile, getRef, inited, ...rest}: any) => <div ref={getRef} {...rest}>{children}</div>)`
  width: 100%;
  height: 100%;
  opacity: ${({inited}: any) => inited ? 1 : 1};
  transition: opacity 500ms ease;
`
