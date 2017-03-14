import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

class AboutPage extends React.Component {

    render () {
        return (
            <div>
            <h1>About Page</h1>
                {/*<h3>Premise for this app came from Elder Eyring's 2007 General Conference talk about seeing the hand of God in your life</h3>*/}
                {/*<a href="https://www.lds.org/general-conference/2007/10/o-remember-remember?lang=eng" />*/}
                <Link to="/"><RaisedButton label="Home Page" style={style}></RaisedButton></Link>
            </div>

        );
    }
}

export default AboutPage;