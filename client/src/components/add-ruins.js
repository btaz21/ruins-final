import React, { Component } from 'react';
import axios from 'axios';
import { geolocated } from "react-geolocated";
import Navbar from "./navbar";
import S3FileUpload from 'react-s3';
import Coordinates from './coordinatesConstructor.js'
import CoordinatesButton from './coordinatesButton.js'
import CreateForm from './createForm.js'
import Compass from './compass.js'
import config from './configS3.js'


class AddRuins extends Component {
  state = {
    city: "Undesignated City",
    image: ["https://i.imgur.com/xTiY3fK.jpg"],
    description: null,
    location: {},
    rating: [],
    descBool: false,
    compassBool: false,
    lat: null,
    lng: null,
    errorMessage: null,
    ruins: [],
  }

  componentDidMount = () => {
    if(!this.props.isGeolocationAvailable) {
      console.log("geolocation not supported")
    } else {
      console.log("locating")
    }
  }

  createRuin = (event) => {
    event.preventDefault()
    axios.post(
      "http://localhost:5000/ruins",
      {
        name: this.state.name,
        city: this.state.city,
        image: this.state.image,
        description: this.state.description,
        location: this.state.location,
      }
    ).then(
      (response) => {
        this.setState({ruins: response.data})
        this.props.history.push('/ruinsgrid')
      }
    )
  }

  addCity = (place) => {
    if (Object.keys(this.state.location).length === 0) {
      const lat = place.geometry.location.lat()
      const lng = place.geometry.location.lng()
      let coordinates = new Coordinates(lat, lng)
      this.setState({city: place.formatted_address, location: coordinates})
    } else {
      this.setState({city: place.formatted_address})
    }
  }

  processImage = (event) => {
    if(event.target.files.length > 3) {
      this.setState({errorFiles: "Please limit to three photos"})
    } else {
      const filesArray = []
      for (let i = 0; i < event.target.files.length; i++) {
        const file = event.target.files[i]
        S3FileUpload.uploadFile(file, config)
        .then(
          (response) => {
            filesArray.push(response.location)
          })
      }
      this.setState({
        image: filesArray,
        errorFiles: null
      })
    }
  }

  setCoordinates = () => {
    if (!this.props.coords) {
      this.setState({errorMessage: "Try again, still locating..."})
    } else {
      let coordinates = new Coordinates(
        this.props.coords.latitude,
        this.props.coords.longitude
      )
      this.setState({
        location: coordinates,
        compassBool: true,
        errorMessage: null})
    }
  }

  addName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  makeDescription = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  render = () => {
    return (
      <div>
        <Navbar />
        <div className="create-container">
          <Compass state={this.state} />
          <div className="form-container">
            <CoordinatesButton state={this.state} setCoordinates={this.setCoordinates}/>
            <CreateForm
            state={this.state}
            toggleName={this.toggleName}
            toggleDescription={this.toggleDescription}
            toggleCity={this.toggleCity}
            makeDescription={this.makeDescription}
            addName={this.addName}
            processImage={this.processImage}
            addCity={this.addCity}
            createRuin={this.createRuin}
            />
          </div>
        </div>
      </div>
    )
  }
}


export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(AddRuins);
