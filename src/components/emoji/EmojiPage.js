import React, {Component} from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import 'node-emoji';
import './EmojiPage.css';

const style = {
    margin: 12,
};

const selected = () => {
    console.log("It was selected")
};

const verySatisfied = () => (
    <i className="material-icons" onClick={selected}>sentiment_very_satisfied</i>);
const satisfied = () => (
    <i className="material-icons" onClick={selected}>sentiment_satisfied</i>);
const neutral = () => (
    <i className="material-icons" onClick={selected}>sentiment_neutral</i>);
const dissatisfied = () => (
    <i className="material-icons" onClick={selected}>sentiment_dissatisfied</i>);
const veryDissatisfied = () => (
    <i className="material-icons" onClick={selected}>sentiment_very_dissatisfied</i>);


class EmojiPage extends Component {

    render() {
        return (
            <article>
                <h1>Emoji Page</h1>
                { verySatisfied() }
                { satisfied() }
                { neutral() }
                { dissatisfied() }
                { veryDissatisfied() }
                <br />
                <Link to="/"><RaisedButton label="Home Page" style={style}></RaisedButton></Link>

            </article>
        );
    }
}

export default EmojiPage;
