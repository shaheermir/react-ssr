import React from 'react'
import {connect} from "react-redux"

import requireAuth from "../components/HOCs/requireAuth"
import {fetchAdmins} from "../actions"

class AdminsListPage extends React.Component {
  componentDidMount(){
    this.props.fetchAdmins()
  }

  renderAdmins(){
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>
    })
  }

  render () {
    return (
      <div>
        <h3>Protected list of admins!</h3>
        <ul>
          {this.renderAdmins()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  admins: state.admins
})

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPage)),
  loadData: (store) => store.dispatch(fetchAdmins())
}
