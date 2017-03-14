import React, { Component } from 'react';
import './HomePage.css';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

class HomePage extends Component {
    render () {
        return (
            <div>
                <h1>Welcome!</h1>
                <Link to="emoji"><RaisedButton label="Emoji Page" style={style}></RaisedButton></Link>
                <Link to="rating"><RaisedButton label="Rating Page" style={style}></RaisedButton></Link>
                <Link to="message"><RaisedButton label="Message Page" style={style}></RaisedButton></Link>
                <Link to="about"><RaisedButton label="About Page" style={style}></RaisedButton></Link>

            </div>
        )
    }
}

export default HomePage;



// Vertical line stepper for emoji, rating, message timeline
// Slider for the rating section
// Paper for different components
// Drawer would be good
// Divider for registration
// Card might be a good format


// http://www.material-ui.com/#/components/app-bar
// http://www.material-ui.com/#/customization/colors  -- to customize collors