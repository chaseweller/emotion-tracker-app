import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

export default () => (
      <div>
        <h1>How it works</h1>
        <ul>
          Select a time that the notification will come to you<br/>
          Also select a type of writing that would like<br/>
          <h2>1. Selected how you felt today</h2><br/>
          <img src="images/EmojiBar.png" alt="emotions" frameBorder="1"/><br/>
          <h2>2. Select a level at which you felt that emotion</h2>
          <img src="images/RatingBar.png" alt="rating"/><br/>
         <h2>3. Write a few things for which you are grateful</h2>
          <img src="images/MessageBoard.png" alt="message"/><br/>
        </ul>


        <ul>
          Review past entries with an interactive chart/calendar/query
        </ul>
        <Link to="login"><RaisedButton label="Register" style={style}></RaisedButton></Link>
        <Link to="/"><RaisedButton label="Back" style={style}></RaisedButton></Link><br/>

      </div>

    );
