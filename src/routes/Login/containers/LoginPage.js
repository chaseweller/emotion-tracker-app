import React, { Component } from 'react';
import base from '../../../config';
// import {authWithOAuthPopup} from 're-base';
// import ReactDOM from 'react-dom';


import './LoginPage.css';



  class Login extends Component {

    // this.props.firebase.auth().authStateChanged((user) => {

  //
  // handleLogin = (provider = 'google') => {
  //   this.props.base.login({ provider, type: 'popup' })
  //     .then(result => {
  //       this.props.history.push('/Home');
  //
  //     });
  //
  // };

  authHandler = (error, user) => {
    if(error) console.error(error);
    this.props.history.push('./Home');
    localStorage.setItem('user', base.auth().currentUser.uid);
    localStorage.getItem('user');
  };





  render() {
    console.log(base);

    return (
      <article>
        <h1> Please sign in with:</h1>

        <div onClick={e => base.authWithOAuthPopup('google', this.authHandler)}>
          <img src='images/GoogleSignIn.png' alt="google"/>
        </div>
        {/*<div onClick={e => this.handleLogin('facebook')}>*/}
        {/*<img src='images/FacebookLogin.png' alt="facebook"/>*/}
        {/*</div>*/}
      </article>

    );
  }
}


export default Login;