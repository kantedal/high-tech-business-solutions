import * as React from 'react'
import { CSSProperties } from 'react'
import * as style from './style.css'
import { portfolioItems, IPortfolioItem } from '../../portfolio';

export namespace MainSection {
  export interface Props {
    filterOn?: string
  }
  export interface State {}
}

export class MainSection extends React.Component<MainSection.Props, MainSection.State> {

  render() {
    const porfolioComponents = portfolioItems
      .map((portfolioItem: IPortfolioItem) => (
        <div>
          {portfolioItem.header}
          <img src={portfolioItem.imagePaths[0]} />
        </div>
      ))

    return (
      <div>
        {porfolioComponents}
      </div>
    )
  }
}
