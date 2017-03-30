import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
// import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router';
// import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Login from '../src/components/login/LoginPage';
//
// class Login extends Component {
//   static muiName = 'FlatButton';
//
//   render() {
//     return (
//       <FlatButton {...this.props} label="Login" />
//     );
//   }
// }
//
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
                  /*{<Link to ="signup"><FlatButton label="Sign Up" /></Link>}*/
                /></Link>
              {this.props.children}
            </div>
        );
    }
}

export default App;

{/*<Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({ open })} width={200}>*/}
{/*<h1>Hello</h1>*/}
{/*<h3>What would you like to do?</h3>*/}
{/*<Link to="emoji"><RaisedButton label="Emoji Page" style={style}></RaisedButton></Link>*/}
{/*<Link to="rating"><RaisedButton label="Rating Page" style={style}></RaisedButton></Link>*/}
{/*<Link to="message"><RaisedButton label="Message Page" style={style}></RaisedButton></Link>*/}
{/*<Link to="about"><RaisedButton label="About Page" style={style}></RaisedButton></Link>*/}
{/*</Drawer>*/}
