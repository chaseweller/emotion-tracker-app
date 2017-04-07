import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
// import { Emotions } from '../../Entry/containers/emoji/EmojiPage';
import './LandingPage.css';

const style = {
  margin: 4,
};

export default () => (
      <div>
        <article>
          <h1>Remember, record and revisit</h1>
          <h3> A way to reflect each day on how it was and record thoughts and ideas over time see an improvement</h3>
          <Link to="about"><RaisedButton label="See how it works -->" style={style}></RaisedButton></Link><br/>
          <Link to="login"><RaisedButton className="login-button" label="Login" style={style}></RaisedButton></Link>
        </article>
      </div>
);
