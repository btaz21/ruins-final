import React, { Component } from 'react'


export default class Entries extends Component {
  render = () => {
    return (
      <div>

        <div className="entries-container">
          <div className="entries-header">
            <h2>Reviews({this.props.state.ruin.comments.length})</h2>
          </div>
          <div className="entries-container-lower">
          {this.props.state.ruin.comments.map((comment, i) => {
            if (i % 2 === 0 || i === 0) {
            return (
              <div key={i} className="entries-left">
                <img src="../images/048.png" alt="user"/>
                <h5>{comment}</h5>
              </div>
            )
          } else {
              return (
                <div key={i} className="entries-right">
                  <h5>{comment}</h5>
                  <img src="../images/048white.png" alt="user"/>
                </div>
                  )
                }
              }
            )
          }
          </div>
        </div>
      </div>
    )
  }
}
