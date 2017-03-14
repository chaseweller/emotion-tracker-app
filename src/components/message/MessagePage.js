import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};



class MessagePage extends Component {

    render () {
        return (
            <article>
                <h1>Message Page</h1>
                <TextField hintText="Gratitude 1" /><br />
                <TextField hintText="Gratitude 2" /><br />
                <TextField hintText="Gratitude 3" /><br />
                <Link to="/"><RaisedButton label="Home Page" style={style}></RaisedButton></Link>
            </article>
        );
    }

}

export default MessagePage;