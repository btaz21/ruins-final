import React, { Component } from 'react'


export default class SeeOtherRuins extends Component {
  render = () => {
    return (
      <div className="other-ruins-container">
        <h2>Explore Other Ruins</h2>
        <div className="other-ruins-item">
          <img className="other-image" src={this.props.state.dynamicImage} alt="" />
          <img id="left-arrow" onClick={this.props.cycleImageLeft} src="../images/277.png" alt="l-arrow"/>
          <img id="right-arrow" onClick={this.props.cycleImageRight} src="../images/276.png" alt="r-arrow"/>
        </div>
      </div>
    )
  }
}
