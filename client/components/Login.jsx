import React from 'react'
import { matai, password } from './class'
import { Redirect } from 'react-router-dom'

export default class Login extends React.Component {
  state = {
    name: '',
    password: '',
    authenticated: false
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault()
    // check credentials
    const authName = matai.find(name => name === this.state.name)
    if (authName && this.state.password === password) {
      console.log('authenticated user')
      this.setState({
        authenticated: true
      })
    } else {
      console.log('incorrect details')
    }
  }
  render () {
    if (this.state.authenticated) {
      return <Redirect to='/tandem'/>
    }
    return (
      <React.Fragment>
        <h1>App Name</h1>
        <form onSubmit={this.handleClick}>
          <input type="text" name="name" placeholder="Name" onChange={this.handleInput} value={this.state.name}/>

          <input type="password" name="password" placeholder="Password" onChange={this.handleInput} value={this.state.password}/>
          <button id='matchMe'>Login</button>
        </form>
      </React.Fragment>
    )
  }
}