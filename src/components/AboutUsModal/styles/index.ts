import { Row } from 'react-flexbox-grid'
import * as React from 'react'
import styled, { keyframes } from 'styled-components'

export const AboutUsContainer: any = styled.div`
  width: 100%;
  height: 100%;
  opacity: ${({inited}: any) => inited ? 1 : 1};
  transition: opacity 500ms ease;
`
