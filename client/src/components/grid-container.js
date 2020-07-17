import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class GridContainer extends Component {
  render = () => {
    return (
      <div className="grid-container">
        {
          this.props.state.ruins.map((ruin, i) => {
            return (
              <div className={`grid-item item-${i + 1}`} key={i}>
                <Link className="link cityname" to={{pathname: `ruins/${ruin._id}`, state: this.props.state }}>
                <h2>{ruin.name}</h2>
                <p>{ruin.city}</p>
                <img className="grid-image" src={ruin.image[0]} alt="ruin"/>
                </Link>
                <div className="likes">
                  <img className="like-button" onClick={this.props.addLike} id={ruin._id} className="like-icon" src="../images/211.svg" alt=""/>
                  <p>{ruin.likes}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
