import styled, { keyframes } from 'styled-components'

export const StyledButtonDiv: any = styled.div`
  padding: ${({round}: any) => round ? '0px' : '10px'};
  font-size: ${({round}: any) => round ? '24px' : '16px'};
  border-radius: ${({round}: any) => round ? '50%' : '3px'};
  width:  ${({round}: any) => round ? '50px' : 'fit-content'};
  height:  ${({round}: any) => round ? '50px' : ''};
  background: ${({color}: any) => color};
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
  color: #fff;
  font-weight: 400;
  line-height: 22px;
  cursor: pointer;
  display:  ${({round}: any) => round ? '' : 'inline'};
  margin: 5px;
  text-align: ${({round}: any) => round ? 'center' : ''};
`
