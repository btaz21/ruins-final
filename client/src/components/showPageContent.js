import React, { Component } from 'react'



export default class ShowPageContent extends Component {
  state = {
    moreInfoText: false,
    imagesBool: false,
    animateClass: ""
  }
  togglePhotos = () => {
    this.setState({
      imagesBool: !this.state.imagesBool,
      moreInfoText: !this.state.moreInfoText,
      animateClass:"animate__animated animate__fadeInRight"
    })
  }
  render = () => {

    let avgRating = 0;
    if (this.props.state.ruin.rating.length > 0) {
      for (let rating of this.props.state.ruin.rating) {
        avgRating += rating
      }
      avgRating = (avgRating / this.props.state.ruin.rating.length).toFixed(2);
    } else {
      avgRating = ""
    }

    return (
      <div className="content">
        <div className="content-left">
          <div className="content-left-header">
          <span role="img" aria-label="star">⭐{avgRating}<span id="grey"> ({this.props.state.ruin.rating.length})</span></span>
          </div>
          <p>{this.props.state.ruin.description}</p>
          <h3 onClick={this.togglePhotos}>{this.state.moreInfoText ? "See less" : "See more"}</h3>
        </div>
        <div className="content-right">
          <div className={this.state.imagesBool? "more-images-container" : "more-images-hidden"}>
          {this.props.state.ruin.image.slice(1).map((item, i) => {
              return <div key={i} className="see-more-images">
              <img className={this.state.animateClass} src={item} alt=""></img>
            </div>
            })
          }
          </div>
        </div>
      </div>
    )
  }
}
