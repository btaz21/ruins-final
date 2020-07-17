import React, { Component } from 'react';


export default class SearchBar extends Component {
  render = () => {
    return (
      <div className="sorting">
        <label>Search<input onKeyUp={this.props.search} type="text"></input></label>
      </div>
    )
  }
}
