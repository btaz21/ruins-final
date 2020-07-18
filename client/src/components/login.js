import React, { Component } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true



export default class Login extends Component {
  render = () => {
    return (
      <div className="login-container">
        <h3>Login</h3>
        <form onSubmit={this.props.signIn}>
          <input type="text" name="username" placeholder="username"></input>
          <input type="password" name="password" placeholder="password"></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}
