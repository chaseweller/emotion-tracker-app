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

                <h3>List of things to do:</h3>
                <ul>
                    <li> 1. Hook up the EmojiSelected to redux</li>
                    <ul>
                        <li>    Same thing for rating. </li>
                        <li>    Same thing for messages</li>
                    </ul>
                    <li> 2. Continue routes</li>
                    <li> 3. Hook up firebase</li>
                    <li> 4. Login</li>
                    <li> 5. Save button</li>
                    <li> 6. Work on UI for drawer</li>
                    <li> 7. More friendly UI emojis</li>
                    <li> 8. Tutorial video (this is how it works</li>
                    <li> 9. A way to have it come automatically at a set time</li>
                    <li>10. Work on the initial set up</li>
                    <li>11. </li>
                </ul>
                {/*<h3>Premise for this app came from Elder Eyring's 2007 General Conference talk about seeing the hand of God in your life</h3>*/}
                {/*<a href="https://www.lds.org/general-conference/2007/10/o-remember-remember?lang=eng" />*/}
                <Link to="/"><RaisedButton label="Home Page" style={style}></RaisedButton></Link>
            </div>

        );
    }
}

export default AboutPage;