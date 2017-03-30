import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import EmojiPage from './components/emoji/EmojiPage';
import MessagePage from './components/message/MessagePage';
import RatingPage from './components/rating/RatingPage';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/login/SignupPage';
import LandingPage from './components/landing/LandingPage';
import NotFoundPage from './components/home/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="emoji" component={EmojiPage}/>
    <Route path="message" component={MessagePage}/>
    <Route path="rating" component={RatingPage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="signup" component={SignupPage}/>
    <Route path="home" component={HomePage}/>

    <Route path="*" component={NotFoundPage}/>

  </Route>
);

