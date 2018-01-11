import * as React from 'react'
import * as style from './style.css'
import * as classNames from 'classnames'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, FILTER_TYPES } from '../../constants/filters'

export const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

export namespace Footer {
  export interface Props {

  }

  export interface State {
    /* empty */
  }
}

export class Footer extends React.Component<Footer.Props, Footer.State> {

  
  render() {
    return (
      <footer className={style.normal}>
        
        <div className={style.filters}>

        </div>
      </footer>
    )
  }
}
