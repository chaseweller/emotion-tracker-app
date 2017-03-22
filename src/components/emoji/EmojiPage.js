import React, {Component} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import './EmojiPage.css';
import { connect } from 'react-redux';
import { createEntry } from '../../actions/newEntry';


// import { browserHistory } from 'react-router';
// import { createEntry } from '../../actions/EmotionSelected';


const style = {
    margin: 12,
};

const selected = (id) => {
    console.log(id)

};




class EmojiPage extends Component {



    render() {

        const happy =
            <img src="images/Happy.png" onClick={() => {selected('happy'); this.props.handler() }} />;
        const neutral =
            <img src="images/Neutral.png" onClick={() => {selected('neutral'); this.props.handler()}} />;
        const sad =
            <img src="images/Sad.png" onClick={() => {selected('sad'); this.props.handler()}} />;
        const angry =
            <img src='images/Angry.png' onClick={() => {selected('angry'); this.props.handler()}} />;
        const sick =
            <img src='images/Sick.png' onClick={() => {selected('sick'); this.props.handler()}} />;
        const poop =
            <img src='images/Poop.png' onClick={() => {selected('poop'); this.props.handler()}} />;


        return (
            <article>
                <h2>Emoji Page</h2>
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

    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        newEntry: (entry) => {
            return dispatch(createEntry(entry));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmojiPage);
