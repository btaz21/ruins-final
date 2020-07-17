import React, { Component } from 'react'
import { Link } from 'react-router-dom';



export default class ShowImage extends Component {
  render = () => {
    return (
      <div>
        <div className="icons-container">
          <Link to="/ruinsgrid"><img className="back-button" src="../images/277.png" alt=""/></Link>
          <div className="edit-del-icons">
            <img onClick={this.props.deleteRuin} id={this.props.state.ruin._id} className="entry-icons" src="../images/030.png" alt=""/>
            <img onClick={this.props.toggleCommentBox} className="entry-icons" src="../images/054.png" alt=""/>
          </div>
        </div>
        <div className="edit-image">
          <img src={this.props.state.ruin.image[0]} alt=""/>
          <h1>{this.props.state.ruin.name}</h1>
        </div>
      </div>
    )
  }
}
