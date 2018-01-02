import { combineReducers, Reducer } from 'redux'
import host from './host'
import mentometer from './mentometer'
import vote from './vote'
import app from './app'
import { routerReducer } from 'react-router-redux'

export interface RootState {
  todos: TodoStoreState
  host: HostState
  mentometer: MentometerState
  vote: VoteState
  app: AppState
}

export default combineReducers<RootState>({
  host, mentometer, vote, router: routerReducer, app
})
