import React, { Component } from 'react'


export default class LeaveComment extends Component {
  render = () => {
    return (
      <div className="comments-container">
        <div className="comments">
            <div className="comments-bar">
              <h2>Already visited? Leave a review</h2>
              <h3 onClick={this.props.toggleCommentBox}>x</h3>
            </div>
          <textarea onKeyUp={this.props.setComments}></textarea>
          <button onClick={this.props.removeComments}>Next</button>
        </div>
      </div>
    )
  }
}
