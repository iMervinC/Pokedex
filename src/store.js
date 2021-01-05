import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { pokeListReducer, pokeDetailsReducer } from './reducer/pokeReducer'

const reducer = combineReducers({
  pokeList: pokeListReducer,
  pokeDetails: pokeDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
