import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
// import { Link } from 'react-router';
// import RaisedButton from 'material-ui/RaisedButton';
import './RatingPage.css';
import './Slider';


// const style = {
//     margin: 12,
// };

class RatingPage extends Component {

    state = {
        firstSlider: 0.5,
        secondSlider: 5,
    };

    handleFirstSlider = (event, value) => {
        this.setState({firstSlider: value});
    };

    handleSecondSlider = (event, value) => {
        this.setState({secondSlider: value});
    };

    chosen = () => {
    console.log(this.state.secondSlider);
      const d = this.state.secondSlider;
      {this.props.handler(d)}
    };


    render () {
        return (
            <article>
                    <h2>On a scale of 1 - 10</h2>
                    <Slider onClick={this.chosen}
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
                {/*<Link to="/"><RaisedButton label="Home Page" style={style}></RaisedButton></Link>*/}
                {/*<Link to="message"><RaisedButton label="Continue" style={style}></RaisedButton></Link>*/}

            </article>

        );
    }
}

export default RatingPage;