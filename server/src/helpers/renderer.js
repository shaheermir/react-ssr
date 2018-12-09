import React from 'react'
import {Provider} from "react-redux"
import serialize from "serialize-javascript"
import {StaticRouter} from "react-router-dom"
import {renderToString} from "react-dom/server"
import {renderRoutes} from "react-router-config"

import Routes from "../client/Routes"

/**
 * Browser Router can just look at the URL in the browser's address bar and fig which route to render.
 * But StaticRouter cannot do that. We have to tell it what route to render. We have to get the url
 * from the original request object.
 *
 * Static Router will also pass its context obj down to all components it renders.
 */

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  )

  return `
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.__INITIAL_STATE__ = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
