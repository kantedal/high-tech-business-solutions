import { createAction } from 'redux-actions'
import * as Actions from '../constants/actions'
import { IPortfolioItem } from '../portfolio'

export const openPortfolioItem = createAction<IPortfolioItem>(Actions.OPEN_PORTFOLIO_ITEM)
export const closePortfolioItem = createAction(Actions.CLOSE_PORTFOLIO_ITEM)
export const filterByPortfolioCategory = createAction<string>(Actions.FILTER_PORTFOLIO_BY)
export const loadPage = createAction<boolean>(Actions.LOAD_PAGE)
export const loadPortfolioItems = createAction<boolean>(Actions.LOAD_PORTFOLIO_ITEMS)
