import React, { Component } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true



export default class Signup extends Component {
  render = () => {
    return (
      <div className="signup-container">
        <h3>Sign Up</h3>
        <form onSubmit={this.props.createUser}>
          <input type="text" name="username" placeholder="username"></input>
          <input type="password" name="password" placeholder="password"></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}
