import React from "react"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"

import { fetchUsers } from "../actions"

class UsersList extends React.Component {
  componentDidMount() {
    console.log("---- COMP DID MOUNT ---- ")
    this.props.fetchUsers()
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    )
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  render() {
    console.log("---- RENDER ----")
    return (
      <div>
        {this.head()}
        Here is a list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

function loadData(store) {
  // we actually return a promise here, why ? because dispatch returns whatever
  // you give it, and we are giving it a async function.
  return store.dispatch(fetchUsers())
}

export default {
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersList),
  loadData
}
