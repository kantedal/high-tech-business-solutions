import { Categories } from '../../portfolio'
import * as React from 'react'
import { CSSProperties } from 'react'
import Chip from 'material-ui/Chip'
import * as style from './style.css'

export namespace FilterPanel {
  export interface Props {
    filterByPortfolioCategory: (category: string) => void
  }
  export interface State {}
}

export class FilterPanel extends React.Component<FilterPanel.Props, FilterPanel.State> {
  render() {
    const { filterByPortfolioCategory } = this.props 
    const categoryButtons = []
    categoryButtons.push(<span className={style.tagBox} key={'All'} onClick={() => filterByPortfolioCategory('All')}>All</span>)

    for (const cat in Categories) {
      categoryButtons.push(
        <span key={cat + '_divider' }className={style.divider}>/</span>,
        <span className={style.tagBox} key={cat} onClick={() => console.log('allo')}>{Categories[cat]}</span>
      )
    }
    return (
      <div className={style.filterPanelContainer}>
        {categoryButtons}
      </div>
    )
  }
}