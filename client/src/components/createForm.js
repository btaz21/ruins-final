import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { AiOutlineCamera } from 'react-icons/ai'


export default class CreateForm extends Component {
  state = {
    nameBool: false,
    cityBool: false,
    descBool: false
  }
  toggleName = () => {
    this.setState({
      nameBool: !this.state.nameBool
    })
  }
  toggleCity = () => {
    this.setState({
      cityBool: !this.state.cityBool
    })
  }
  toggleDescription = () => {
    this.setState({
      descBool: !this.state.descBool
    })
  }
  render = () => {
    return (
      <form className="form" onSubmit={this.props.createRuin}>

        <div className="file-input">
          <label>
          <input onChange={this.props.processImage} type="file" accept="image/*" multiple/>
          <h4>Upload Images</h4>
           <AiOutlineCamera size="1.15em"/>
          </label>
          {this.props.state.errorFiles && <h5>{this.props.state.errorFiles}</h5>}
          {this.props.state.uploadSuccess && <h5>{this.props.state.uploadSuccess}</h5>}
        </div>

        <div onClick={this.toggleName}>
          <h4>Add Name</h4>
          <img className={this.state.nameBool ? "flipUp" : "flipDown" } src="../images/278white.png" alt="up-arrow"/>
        </div>
        {this.state.nameBool &&
        <div>
          <input
          onKeyUp={this.props.addName}
          name="name"
          type="text"></input>
        </div>
        }

        <div id="form-div-top" onClick={this.toggleCity}>
          <h4>Add City</h4>
          <img className={this.state.cityBool ? "flipUp" : "flipDown" } src="../images/278white.png" alt="up-arrow"/>
        </div>

        {this.state.cityBool &&
        <div className="auto-complete">
          <Autocomplete
          apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          style={{width: '90%', textAlign:'center'}}
          onPlaceSelected={(place) => {this.props.addCity(place)}}
          types={['(regions)']}
          />
        </div>
        }

        <div onClick={this.toggleDescription}>
          <h4>Add Description</h4>
          <img className={this.state.descBool ? "flipUp" : "flipDown" } src="../images/278white.png" alt="up-arrow"/>
        </div>

        {this.state.descBool &&
        <div>
          <textarea
            onKeyUp={this.props.makeDescription}
            name="description"
            placeholder="(i.e. consider what kind of ruin it is, how accessible it is, the approximate size)" type="text"></textarea>
        </div>
        }

        <div id="submit">
          <input
            type="submit"
            value="Add Ruin"/>
        </div>

      </form>
    )
  }
}
