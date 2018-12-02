/**
 * This file is shared between both client and server.
 */

import Home from "./components/Home"
import UsersList from "./components/UsersList"

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path:"/users",
    component:UsersList
  }
]
