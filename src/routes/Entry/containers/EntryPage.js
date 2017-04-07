import React, { Component, PropTypes } from 'react';
import EmojiPage from './emoji/EmojiPage';
import RatingPage from './rating/RatingPage';
import MessagePage from './message/MessagePage';
import { entrySaved, addEntry } from '../../../actions/newEntry';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import RaisedButton from 'material-ui/RaisedButton';
import { addNewEntry } from '../../../stores/Database';

const style = {
  margin: 12,
};

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

  render() {
    console.log(firebaseConnect);

    const saveEntry = ({ firebaseConnect: { push } }) => (
      push('users', this.state.data)
    );

    const isClicked = this.state.isClicked;
    // const isBegin = this.state.isBegin;
    const isSelected = this.state.isSelected;
    const isEntered = this.state.isEntered;
    console.log(this.state.data);

    return (
      <div>
        <article>
          <EmojiPage handler={this.handleEmojiClick}/>
          {isClicked && <RatingPage handler={this.handleRatingClick}/>}
          {isSelected && <MessagePage handler={this.handleMessagesEntered}/>}
        </article>
        <article>
          <div><RaisedButton onClick={saveEntry}>Save</RaisedButton></div>

        </article>

      </div>
    )
  }
}


const mapStateToProps = state => {

  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    newEntry: (data) => {
      return dispatch(addEntry(data));
    }
  }
};


export default firebaseConnect(
  mapStateToProps,
  mapDispatchToProps,
)(EntryPage);


//
// export default firebaseConnect(
//   ({ firebase }) => ({
//     save: dataToJS(firebase, 'save')
//   })
// )(Save);





