import React, { Component } from 'react';
import axios from 'axios';
import Navbar from "./navbar";
import SearchBar from "./searchbar.js"
import GridContainer from "./grid-container.js"

export default class SeeRuinsGrid extends Component {
  state = {
    ruins: [],
    infoBox: null,
    module: false,
    infoBoxModule: false,
    infoBoxForm: false,
    searchableList: [],
  }
  componentDidMount = () => {
    axios.get("/ruins").then(
      (response) => {
        this.setState(
          {
            ruins: response.data,
            searchableList: response.data
          }
        )
      }
    )
  }
  addLike = (event) => {
    axios.put("/ruins/likes/" + event.target.id).then(
      (response) => {
        this.setState({ruins: response.data})
      }
    )
  }
  search = (event) => {
    let newList = this.state.searchableList.filter(item => {
      let city = item.city.toLowerCase().includes(event.target.value) ||
                item.name.toLowerCase().includes(event.target.value) ||
                item.city.includes(event.target.value) ||
                item.name.includes(event.target.value)
      return city
    })
    this.setState({ruins: newList})
  }
  render = () => {
    return (
      <div>
        <Navbar />
        <SearchBar search={this.search}/>
        <GridContainer state={this.state} addLike={this.addLike}/>
      </div>
    )
  }
}
