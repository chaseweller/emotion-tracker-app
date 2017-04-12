import React, { Component } from 'react';
import './EmojiPage.css';


class EmojiPage extends Component {

  selected = (id) => {
    this.props.handler(id)
  };

  render() {

    const happy =
     <img src="images/Happy.png" alt="Smiley face" onClick={ id => this.selected('happy')} />;
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
      </article>

    );
  }
}


export default EmojiPage;

