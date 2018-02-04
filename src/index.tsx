/// <reference path='../types/models.d.ts'/>

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './containers/App'
import './background'

const AppComponent: any = App

ReactDOM.render(<AppComponent />, document.getElementById('root'))
