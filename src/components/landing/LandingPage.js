import React, { Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import EmojiPage, { Emotions } from '../emoji/EmojiPage';
import RatingPage from '../rating/RatingPage';
import MessagePage from '../message/MessagePage';
import Save from '../save/Save';
import './LandingPage.css';


const style = {
  margin: 4,
};



class landingPage extends Component {

  render () {

    return (
      <div>
        <article>
      <h1>Remember, record and revisit</h1>
        <h3> A way to reflect each day on how it was and record thoughts and ideas over time see an improvement</h3>
        <p><Link to="about"><RaisedButton label="See how it works -->" style={style}></RaisedButton></Link><br/>
          <Link to="login"><RaisedButton className="login-button" label="Login" style={style}></RaisedButton></Link>
        </p>
        </article>
      </div>
    )
  }
}

export default landingPage;