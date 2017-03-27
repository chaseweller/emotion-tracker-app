import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class AboutPage extends React.Component {

  render() {
    return (
      <div>
        <h1>About Page</h1>

        <h3>List of things to do:</h3>
        <ul>
          <li> 1. Login</li>
          <ul>
            <li> Register</li>
            <li> logout</li>
            <li> views from the initial page, process and dashboard</li>
          </ul>
          <li> 2. (Notifications) A way to have it come automatically at a set time</li>
          <li> 3. Hook up firebase</li>
          <li> 4. Authentication from gmail & facebook</li>
          <li> 5. Tutorial video (this is how it works)</li>
          <li> 6. Work on the initial set up</li>
          <li> 7. A dashboard view for past entries</li>
          <li> 8. </li>
          <li> 9. </li>
          <li> 10. </li>
          <li> 11. </li>
        </ul>
        {/*<h3>Premise for this app came from Elder Eyring's 2007 General Conference talk about seeing the hand of God in your life</h3>*/}
        {/*<a href="https://www.lds.org/general-conference/2007/10/o-remember-remember?lang=eng" />*/}
        <Link to="/"><RaisedButton label="Home Page" style={style}></RaisedButton></Link>
      </div>

    );
  }
}

export default AboutPage;