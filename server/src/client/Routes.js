/**
 * This file is shared between both client and server.
 */

import HomePage from "./pages/HomePage"
import UsersListPage from "./pages/UsersListPage"

export default [
  {
    path: "/",
    exact: true,
    ...HomePage
  },
  {
    path:"/users",
    ...UsersListPage
  }
]
