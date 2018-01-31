/// <reference path='../types/models.d.ts'/>

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import App from './containers/App'
import './background'

const AppComponent: any = App

const theme = createMuiTheme({
  overrides: {}
})
    
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AppComponent />
  </MuiThemeProvider>,
  document.getElementById('root')
)
