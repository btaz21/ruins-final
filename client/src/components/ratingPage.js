import React, { Component } from 'react'


export default class RatingPage extends Component {
  render = () => {
    return (
      <div className="ratings-container">
        <div className="rating">
          <span id="5" onClick={this.props.setRating} className="star">☆</span>
          <span id="4" onClick={this.props.setRating} className="star">☆</span>
          <span id="3" onClick={this.props.setRating} className="star">☆</span>
          <span id="2" onClick={this.props.setRating} className="star">☆</span>
          <span id="1" onClick={this.props.setRating} className="star">☆</span>
        </div>
      </div>
    )
  }
}
