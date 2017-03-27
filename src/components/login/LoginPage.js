import React, { Component, PropType } from 'react';
import { firebaseConnect } from 'react-redux-firebase';

import { connect } from 'react-redux';
import { pathToJS } from 'react-redux-firebase';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import './LoginPage.css';

const style = {
  marginLeft: 30,
};


class Login extends Component {

  render() {


    return (

        <form className="login-form">
          <h1>Login Credentials</h1>
          <Paper  zDepth={2}>
            <TextField hintText="Email" style={style} underlineShow={false} />
              <Divider />
            <TextField hintText="Password" style={style} underlineShow={false} />
              <Divider />
          </Paper>
        </form>
    );
  }
}


// ref.authWithCustomToken(credentials)










export default connect(
  ({ firebase }) => ({
    authError: pathToJS(firebase, 'authError'),
    auth: pathToJS(firebase, 'auth'),
    profile: pathToJS(firebase,'profile')
  })
)(Login);