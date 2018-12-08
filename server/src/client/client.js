//Starting point for the client side application
import "babel-polyfill"
import React from 'react'
import axios from "axios"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import {renderRoutes} from "react-router-config"

import {createStore, applyMiddleware} from "redux"
import ReduxThunk from "redux-thunk"
import {Provider} from "react-redux"
import rootReducer from "./reducers"

const axiosInstance = axios.create({
  baseURL: "/api",

})

const store = createStore(rootReducer, window.__INITIAL_STATE__, applyMiddleware(ReduxThunk.withExtraArgument(axiosInstance)))


import Routes from "./Routes"

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.hydrate(<App />, document.getElementById("root"))
