import { handleActions } from 'redux-actions'
import * as Actions from '../constants/actions'

const initialState: AppState = {
  activePortfolioItem: null,
  filterPortfolioItemBy: null
}

export default handleActions<AppState, any>({
  [Actions.OPEN_PORTFOLIO_ITEM]: (state, action) => {
    return { ...state, activePortfolioItem: action.payload }
  },
  [Actions.FILTER_PORTFOLIO_BY]: (state, action) => {
    console.log(action.payload)
    return { ...state, filterPortfolioItemBy: action.payload }
  },
  [Actions.CLOSE_PORTFOLIO_ITEM]: (state, action) => {
    return { ...state, activePortfolioItem: null }
  },
}, initialState)