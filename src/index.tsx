import 'animate.css/animate.min.css'
/// <reference path="../types/models.d.ts"/>

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { configureStore } from './store'
import App from './containers/App'
import './background'

const history = createBrowserHistory()
const store = configureStore(history)

const AppComponent: any = App

const theme = createMuiTheme({
  overrides: {}
})
    
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <AppComponent />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
