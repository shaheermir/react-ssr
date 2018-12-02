import {createStore, applyMiddleware} from "redux"
import ReduxThunk from "redux-thunk"
import rootReducer from "../client/reducers"

export default () => {
  const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))
  return store
}
