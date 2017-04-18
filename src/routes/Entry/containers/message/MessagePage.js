import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const styles = {
  fontFamily: '',
  displayBorder: 10
}

class MessagePage extends Component {

  gratitude = (e) => {
    this.props.handler(e.target.value)
  };

  render() {
    return (
      <article>
        <form>
          <h2>Message Board</h2>
          <TextField style={styles}
                     hintText="What are you Grateful for?"
                     floatingLabelText="Gratitude"
                     multiLine={true}
                     rows={5}
                     onChange={ e => this.gratitude(e)}
          /><br/>
        </form>
      </article>
    );
  }
}

export default MessagePage;