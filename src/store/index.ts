import { createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer, { RootState } from '../reducers'

export function configureStore(history: any) {
  let middleware = applyMiddleware(history)
  if (process.env.NODE_ENV === 'development') {
    console.log(middleware)    
    // middleware = composeWithDevTools(middleware)
  }

  const store = createStore(rootReducer, {}) as Store<RootState>

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
