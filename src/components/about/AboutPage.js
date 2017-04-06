import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import './AboutPage.css';

const style = {
  margin: 12,
};

class AboutPage extends React.Component {

  render() {
    return (
      <div>
        <h1>How it works</h1>
        <ul>
          <li> 1. Register through</li>
          <ul>
            <li> Google </li>
            <li> Facebook</li>

          </ul>
          <li> 2. Select a time that the notification will come to you</li>
          <li> 3. Select how you felt that day</li>
          <li> 4. Level of intensity</li>
          <li> 5. Write a few things that you are grateful for</li>
          <li> 6. Save it</li>
        </ul>

        <ul>
          <li> Review past entries with an interactive chart/calendar/query</li>
        </ul>
        <Link to="/"><RaisedButton label="Home Page" style={style}></RaisedButton></Link><br/>
        <Link to="login"><RaisedButton label="Register" style={style}></RaisedButton></Link>
      </div>

    );
  }
}

export default AboutPage;
