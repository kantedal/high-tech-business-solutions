import { Categories } from '../../portfolio'
import * as React from 'react'
import { CSSProperties } from 'react'
import Chip from 'material-ui/Chip'
import * as style from './style.css'

export namespace FilterPanel {
  export interface Props {
    filterByPortfolioCategory: (category: string) => void
    portfolioFilter: Categories
  }
  export interface State {}
}

export class FilterPanel extends React.Component<FilterPanel.Props, FilterPanel.State> {
  render() {
    const { filterByPortfolioCategory, portfolioFilter } = this.props 
    const categoryButtons = []
    categoryButtons.push(
      <span 
        className={style.tagBox} 
        key={'All'} 
        onClick={() => filterByPortfolioCategory(null)}
        style={{ fontWeight: portfolioFilter == null ? 800 : 400 }}
      >
        All
      </span>
    )

    for (const cat in Categories) {
      if (cat) {
        const categoryStyle: CSSProperties = { fontWeight: portfolioFilter === cat ? 800 : 400 }
        const filterHandle = () => filterByPortfolioCategory(cat)
        categoryButtons.push(
          <span key={cat + '_divider'} className={style.divider}>/</span>,
          (
            <span
              style={categoryStyle}
              className={style.tagBox}
              key={cat} 
              onClick={filterHandle}
            >
              {Categories[cat]}
            </span>
          )
        )
      }
      
    }
    return (
      <div className={style.filterPanelContainer}>
        {categoryButtons}
      </div>
    )
  }
}