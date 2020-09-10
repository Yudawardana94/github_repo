import {applyMiddleware, createStore} from 'redux'
import Reducer from '../reducers'
import thunk from 'redux-thunk'

const Store = createStore(Reducer,applyMiddleware(thunk))

export default Store