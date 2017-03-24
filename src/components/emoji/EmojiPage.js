import React, { Component, PropTypes } from 'react';
import './EmojiPage.css';
import { connect } from 'react-redux';
import { entrySaved } from '../../actions/newEntry';

// import {Link} from 'react-router';
// import RaisedButton from 'material-ui/RaisedButton';
// import { browserHistory } from 'react-router';
// import { entrySaved } from '../../actions/EmotionSelected';

// const style = {
//     margin: 12,
// };
class EmojiPage extends Component {

  selected = (id) => {
    console.log(id);
    this.props.handler(id)
  };


  render() {


    console.log(this.props);

    const happy =
      <img src="images/Happy.png" alt="Smiley face" onClick={ id => this.selected('happy')}/>;
    const neutral =
      <img src="images/Neutral.png" alt="Neutral face" onClick={ id => this.selected('neutral')}/>;
    const sad =
      <img src="images/Sad.png" alt="Sad face" onClick={ id => this.selected('sad')}/>;
    const angry =
      <img src='images/Angry.png' alt="Angry face" onClick={ id => this.selected('angry')}/>;
    const sick =
      <img src='images/Sick.png' alt="Sick face" onClick={ id => this.selected('sick')}/>;
    const poop =
      <img src='images/Poop.png' alt="Poop" onClick={ id => this.selected('poop')}/>;


    return (
      <article>
        <h2>How was today?</h2>
        { happy }
        { neutral }
        { sad }
        { angry }
        { sick }
        { poop }

        {/*<br />*/}
        {/*<Link to="/"><RaisedButton label="Home Page" style={style}></RaisedButton></Link>*/}
        {/*<Link to="rating"><RaisedButton label="Continue" style={style}></RaisedButton></Link>*/}
        <div>

        </div>
      </article>

    );
  }
}

const mapStateToProps = state => {

  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    newEntry: (entry) => {
      return dispatch(entrySaved(entry));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmojiPage);
