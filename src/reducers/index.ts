import { combineReducers, Reducer } from 'redux'
import host from './host'
import mentometer from './mentometer'
import vote from './vote'
import { routerReducer } from 'react-router-redux'

export interface RootState {
  todos: TodoStoreState
  host: HostState
  mentometer: MentometerState
  vote: VoteState
}

export default combineReducers<RootState>({
  host, mentometer, vote, router: routerReducer
})
