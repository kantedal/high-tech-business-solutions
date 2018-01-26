import { handleActions } from 'redux-actions'
import * as Actions from '../constants/actions'
import { IPortfolioItem, Categories, portfolioItems } from '../portfolio'

const initialState: AppState = {
  activePortfolioItem: null,
  filterPortfolioItemBy: null,
  pageLoading: true,
  portfolioItemsLoading: false,
  maxPortfolioItems: 0,
  activePortfolioItems: [],
}

export default handleActions<AppState, any>({
  [Actions.OPEN_PORTFOLIO_ITEM]: (state, action) => {
    return { ...state, activePortfolioItem: action.payload }
  },
  [Actions.FILTER_PORTFOLIO_BY]: (state, action) => {
    return { ...state, filterPortfolioItemBy: action.payload }
  },
  [Actions.CLOSE_PORTFOLIO_ITEM]: (state, action) => {
    return { ...state, activePortfolioItem: null }
  },
  [Actions.CLOSE_PORTFOLIO_ITEM]: (state, action) => {
    return { ...state, activePortfolioItem: null }
  },
  [Actions.LOAD_PAGE]: (state, action) => {
    return { ...state, pageLoading: action.payload }
  }, 
  [Actions.LOAD_PORTFOLIO_ITEMS]: (state, action) => {
    
    let itemCount = 0
    const portfolioFilterHandle = (portfolioItem: IPortfolioItem) => {
      if (itemCount >= state.maxPortfolioItems) {
        return false
      }
      if (state.filterPortfolioItemBy != null) {
        for (const portfolioCat of portfolioItem.tags) {
          if (portfolioCat === Categories[state.filterPortfolioItemBy]) {
            itemCount++
            return true
          }
        }
        return false
      }
      itemCount++
      return true
    }

    const portfolioSort = (a: IPortfolioItem, b: IPortfolioItem) => {
      if (a.weight === b.weight) {
        return a.header > b.header ? -1.0 : 1.0
      }
      return a.weight > b.weight ? -1.0 : 1.0
    }

    const items = portfolioItems.sort(portfolioSort).filter(portfolioFilterHandle)

    return { 
      ...state,
      portfolioItemsLoading: action.payload,
      maxPortfolioItems: state.maxPortfolioItems + 3,
      activePortfolioItems: items
    }
  }, 
}, initialState)
