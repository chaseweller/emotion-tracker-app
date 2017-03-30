import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pathToJS } from 'react-redux-firebase';
import { firebaseConnect } from 'react-redux-firebase';
import { browserHistory } from 'react-router';

import './LoginPage.css';


class Login extends Component {

  handleLogin = () => {
    this.props.firebase.login({ provider: 'google', type: 'popup' })
      .then(result => {
        // Redirect to homepage...
        if(result) {
          browserHistory.push('/home')
        } else (browserHistory.goBack())
      })

  };

  handleLogin2 = () => {
    this.props.firebase.login({ provider: 'facebook', type: 'popup' })
      console.log("Logged in")
      .then(result => {
        // Redirect to homepage...
        if(result) {
          browserHistory.push('/home')
        } else (browserHistory.goBack())
      })

  };

  render() {

    console.log(this.props.profile);

    return (
      <article>
        <h1> Please sign in with either:</h1>

        <div onClick={e => this.handleLogin()}>
          <img src='images/GoogleSignIn.png' />
        </div>
        <div onClick={e => this.handleLogin2()}>
          <img src='images/FacebookLogin.png' />
        </div>
      </article>

    );
  }
}



export default connect(
  ({ firebase }) => ({
    authError: pathToJS(firebase, 'authError'),
    auth: pathToJS(firebase, 'auth'),
    profile: pathToJS(firebase, 'profile')
  })
)(firebaseConnect([])(Login))




