import React, { Component } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true



export default class Logout extends Component {
  render = () => {
    return (
      <div className="logout-button">
        <button onClick={this.props.logout} type="button">Log Out</button>
      </div>
    )
  }
}
