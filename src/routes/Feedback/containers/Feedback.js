import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import { Link } from 'react-router-dom';
import base from '../../../config';
import ReactDOM from 'react-dom';

const styles = {
  margin: 12
}

class Feedback extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feedbackValue: '',
      feedback: []

    }
  }


  componentDidMount() {
    this.ref = base.syncState(`feedback`, {
      context: this,
      state: 'feedback',
      asArray: true
    });
  }

  handleSubmit = (newFeedback) => {
    console.log(newFeedback);
    this.setState({
      feedback: [ ...this.state.feedback, newFeedback ]
    });
  }


// selected = (id) => {
//   this.props.handler(id)
// };

  //  word = (e) => {
  //    base.syncState(e.target.value)
  //    this.props.handler(e.target.value);
  //  }

  handleFeedbackSubmitted = (e) => {
    e.preventDefault();
    const { feedbackValue } = this.state;
    this.setState({
      feedback: [ ...this.state.feedback, feedbackValue ],
      feedbackValue: ''
    });
    // console.log(this.state.feedbackValue);
  }


  render() {

    return (
      <div>
        <h1>Feedback</h1>
        <h3> Please let us know how your experience was and how we can improve it</h3>

        <form onSubmit={this.handleFeedbackSubmitted}>

          <TextField style={styles}
                     hintText="Feedback"
                     floatingLabelText="Feedback"
                     multiLine={true}
                     rows={5}
                     value={this.state.feedbackValue}
                     onChange={e => this.setState({ feedbackValue: e.target.value })}
          /><br />
          <RaisedButton style={styles} type="submit">Save</RaisedButton>

          {/*<Link to="/home"><RaisedButton label="Home" style={styles} onTouchTap={e => console.log(this.feedBackField)}></RaisedButton></Link>*/}
        </form>


        {/*this.handleSubmit(this.feedBackField.value)*/}
      </div>


    )
  }
}

export default Feedback;

{/*<EmojiPage handler={this.handleEmojiClick}/>*/}

{/*handleRatingClick(rating) {*/}
{/*const data = this.state.data;*/}
{/*data.rating = rating;*/}
{/*this.setState({ isSelected: true, data: data })*/}
{/*}*/}



