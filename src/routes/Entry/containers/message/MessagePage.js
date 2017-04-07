import React, { Component } from 'react';
import TextField from 'material-ui/TextField'

class MessagePage extends Component {

  text = (e) => {
    this.props.handler(e.target.value)
  };

  render() {
    return (
      <article>
        <form>
          <h2>Message Board</h2>
          <TextField hintText="Gratitude 1"
                     floatingLabelText="Gratitude 1"
                     multiLine={true}
                     onChange={ e => this.text(e)}/><br />
          <TextField hintText="Gratitude 2"
                     floatingLabelText="Gratitude 2"
                     multiLine={true}
                     onChange={ e => this.text(e)}/><br />
          <TextField hintText="Gratitude 3"
                     floatingLabelText="Gratitude 3"
                     multiLine={true}
                     onChange={ e => this.text(e)}/><br />
        </form>
      </article>
    );
  }

}

export default MessagePage;