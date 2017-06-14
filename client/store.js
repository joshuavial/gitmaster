import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers'

import thunkMiddleware from 'redux-thunk'


let store = createStore(reducers, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store
