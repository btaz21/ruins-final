import React, { Component } from 'react';
import axios from 'axios';
import RatingPage from './ratingPage.js'
import LeaveComment from './leaveComment.js'
import Entries from './entries.js'
import SeeOtherRuins from './seeOtherRuins.js'
import ShowPageContent from './showPageContent.js'
import ShowImage from './showImage.js'


export default class EditRuins extends Component {
  state = {
    ruin: {
      image: [],
      rating: [],
      comments:[]
    },
    editBool: false,
    imagesBool: false,
    commentsBool: false,
    ratingBool: false,
    dynamicImage: null,
    i: 0,
    rating: null,
    comments: null,
  }

  componentDidMount = () => {
    axios.get(
      this.props.location.pathname
    ).then(
      (response) => {
        this.setState({
          ruin: response.data,
          dynamicImage: this.props.location.state.ruins[0].image[0]
        })
      }
    )
  }

  deleteRuin = (event) => {
    if (window.confirm("Are you sure you want to delete this entry?") === true) {
      axios.delete(
        "/ruins/" + event.target.id
      ).then(
        (response) => {
          this.props.history.push('/ruinsgrid')
        }
      )
    }
  }

  toggleCommentBox = () => {
    this.setState({commentsBool: !this.state.commentsBool})
  }

  setComments = (event) => {
    this.setState({comments: event.target.value})
  }

  removeComments = () => {
    this.setState(
      {
        commentsBool: !this.state.commentsBool,
        ratingBool: !this.state.ratingBool
      }
    )
  }

  setRating = (event) => {
    const rating = parseInt(event.target.id)
    axios.put(
      "/ruins/rating/comments/" + this.props.match.params.id,
      {
        rating: [...this.state.ruin.rating, rating],
        comments: [...this.state.ruin.comments, this.state.comments]
      }
    ).then(
      (response) => {
        window.location.reload(true)
      }
    )
  }

  cycleImageRight = () => {
    if (this.state.i < this.props.location.state.ruins.length - 1) {
      this.setState({
        dynamicImage: this.props.location.state.ruins[this.state.i + 1].image[0],
        i: this.state.i + 1
       })
    } else this.setState({
      i: 0,
      dynamicImage: this.props.location.state.ruins[0].image[0],
    })
  }

  cycleImageLeft = () => {
    let index = this.props.location.state.ruins.length - 1
    if (this.state.i > 0) {
      this.setState({
        dynamicImage: this.props.location.state.ruins[this.state.i - 1].image[0],
        i: this.state.i - 1,
      })
    } else {
      this.setState({
        i: this.props.location.state.ruins.length - 1,
        dynamicImage: this.props.location.state.ruins[index].image[0],
      })
    }
  }

  render = () => {
    return (
      <div className="edit-container">
        <ShowImage
        state={this.state}
        deleteRuin={this.deleteRuin}
        toggleCommentBox={this.toggleCommentBox}
        />
        <ShowPageContent
        state={this.state}
        togglePhotos={this.togglePhotos}
        />
        <div className="content-bottom">
          <SeeOtherRuins
          state={this.state}
          cycleImageLeft={this.cycleImageLeft}
          cycleImageRight={this.cycleImageRight}
          />
          <Entries
          state={this.state}
          />
        </div>
        {this.state.commentsBool &&
        <LeaveComment
        setComments={this.setComments}
        removeComments={this.removeComments}
        />}
        {this.state.ratingBool &&
        <RatingPage
        setRating={this.setRating}
        />}
      </div>
    )
  }
}
