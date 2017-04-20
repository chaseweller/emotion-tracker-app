import React, { Component } from 'react';
import base from '../../../config';

class Login extends Component {

  authHandler = (error, user) => {
    if(error) console.error(error);
    this.props.history.push('./Home');
    localStorage.setItem('user', base.auth().currentUser.uid);
    localStorage.getItem('user');
  };

  render() {

    return (
      <article>
        <h1> Please sign in with:</h1>
        <div onClick={e => base.authWithOAuthPopup('google', this.authHandler)}>
          <img src='images/GoogleSignIn.png' alt="google"/>
          {/*<button onClick={e => base.signOut()}>Sign Out</button>*/}

        </div>
        {/*<div onClick={e => this.handleLogin('facebook')}>*/}
        {/*<img src='images/FacebookLogin.png' alt="facebook"/>*/}
        {/*</div>*/}
      </article>
    );
  }
}

export default Login;