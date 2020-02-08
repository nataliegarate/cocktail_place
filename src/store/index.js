import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import cocktail from './cocktail'
// combineReducers, note can add this from redux

const store = createStore(
    cocktail,
    applyMiddleware(
      thunkMiddleware,
      createLogger()
    )
  );

export default store
export * from './cocktail'
