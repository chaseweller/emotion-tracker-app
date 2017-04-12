import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, pathToJS } from 'react-redux-firebase';
// import { browserHistory } from 'react-router-dom';

import './LoginPage.css';


class Login extends Component {

  handleLogin = (provider = 'google') => {
    console.log(firebaseConnect.displayName);
    this.props.firebase.login({ provider, type: 'popup' })
      .then(result => {
        this.props.history.push('/Home');

        // if(this.props.auth) {
        // }
      });

  };
  
  
  
  

  render() {

    return (
      <article>
        <h1> Please sign in with:</h1>

        <div onClick={e => this.handleLogin('google')}>
          <img src='images/GoogleSignIn.png' alt="google"/>
        </div>
        {/*<div onClick={e => this.handleLogin('facebook')}>*/}
          {/*<img src='images/FacebookLogin.png' alt="facebook"/>*/}
        {/*</div>*/}
      </article>

    );
  }
}


export default connect(
  // ({ firebase }) => ({
  //   // authError: pathToJS(firebase, 'authError'),
  //   // auth: pathToJS(firebase, 'auth'),
  //   // profile: pathToJS(firebase, 'profile')
  // })
)(firebaseConnect([])(Login))



