import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
// import Slider from 'nw-react-slider';
import './RatingPage.css';
import './Slider.css';

class RatingPage extends Component {

  state = {
    firstSlider: 5,
    secondSlider: 5,
  };

  handleFirstSlider = (event, value) => {
    this.setState({firstSlider: value});
  };

  handleSecondSlider = (e, value) => {
    this.setState({secondSlider: value});
  };

  chosen = () => {
    const d = this.state.secondSlider;
      {this.props.handler(d)}
  };

  render () {

    return (
      <article>
        <h2>On a scale of 1 - 10</h2>
        <Slider
          onClick={this.chosen}
          min={1}
          max={10}
          step={1}
          defaultValue={1}
          value={this.state.handleFirstSlider}
          onChange={this.handleSecondSlider}
        />
        <p>
          <span>{'Intensity level: '}</span>
          <span>{this.state.secondSlider}</span>
        </p>
      </article>

    );
  }
}

export default RatingPage;

