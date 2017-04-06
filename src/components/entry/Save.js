import React, { Component, PropTypes } from 'react';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { addNewEntry } from '../../store/Database';

const style = {
  margin: 12,
};

const FIREBASE_COLLECTION = '/entries';


class Save extends Component {
  static propTypes = {
    firebase: PropTypes.object,
    data: PropTypes.object
  }

  render() {
    const data = this.props.data;

    return (
      <div>
        <RaisedButton label="Save" style={style} type="submit" onClick={() => addNewEntry(data)}></RaisedButton>
        <RaisedButton label="Share" style={style}></RaisedButton><br/>
      </div>

    )

  }
}

const submission = firebaseConnect([ FIREBASE_COLLECTION ])(Save);

export default connect(
  ({ firebase }) => ({
    save: dataToJS(firebase, 'save')
  })
)(submission);