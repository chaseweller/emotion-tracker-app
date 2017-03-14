import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import './RatingPage.css';
import './Slider';


const style = {
    margin: 12,
};





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


    render () {
        return (
            <article>
                    <h2>On a scale of 1- 10</h2>
                    <Slider min={1}
                            max={10}
                            step={1}
                            defaultValue={5}
                            value={this.state.handleSecondSlider}
                            onChange={this.handleSecondSlider}
                    />
                <p>
                    <span>{'You have selected: '}</span>
                    <span>{this.state.secondSlider}</span>
                </p>
                <Link to="/"><RaisedButton label="Home Page" style={style}></RaisedButton></Link>

            </article>

        );
    }
}

export default RatingPage;