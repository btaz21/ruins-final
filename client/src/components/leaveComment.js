import React, { Component } from 'react'


export default class LeaveComment extends Component {
  render = () => {
    return (
      <div className="comments-container">
        <div className="comments">
          <h2>Already visited? Leave an entry</h2>
          <textarea onKeyUp={this.props.setComments}></textarea>
          <button onClick={this.props.removeComments}>Next</button>
        </div>
      </div>
    )
  }
}
