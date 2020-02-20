import React, { Component } from 'react'
import Auth from './auth'

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <h1>Dashbaord</h1>
        <button onClick={() => Auth.logout(
          () => this.props.history.push('/'))}>Logout</button>
      </>
    )
  }
}
