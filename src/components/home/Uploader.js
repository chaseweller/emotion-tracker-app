import React, { Component, PropTypes } from 'react';
import { firebaseConnect } from 'react-redux-firebase';



export default class Uploader extends Component {
  static propTypes = {
    firebase: PropTypes.object
  }

  render() {
    const { firebase: { storage } } = this.props;

    const addEntry = () => {
      const storageRef = storage().ref()
      const fileRef = storageRef.child('test.txt')
      fileRef.putString('Some file contents')
        .then(snap => console.log('upload successful', snap))
        .catch(err => console.error('error uploading file', err))
    }

    return (
      <div>
        <h1> Example upload</h1>
        <button onClick={addEntry}>
          Upload Example File
        </button>
      </div>
    )
  }
}