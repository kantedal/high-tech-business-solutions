import * as React from 'react';
import { CSSProperties } from 'react'
import * as style from './style.css';

export namespace InteractiveBackground {
  export interface Props {
  }
  export interface State { }
}


export class InteractiveBackground extends React.Component<InteractiveBackground.Props, InteractiveBackground.State> {

  
  
  render() {

    return (
     <div className={style.container}> hej </div>
    )
  }
}