import React from 'react'
import {Provider} from "react-redux"
import {StaticRouter} from "react-router-dom"
import {renderToString} from "react-dom/server"
import {renderRoutes} from "react-router-config"

import Routes from "../client/Routes"

/**
 * Browser Router can just look at the URL in the browser's address bar and fig which route to render.
 * But StaticRouter cannot do that. We have to tell it what route to render. We have to get the url
 * from the original request object.
 */

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  )

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
