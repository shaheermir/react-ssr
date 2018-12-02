import "babel-polyfill"
import express from "express"
import renderer from "./helpers/renderer"

import createStore from "./helpers/createStore"

const app = express()

app.use(express.static("public"))

app.get("/*", (req, res) => {
  const store = createStore()

  // some logic to load data and intialize store

  res.send(renderer(req, store))
})

app.listen(3000, () => console.log("Server is running on localhost:3000"))


// https://react-ssr-api.herokuapp.com/
