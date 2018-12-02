//Starting point for the client side application
import "babel-polyfill"
import React from 'react'
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"

import {createStore, applyMiddleware} from "redux"
import ReduxThunk from "redux-thunk"
import {Provider} from "react-redux"
import rootReducer from "./reducers"

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))


import Routes from "./Routes"

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
)

ReactDOM.hydrate(<App />, document.getElementById("root"))
