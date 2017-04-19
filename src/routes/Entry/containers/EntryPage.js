import React, { Component } from 'react';
import base from '../../../config';
import EmojiPage from './emoji/EmojiPage';
import RatingPage from './rating/RatingPage';
import MessagePage from './message/MessagePage';
import RaisedButton from 'material-ui/RaisedButton';

class EntryPage extends Component {

  constructor(props) {
    super(props);
    this.handleEmojiClick = this.handleEmojiClick.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
    this.handleMessagesEntered = this.handleMessagesEntered.bind(this);
    this.state = { open: false, isBegin: false, isClicked: false, isSelected: false, isEntered: false, data: {}, };
  }

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

  saveEntry = () => {
    const today = new Date();
    const date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
    const time = today.getHours() + ":" + today.getMinutes();
    const currentDate = date + ' | ' + time;

    const stateData = this.state.data;
    stateData.date = currentDate;
    this.setState({ data: stateData });
    this.props.history.push('./pastentries');

    const data = {
      ...this.state.data
    };
    console.log(data);
    base.push(`users/${base.auth().currentUser.uid}/entries`, { data }
    )
  }

  render() {

    const isClicked = this.state.isClicked;
    const isSelected = this.state.isSelected;

    return (
      <div>
        <article>
          <EmojiPage handler={this.handleEmojiClick}/>
          {isClicked && <RatingPage handler={this.handleRatingClick}/>}
          {isSelected && <MessagePage handler={this.handleMessagesEntered}/>}
          {isSelected && <div><RaisedButton label="Save" onTouchTap={this.saveEntry} onTouchStart={alert("Submitted")}/></div>}
        </article>
      </div>
    )
  }
}

export default EntryPage;




