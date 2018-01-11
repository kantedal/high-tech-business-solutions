import { handleActions } from 'redux-actions'
import * as Actions from '../constants/actions'

const initialState: AppState = {
  activePortfolioItem: null
}

export default handleActions<AppState, any>({
  [Actions.OPEN_PORTFOLIO_ITEM]: (state, action) => {
    console.log('portfolio item click')
    return { ...state, activePortfolioItem: action.payload }
  },
  [Actions.CLOSE_PORTFOLIO_ITEM]: (state, action) => {
    return { ...state, activePortfolioItem: null }
  },
}, initialState)