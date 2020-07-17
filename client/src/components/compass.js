import React, { Component } from 'react';

export default class Compass extends Component {
  render = () => {
    return (
      <div className="compass-container">
        <div id="lat">Latitude: {this.props.state.location.lat}</div>
        <div className={this.props.state.compassBool ? "compass-mod" : "compass"}></div>
        <div id="lng">Longitude: {this.props.state.location.lng}</div>
      </div>
    )
  }
}
