import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const styles = {
  fontFamily: 'Tangerine:400,700, cursive',
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
                     hintText="Gratitude"
                     floatingLabelText="Hello"
                     multiLine={true}
                     rows={5}
                     onChange={ e => this.gratitude(e)}/><br />
          {/*// <TextField hintText="Gratitude 2"*/}
          {/*//            floatingLabelText="Gratitude 2"*/}
                     {/*/!*multiLine={true}*!/*/}
                     {/*/!*onChange={ e => this.twoGratitude(e)}/><br />*!/*/}
          {/*/!*<TextField hintText="Gratitude 3"*!/*/}
                     {/*/!*floatingLabelText="Gratitude 3"*!/*/}
                     {/*/!*multiLine={true}*!/*/}
                     {/*/!*onChange={ e => this.threeGratitude(e)}/><br />*!/*/}
        </form>
      </article>
    );
  }

}

export default MessagePage;