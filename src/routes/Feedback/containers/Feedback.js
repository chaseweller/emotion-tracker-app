import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import base from '../../../config';

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

  handleFeedbackSubmitted = (e) => {
    e.preventDefault();
    const { feedbackValue } = this.state;
    this.setState({
      feedback: [ ...this.state.feedback, feedbackValue ],
      feedbackValue: ''
    });
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
        </form>
      </div>
    )
  }
}

export default Feedback;



