import React, { Component } from 'react'
import Auth from './auth'
import { Button } from 'antd'

export default class LandingPage extends Component {
  render() {
    // const { location } = this.props
    // console.log(this.props)
    // if (location.state && !location.state.isAuthenticated) {
    //   alert('User not authenticated or cant access')
    // }
    return (
      <>
        <h1>Landing page</h1>
        <Button onClick={() => Auth.login(
          () => this.props.history.push('/dashboard'))}>Login</Button>
        <button onClick={() => this.props.history.push('/dashboard')}>Dashboard</button>
        <button onClick={() => this.props.history.push('/terms')}>Terms and conditions Page</button>
      </>
    )
  }
}
