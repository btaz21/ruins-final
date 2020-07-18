import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Signup from './signup.js'
import Login from './login.js'
import Logout from './logout.js'
import axios from 'axios';


export default class Navbar extends Component {
  state = {
    isLoggedIn: false,
    loginOpen: false,
    loginClass: "",
    errorMessage: null
  }
  componentDidMount = () => {
    axios.get(
      "/api/sessions"
    ).then(
      (response) => {
        if (response.data.username) {
          this.setState({
            isLoggedIn: true,
            errorMessage: null
        })
      }
    })
  }
  createUser = (event) => {
    event.preventDefault()
    const { username, password } = event.target
    console.log(username.value);
    console.log(password.value);
    axios.post(
      "/api/users", {
        username: username.value,
        password: password.value
      }
    ).then(
      (response) => {
        console.log(response);
        if (response.data.errors) {
          this.setState({errorMessage: response.data.errors.username.properties.message})
        } else if (response.data.required) {
          this.setState({errorMessage: response.data.required})
        } else {
          this.setState({
            loginOpen: false
          })
        }
      }
    ).catch((error) => {
      console.log(error);
    })
  }
  logout = () => {
    axios.delete(
      "/api/sessions"
    ).then(
      (response) => {
        this.setState({
          isLoggedIn: false,
          loginOpen: false
        })
        window.location = '/ruinsgrid'
      }
    )
  }
  signIn = (event) => {
    event.preventDefault()
    const {username, password} = event.target
    axios.post(
      "/api/sessions", {
        username: username.value,
        password: password.value
      }
    ).then(
      (response) => {
        console.log(response);
        if (response.data.username) {
          this.setState({
            loggedInUser: response.data,
            isLoggedIn: true,
            loginOpen: false
          })
        } else {
          this.setState({errorMessage: response.data.required})
        }
      }
    )
  }
  toggleLogin = () => {
    this.setState({
      loginOpen: !this.state.loginOpen,
      loginClass: "animate__animated animate__fadeIn"
    })
  }
  render = () => {
    return (
      <div className="navbar">

        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="link logo">
            <h1>Ruinfindr</h1>
            <img alt="logo" src="../../images/rocks3.png"/>
          </div>
        </Link>

        <div className="nav-list">
          <Link className="link nav-icons" to={{pathname: "/", state: this.state }}><img alt="" id="map" src="../../images/015.svg"/></Link>
          {this.state.isLoggedIn && <Link className="link nav-icons" to={{pathname: "/addruin", state: this.state }}><img alt="" id="pin" src="../../images/143.svg"/></Link> }
          {this.state.isLoggedIn && <Link className="link nav-icons" to="/ruinsgrid"><img alt="" id="see" src="../../images/327.png"/></Link>}
          <Link className="link nav-icons"><img onClick={this.toggleLogin} alt="signup-icon" id="sign-up" src="../../images/163.svg"/></Link>
        </div>

        {this.state.loginOpen &&
        <div id="nav-user" className={this.state.loginClass}>
        <h6>{this.state.errorMessage}</h6>
        {!this.state.isLoggedIn && <Signup createUser={this.createUser}/> }
        {!this.state.isLoggedIn &&  <Login signIn={this.signIn}/> }
        {this.state.isLoggedIn &&  <Logout logout={this.logout}/> }
        </div>
        }

      </div>
    )
  }
}
