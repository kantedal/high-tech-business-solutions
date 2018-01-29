import { combineReducers, Reducer } from 'redux'
import app from './app'

export interface RootState {
  app: AppState
}

export default combineReducers<RootState>({ app })
