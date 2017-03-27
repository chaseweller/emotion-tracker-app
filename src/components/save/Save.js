import React, { Component, PropTypes } from 'react';
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { entrySaved } from '../../actions/newEntry';
import {data} from '../home/HomePage';

const style = {
  margin: 12,
};

const FIREBASE_COLLECTION = '/entries';


export class Save extends Component {
  static propTypes = {
    firebase: PropTypes.object,
    handler: PropTypes.func
  }


  handleAdd = () => {

    const { newSubmission } = this.refs;

    // const { firebase } = this.props;

    // firebase.push(FIREBASE_COLLECTION, { text: newSubmission.value, done: false })
    entrySaved()
    newSubmission.value = ''
  }

  render() {
    const { save } = this.props;
    const saveList = !isLoaded(save)
      ? 'Loading'
      : isEmpty(save)
        ? 'Emotion list is empty'
        : Object.keys(save).map(
          (key, id) => (
            <Save key={key} id={id} emotion={save[ key ]}/>
          )
        );
    console.log(saveList);

    return (
      <div>
        <RaisedButton label="Save" style={style} type="submit" onClick={() => {console.log(this.props.data)}}></RaisedButton>
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