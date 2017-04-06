import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
      <MenuItem primaryText="Profile" />
      <MenuItem primaryText="About" />
      <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

class App extends Component {

    state = {
        logged: true
    };
    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };
    constructor(props) {
        super(props);
        this.state = {open: false}
    }
    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <div>
                <Toggle
                  label="Logged"
                  defaultToggled={true}
                  onToggle={this.handleChange}
                  labelPosition="right"
                  style={{margin: 20}}
                />
                <Link to="home"><AppBar
                    title="Reflections"
                    iconClassNameLeft="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    iconElementRight={this.state.logged ? <Logged /> : <Link to="login"><FlatButton>Login</FlatButton></Link>}
                /></Link>
              {this.props.children}
            </div>
        );
    }
}

export default App;

