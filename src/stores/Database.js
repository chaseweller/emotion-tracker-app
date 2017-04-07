import React, { Component } from 'react';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import { connect } from 'react-redux';

let userId = '';

const addNewUser = (userId, name, email) => {
  firebaseConnect.ref('users/' + userId).set({
    username: name,
    email: email
  })
};

export const addNewEntry = () => {

  const entryId = Date.now();

  firebaseConnect.ref('users/' + userId + '/entries/' + entryId)
};

export default connect(({ firebase }) => ({
  newEntry: dataToJS(firebase, '')
}))(addNewEntry);


// const preObject = document.getElementById('object');
//
// const saveEntry = database.ref().child('object');
//
// saveEntry.on('value', snap => {
//   preObject.innerText = JSON.stringify(snap.val(), null, 3)
// });


 // Taken from Uploader.js from Home


// export default class Uploader extends Component {
//   static propTypes = {
//     firebase: PropTypes.object
//   }
//
//   render() {
//     const { firebase: { storage } } = this.props;
//
//     const addEntry = () => {
//       const storageRef = storage().ref()
//       const fileRef = storageRef.child('test.txt')
//       fileRef.putString('Some file contents')
//         .then(snap => console.log('upload successful', snap))
//         .catch(err => console.error('error uploading file', err))
//     };
//
//
//
//
//     return (
//       <div>
//         <h1> Example upload</h1>
//         <button onClick={addEntry}>
//           Upload Example File
//         </button>
//       </div>
//     )
//   }
// }