import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
// import { Link } from 'react-router';
// import RaisedButton from 'material-ui/RaisedButton';

// const style = {
//     margin: 12,
// };


class MessagePage extends Component {

  text = (e) => {
    // console.log(e.target.value)
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
        {/*<Link to="about"><RaisedButton label="Continue" style={style}></RaisedButton></Link><br />*/}
        {/*<Link to="/"><RaisedButton label="Home Page" style={style}></RaisedButton></Link>*/}
      </article>
    );
  }

}

export default MessagePage;