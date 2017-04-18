import React, { Component } from 'react';
import base from '../../../config';

class Logout extends Component {



  render() {

    return(
      <button onClick={e => base.signOut}>Sign Out</button>
    )
  }
}

export default Logout;