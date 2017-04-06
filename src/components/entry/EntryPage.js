import React, { Component } from 'react';
import EmojiPage from '../entry/emoji/EmojiPage';
import RatingPage from '../entry/rating/RatingPage';
import MessagePage from '../entry/message/MessagePage';
import Save from './Save';
import { connect } from 'react-redux';
import { entrySaved, addEntry } from '../../actions/newEntry';

class EntryPage extends Component {


  constructor(props) {
    super(props);
    this.handleEmojiClick = this.handleEmojiClick.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
    this.handleMessagesEntered = this.handleMessagesEntered.bind(this);
    // this.handleEntryClick = this.handleEntryClick(this);
    this.state = { isBegin: false, isClicked: false, isSelected: false, isEntered: false, data: {} };

  }

  // handleEntryClick = () => {
  //   this.setState({ isBegin: true });
  // }

  handleEmojiClick(emotion) {
    const data = this.state.data;
    data.emotion = emotion;
    this.setState({ isClicked: true, data: data });
  }

  handleRatingClick(rating) {
    const data = this.state.data;
    data.rating = rating;
    this.setState({ isSelected: true, data: data })
  }

  handleMessagesEntered(messages) {
    const data = this.state.data;
    data.messages = messages;
    this.setState({ isEntered: true, data: data })
  }

  render() {
    const isClicked = this.state.isClicked;
    // const isBegin = this.state.isBegin;
    const isSelected = this.state.isSelected;
    const isEntered = this.state.isEntered;
    console.log(this.state.data);

    return (
      <div>
        <article>
          <EmojiPage handler={this.handleEmojiClick}/>
          {isClicked && <RatingPage handler={this.handleRatingClick}/>}
          {isSelected && <MessagePage handler={this.handleMessagesEntered}/>}
        </article>
        <article>
          {isEntered && <Save data={this.state.data} /> }

        </article>

      </div>
    )
  }
}

const mapStateToProps = state => {

  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    newEntry: (data) => {
      return dispatch(addEntry(data));
    }
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EntryPage);





