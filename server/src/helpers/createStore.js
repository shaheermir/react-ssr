import axios from "axios"
import {createStore, applyMiddleware} from "redux"
import ReduxThunk from "redux-thunk"
import rootReducer from "../client/reducers"

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: "http://react-ssr-api.herokuapp.com",
    headers: {
      cookie: req.get("cookie") || ""
    }
  })
  const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk.withExtraArgument(axiosInstance)))
  return store
}
