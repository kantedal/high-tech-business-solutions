import { createAction } from 'redux-actions'
import * as Actions from '../constants/actions'
import {push, replace} from 'react-router-redux'
import { IPortfolioItem } from '../portfolio';

export const backToMenu = () => replace('/')
export const openPortfolioItem = createAction<IPortfolioItem>(Actions.OPEN_PORTFOLIO_ITEM)
export const closePortfolioItem = createAction(Actions.CLOSE_PORTFOLIO_ITEM)
