import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const styles = {
  fontFamily: 'Tangerine, cursive'
}


class MessagePage extends Component {

  oneGratitude = (e) => {
    this.props.handler(e.target.value)
  };
  twoGratitude = (e) => {
    this.props.handler(e.target.value)
  };
  threeGratitude = (e) => {
    this.props.handler(e.target.value)
  };

  render() {
    return (
      <article>
        <form>
          <h2>Message Board</h2>
          <TextField style={styles}
                     hintText="Gratitude 1"
                     floatingLabelText="Gratitude 1"
                     multiLine={true}
                     onChange={ e => this.oneGratitude(e)}/><br />
          <TextField hintText="Gratitude 2"
                     floatingLabelText="Gratitude 2"
                     multiLine={true}
                     onChange={ e => this.twoGratitude(e)}/><br />
          <TextField hintText="Gratitude 3"
                     floatingLabelText="Gratitude 3"
                     multiLine={true}
                     onChange={ e => this.threeGratitude(e)}/><br />
        </form>
      </article>
    );
  }

}

export default MessagePage;