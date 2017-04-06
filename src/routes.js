import React from 'react';
// import { Route, IndexRoute } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import EmojiPage from './components/entry/emoji/EmojiPage';
import MessagePage from './components/entry/message/MessagePage';
import RatingPage from './components/entry/rating/RatingPage';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/login/SignupPage';
import LandingPage from './components/landing/LandingPage';
import EntryPage from './components/entry/EntryPage'
import NotFoundPage from './components/home/NotFoundPage';


export default () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/emoji" component={EmojiPage}/>
        <Route path="/message" component={MessagePage}/>
        <Route path="/rating" component={RatingPage}/>
        <Route path="/login" component={LoginPage}/>
        {/*<Route path="/signup" component={SignupPage}/>*/}
        <Route path="/home" component={HomePage}/>
        <Route path="/entry" component={EntryPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
);

