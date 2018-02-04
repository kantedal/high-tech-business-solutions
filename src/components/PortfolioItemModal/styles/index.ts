import { Row } from 'react-flexbox-grid'
import * as React from 'react'
import styled, { keyframes } from 'styled-components'

export const StyledModalContainer: any = styled.div`
  top: ${({isMobile}: any) => isMobile ? '0px' : ''};
  height: ${({isMobile}: any) => isMobile ? '100% !important' : 'fit-content'};
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  opacity: ${({isOpen}: any) => isOpen ? '1' : '0'};
  /* transform: ${({isOpen}: any) => isOpen ? 'translateY(0px)' : 'translateY(-100px)'}; */
  transition: opacity 0.3s ease, transform 0.3s ease;
  position: absolute;
  width: calc(100%);
  height: fit-content;
  background: #fff;
  outline:0;
  border-radius: 5px;
  box-shadow: 0px 0px 50px #111;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  max-width: 600px;
  padding-bottom: 20px;
  pointer-events: all;
`
