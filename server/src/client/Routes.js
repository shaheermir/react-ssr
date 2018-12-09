/**
 * This file is shared between both client and server.
 */
import App from "./App"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import UsersListPage from "./pages/UsersListPage"
import AdminsListPage from "./pages/AdminsListPage"

export default [
  {
    ...App,
    routes: [
      {
        path: "/",
        exact: true,
        ...HomePage
      },
      {
        path:"/users",
        ...UsersListPage
      },
      {
        path:"/admins",
        ...AdminsListPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
]


