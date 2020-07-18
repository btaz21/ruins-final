import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import mapStyles from "./mapStyles.js";
import axios from 'axios';
import Navbar from "./navbar.js";




export class SeeRuins extends Component {

  state = {
    ruins: [],
    selectedPlace: {},
    activeMarker: {},
    showInfoWindow: false
  }

  componentDidMount = () => {
    axios.get("/api/ruins").then(
      (response) => {
        this.setState({ruins: response.data})
      }
    )
  }

  onMarkerClick = (props, marker, event) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showInfoWindow: true,
    })
  }

  onMapClicked = (props) => {
    if (this.state.showInfoWindow) {
    this.setState({
      showInfoWindow: false,
      activeMarker: null
      })
    }
  }

  windowHasClosed = () => {
    this.setState({
      showInfoWindow: false,
      activeMarker: null
    })
  }

  render = () => {
    return (

      <div>
        <Navbar />

        <Map
          google={this.props.google}
          zoom={5}
          styles={this.props.mapStyles}
          onClick={this.onMapClicked}
          initialCenter={{lat: 37, lng: -95}}
        >

        {
          this.state.ruins.map((ruin, i) => {
            return <Marker id={ruin.image[0]} key={i} onClick={this.onMarkerClick} position={ruin.location} name={ruin.name}/>
          })
        }

        <InfoWindow
          onOpen={this.windowHasOpened}
          onClose={this.windowHasClosed}
          marker={this.state.activeMarker}
          visible={this.state.showInfoWindow}>
            <div className="marker">
              <h2>{this.state.selectedPlace.name}</h2>
              <img className="marker-image" src={this.state.selectedPlace.id} alt="ruins"/>
            </div>
        </InfoWindow>

        </Map>
      </div>
    )
  }
}


SeeRuins.defaultProps = mapStyles;
const API_KEY = `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

export default GoogleApiWrapper({
  apiKey: API_KEY
})(SeeRuins);
