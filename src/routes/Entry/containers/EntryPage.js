import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux'
import EmojiPage from './emoji/EmojiPage';
import RatingPage from './rating/RatingPage';
import MessagePage from './message/MessagePage';
import { firebaseConnect } from 'react-redux-firebase'; //datatoJS
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class EntryPage extends Component {

  static propTypes = {
    firebase: PropTypes.object,
    data: PropTypes.object
  }


  constructor(props) {
    super(props);
    this.handleEmojiClick = this.handleEmojiClick.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
    this.handleMessagesEntered = this.handleMessagesEntered.bind(this);
    // this.handleEntryClick = this.handleEntryClick(this);
    this.state = { isBegin: false, isClicked: false, isSelected: false, isEntered: false, data: {} };

  }

  // handleEntryClick = () => {
  //   this.setState({ isBegin: true });
  // }



  saveEntry = () => {
    // console.log();
    const entryId = Date();
    this.props.firebase.ref(`users/entries`).push(this.state.data);
  };



  handleEmojiClick(emotion) {
    const data = this.state.data;
    data.emotion = emotion;
    this.setState({ isClicked: true, data: data });
  }

  handleRatingClick(rating) {
    const data = this.state.data;
    data.rating = rating;
    this.setState({ isSelected: true, data: data })
  }

  handleMessagesEntered(messages) {
    const data = this.state.data;
    data.messages = messages;
    this.setState({ isEntered: true, data: data })
  }
  // handleEntry() {
  //   const entry = this.
  // }
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
  this.setState({open: false});
};

  render() {

    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onTouchTap={this.handleClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        KeyboardFocus={true}
        onMouseEnter={this.saveEntry}
        onTouchTap={this.handleClose} />

    ];

    const isClicked = this.state.isClicked;
    // const isBegin = this.state.isBegin;
    const isSelected = this.state.isSelected;
    const isEntered = this.state.isEntered;
    // console.log(this.state.data);

    return (
      <div>
        <article>
          <EmojiPage handler={this.handleEmojiClick}/>
          {isClicked && <RatingPage handler={this.handleRatingClick}/>}
          {isSelected && <MessagePage handler={this.handleMessagesEntered}/>}
        </article>
        <article>
          {isSelected &&
          <div>
            <RaisedButton label="Save" onTouchTap={this.handleOpen}/>
            <Dialog
              title="Your entry has been saved"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
              >
            </Dialog>
          </div>}

        </article>

      </div>
    )
  }
}


// const mapStateToProps = state => {
//
//   return {}
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     newEntry: (data) => {
//       return dispatch(addEntry(data));
//     }
//   }
// };
//
//
// export default firebaseConnect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(EntryPage);

// const wrapped = firebaseConnect([
//   '/entries'
// ])(EntryPage);
//
// export default connect(
//   ({ firebase }) => ({
//     entries: dataToJS(firebase, 'entries')
//     // firebase
//     // save: dataToJS(firebase, 'save')
//   })
// )(wrapped);

export default firebaseConnect()(EntryPage);





