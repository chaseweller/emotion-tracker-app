import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import './AboutPage.css';

const style = {
  margin: 12,
};

export default () => (
      <div>
        <h1>How it works</h1>
        <ul>
          Select a time that the notification will come to you<br/>
          <h2>1. Selected how you felt today</h2><br/>
          <img src="images/EmojiBar.png" frameBorder="1"/><br/>
          <h2>2. Select a level at which you felt that emotion</h2>
          <img src="images/RatingBar.png"/><br/>
         <h2>3. Write a few things for which you are grateful</h2>
          <img src="images/MessageBoard.png"/><br/>
        </ul>


        <ul>
          Review past entries with an interactive chart/calendar/query
        </ul>
        <Link to="/"><RaisedButton label="Home Page" style={style}></RaisedButton></Link><br/>
        <Link to="login"><RaisedButton label="Register" style={style}></RaisedButton></Link>
      </div>

    );
