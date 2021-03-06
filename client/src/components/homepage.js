import React, { Component } from 'react';
import Navbar from "./navbar.js";
import { GiAncientRuins } from 'react-icons/gi'
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render = () => {
    return (
        <div className="welcome-container">
          <div className="welcome">
            <h1>Ruinfindr</h1>
            <button onClick={this.props.toggleLogin}>Sign up</button>
            <GiAncientRuins size={"20em"}/>
          </div>
        </div>
    )
  }
}
