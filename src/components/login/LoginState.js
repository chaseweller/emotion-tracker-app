import React, { Component, PropType } from 'react';
import { firebaseConnect } from 'react-redux-firebase';
import { pathToJS } from 'react-redux-firebase';


const login = (credential) => {
  email: String
  password: String
}

const

const createNewUser = ({ email, password, username}) => {
  this.props.firebase.createUser(
    { email, password },
    { username, email }
  )
}

createNewUser({
  email: 'test@test.com',
  password: 'testest1',
  username: 'tester'
})

class Login extends Component {


  this.ref.authWithCustomToken(credentials)


  render() {

    this.props.firebase.login({
      email: 'test@test.com',
      password: 'test1'
    })


    return (
      <div>

      </div>


    );
  }
}






firebase.resetPassword({
  email: 'test@test.com',
  password: 'testest1',
  username: 'tester'
})

firebase.logout()


export default connect(
  ({ firebase }) => ({
    authError: pathToJS(firebase, 'authError'),
    auth: pathToJS(firebase, 'auth'),
    profile: pathToJS(firebase,'profile')
  })
)(Login);