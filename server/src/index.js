import "babel-polyfill"
import express from "express"
import proxy from "express-http-proxy"
import { matchRoutes } from "react-router-config"

import renderer from "./helpers/renderer"
import Routes from "./client/Routes"
import createStore from "./helpers/createStore"

const app = express()

app.use("/api", proxy("http://www.react-ssr-api.herokuapp.com", {
  proxyReqOptDecorators(opts) {
    opts.headers["x-forwarded-host"] = "localhost:3000"
    return opts
  }
}))

app.use(express.static("public"))

app.get("/*", (req, res) => {
  const store = createStore()

  //will ret an array of routes to be rendered based on the url
  const promises = matchRoutes(Routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) : null
  })

  Promise.all(promises).then(() => {
    res.send(renderer(req, store))
  })
})

app.listen(3000, () => console.log("Server is running on localhost:3000"))
