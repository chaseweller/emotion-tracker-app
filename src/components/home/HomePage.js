import React, { Component, PropTypes } from 'react';
import './HomePage.css';
// import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import EmojiPage from '../emoji/EmojiPage';
import RatingPage from '../rating/RatingPage';
import MessagePage from '../message/MessagePage';

const style = {
    margin: 12,
};

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.handleEmojiClick = this.handleEmojiClick.bind(this);
        this.handleRatingClick = this.handleRatingClick.bind(this);
        this.state = {isClicked: false, isSelected: false};

    }

    handleEmojiClick() {
        this.setState({isClicked: true});
    }

    handleRatingClick() {
        this.setState({isSelected: true})
    }

    render () {
        const isClicked = this.state.isClicked;
        const isSelected = this.state.isSelected;

        // let emotionSelected = '';
        //     if (isClicked) {
        //         emotionSelected = <RatingPage handler = {this.handleRatingClick}/>; //appear
        // }

        // let ratingSelected = '';
        //     if (isSelected) {
        //         ratingSelected = <MessagePage />;
        // }



        return (
            <div>
                <h1>Welcome!</h1>
                <article>
                    <EmojiPage handler={this.handleEmojiClick} />
                    {isClicked && <RatingPage handler={this.handleRatingClick}/>}
                    {isSelected && <MessagePage />}
                </article>
                <RaisedButton label="Save" style={style}></RaisedButton>
                <RaisedButton label="Share" style={style}></RaisedButton><br/>
                Facebook icon <br/>instagram icon
            </div>
        )
    }
}

export default HomePage;


//
// {/*<Link to="emoji"><RaisedButton label="Emoji Page" style={style}></RaisedButton></Link>*/}
// {/*<Link to="rating"><RaisedButton label="Rating Page" style={style}></RaisedButton></Link>*/}
// {/*<Link to="message"><RaisedButton label="Message Page" style={style}></RaisedButton></Link>*/}
// {/*<Link to="about"><RaisedButton label="About Page" style={style}></RaisedButton></Link>*/}



// Vertical line stepper for emoji, rating, message timeline
// Slider for the rating section
// Paper for different components
// Drawer would be good
// Divider for registration
// Card might be a good format


// http://www.material-ui.com/#/components/app-bar
// http://www.material-ui.com/#/customization/colors  -- to customize collors