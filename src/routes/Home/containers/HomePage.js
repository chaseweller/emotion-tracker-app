import React, { Component } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
// import Login from '../../Login/containers/LoginPage';

const style = {
  margin: 4,
};

class HomePage extends Component {

  selected = () => {
    console.log('Works');
  }


  render() {

    return (
      <div>
        <h1>Welcome back </h1>

        <article>
          <Link to="about"><RaisedButton label="About" style={style}></RaisedButton></Link>
          <Link to="entry"><RaisedButton label="New Entry" onClick={e => this.selected()}></RaisedButton></Link>
          <Link to="pastentries"><RaisedButton label="Past Entries" style={style}></RaisedButton></Link>

        </article>

      </div>
    )
  }
}

export default HomePage;


// Vertical line stepper for emoji, rating, message time line
// Slider for the rating section
// Paper for different components
// Drawer would be good
// Divider for registration
// Card might be a good format


// http://www.material-ui.com/#/components/app-bar
// http://www.material-ui.com/#/customization/colors  -- to customize colors