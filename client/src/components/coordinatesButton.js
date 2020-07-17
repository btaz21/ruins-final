import React, { Component } from 'react';


export default class CoordinatesButton extends Component {
  render = () => {
    console.log(this.props);
    return (
      <div>
        <div className="coordinates-button">
          <button onClick={this.props.setCoordinates}>Set Current Coordinates</button>
        </div>
        <div className="error">{this.props.state.errorMessage}</div>
      </div>
    )
  }
}
