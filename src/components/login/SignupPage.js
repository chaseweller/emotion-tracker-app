// import React, { Component, PropType } from 'react';
// import { firebaseConnect } from 'react-redux-firebase';
// import { pathToJS } from 'react-redux-firebase';
// import { Link } from 'react-router-dom';
//
// import Divider from 'material-ui/Divider';
// import Paper from 'material-ui/Paper';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
//
// import './LoginPage.css';
//
// const style = {
//   marginLeft: 30,
// };
//
//
//
// class Signup extends Component {
//
//   render() {
//
//
//     return (
//       <article>
//       <form className="login-form">
//         <Paper  zDepth={2}>
//           <TextField hintText="Username" style={style} underlineShow={false} />
//           <Divider />
//           <TextField hintText="Email" style={style} underlineShow={false} />
//           <Divider />
//           <TextField hintText="Password" style={style} underlineShow={false} />
//           <Divider />
//           <br />
//           <RaisedButton label=" SIGN UP " /><span> </span>
//         </Paper>
//       </form>
//
//       <h2> OAuth login for facebook and Google </h2>OR <br/>
//         <h2> Already have a Login?</h2>
//         <Link to ="login"><RaisedButton label="Login" /></Link>
//       </article>
//
//     );
//   }
// }
//
// export default Signup;
//



//
// const login = (credential) => {
//   email: String
//   password: String
// }
//
//
// const createNewUser = ({ email, password, username}) => {
//   this.props.firebase.createUser(
//     { email, password },
//     { username, email }
//   )
// }
//
// createNewUser({
//   email: 'test@test.com',
//   password: 'testest1',
//   username: 'tester'
// })
//
// class Signup extends Component {
//
//
//   this.ref.authWithCustomToken(credentials)
//
//
//   render() {
//
//     this.props.firebase.login({
//       email: 'test@test.com',
//       password: 'test1'
//     })
//
//
//     return (
//       <div>
//
//       </div>
//
//
//     );
//   }
// }
//
//
//
//
//
//
// firebase.resetPassword({
//   email: 'test@test.com',
//   password: 'testest1',
//   username: 'tester'
// })
//
// firebase.logout()
//
//
// export default connect(
//   ({ firebase }) => ({
//     authError: pathToJS(firebase, 'authError'),
//     auth: pathToJS(firebase, 'auth'),
//     profile: pathToJS(firebase,'profile')
//   })
// )(Signup);/**
//  * Created by chaseweller on 3/29/17.
//  */
