import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import EmojiPage from './components/emoji/EmojiPage';
import MessagePage from './components/message/MessagePage';
import RatingPage from './components/rating/RatingPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="emoji" component={EmojiPage} />
        <Route path="message" component={MessagePage} />
        <Route path="rating" component={RatingPage} />
    </Route>
);

