import React from 'react';
import { Link } from 'react-router';
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
        {/*<h3>Premise for this app came from Elder Eyring's 2007 General Conference talk about seeing the hand of God in your life</h3>*/}
        {/*<a href="https://www.lds.org/general-conference/2007/10/o-remember-remember?lang=eng" />*/}
        <Link to="/"><RaisedButton label="Home Page" style={style}></RaisedButton></Link><br/>
        <Link to="login"><RaisedButton label="Register" style={style}></RaisedButton></Link>
      </div>

    );
  }
}

export default AboutPage;

//
// <h3>List of things to do:</h3>
// <ul>
// <li> 1. Login</li>
// <ul>
// <li> Register</li>
// <li> logout</li>
// <li> views from the initial page, process and dashboard</li>
// </ul>
// <li> 2. (Notifications) A way to have it come automatically at a set time</li>
// <li> 3. Hook up firebase</li>
// <li> 4. Authentication from gmail & facebook</li>
// <li> 5. Tutorial video (this is how it works)</li>
// <li> 6. Work on the initial set up</li>
// <li> 7. A dashboard view for past entries</li>
// <li> 8. </li>
// <li> 9. </li>
// <li> 10. </li>
// <li> 11. </li>
// </ul>