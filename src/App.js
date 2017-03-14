import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';



const style = {
    margin: 12,
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false}
    }

    handleToggle = () => this.setState({ open: !this.state.open });


    render() {
        return (
            <article>
                <AppBar
                    title="Emotion Tracker"
                    iconClassNameLeft="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    iconElementRight={<FlatButton label="Login" />}
                />
                <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({ open })} width={200}>
                    <h1>Hello</h1>
                    <h3>What would you like to do?</h3>
                    <Link to="emoji"><RaisedButton label="Emoji Page" style={style}></RaisedButton></Link>
                    <Link to="rating"><RaisedButton label="Rating Page" style={style}></RaisedButton></Link>
                    <Link to="message"><RaisedButton label="Message Page" style={style}></RaisedButton></Link>
                    <Link to="about"><RaisedButton label="About Page" style={style}></RaisedButton></Link>
                </Drawer>
                {this.props.children}
            </article>
        );
    }
}

export default App;
