import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './Reducers'

export default function configStore() {
  let middlewares = []
  if (process.env.REACT_APP_RUN_ON === 'production') {
    middlewares = [thunkMiddleware]
  } else {
    middlewares = [thunkMiddleware, createLogger()]
  }

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares))
  )

  return store
}
