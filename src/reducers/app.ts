import { handleActions } from 'redux-actions'
import * as Actions from '../constants/actions'

const initialState: AppState = {
  activePortfolioItem: null,
  filterPortfolioItemBy: null,
  pageLoading: true,
  portfolioItemsLoading: false,
  maxPortfolioItems: 0
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
    return { ...state, portfolioItemsLoading: action.payload, maxPortfolioItems: state.maxPortfolioItems + 3 }
  }, 
}, initialState)
