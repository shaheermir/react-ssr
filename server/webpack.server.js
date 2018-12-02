const path = require("path")
const merge = require("webpack-merge")
const webpackNodeExternals = require("webpack-node-externals")

/**
 * webPackNodeExternals tells webpack that we dont need the libraries coming from node_modules
 * inside our server bundle.js. Why ? because we can jus require them as run time. This doesn
 * really make a difference cuz we are not shipping out server bundle anywhere, but it reduces
 * the time to build that bundle and therefore, the startup time.
 */

const baseConfig = require("./webpack.base")

const config = {
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)
