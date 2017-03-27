import React, { Component } from 'react';
import './HomePage.css';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import EmojiPage, { Emotions } from '../emoji/EmojiPage';
import RatingPage from '../rating/RatingPage';
import MessagePage from '../message/MessagePage';
import Save from '../save/Save';

const style = {
  margin: 12,
};


class HomePage extends Component {

  constructor(props) {
    super(props);
    this.handleEmojiClick = this.handleEmojiClick.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
    this.handleMessagesEntered = this.handleMessagesEntered.bind(this);
    this.state = { isClicked: false, isSelected: false, isEntered: false, data: {} };

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

  render() {
    const isClicked = this.state.isClicked;
    const isSelected = this.state.isSelected;
    const isEntered = this.state.isEntered;
    console.log(this.state.data);

    // let emotionSelected = '';
    //     if (isClicked) {
    //         emotionSelected = <RatingPage handler = {this.handleRatingClick}/>; //appear
    // }

    // let ratingSelected = '';
    //     if (isSelected) {
    //         ratingSelected = <MessagePage />;
    // }

    return (
      <div>
        <h1>Welcome!</h1>
        <article>
          <Link to="about"><RaisedButton label="About" style={style}></RaisedButton></Link><br/>

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

export default HomePage;


//
// {/*<Link to="emoji"><RaisedButton label="Emoji Page" style={style}></RaisedButton></Link>*/}
// {/*<Link to="rating"><RaisedButton label="Rating Page" style={style}></RaisedButton></Link>*/}
// {/*<Link to="message"><RaisedButton label="Message Page" style={style}></RaisedButton></Link>*/}
// {/*<Link to="about"><RaisedButton label="About Page" style={style}></RaisedButton></Link>*/}


// Vertical line stepper for emoji, rating, message timeline
// Slider for the rating section
// Paper for different components
// Drawer would be good
// Divider for registration
// Card might be a good format


// http://www.material-ui.com/#/components/app-bar
// http://www.material-ui.com/#/customization/colors  -- to customize collors