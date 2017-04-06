import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import Thunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import './index.css';
import Routes from './routes';
import Reducers from './reducers/entries';

injectTapEventPlugin();

const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const config = {
  apiKey: "AIzaSyAJCfOD-ESXHmnuYhe9AlvS3JoWH6UJFzo",
  authDomain: "emotion-tracker-fc3ab.firebaseapp.com",
  databaseURL: "https://emotion-tracker-fc3ab.firebaseio.com",
  storageBucket: "emotion-tracker-fc3ab.appspot.com",
  messagingSenderId: "635552038798"
};

const store = createStore(
  Reducers,
  {},
  compose(
    applyMiddleware(
      Thunk.withExtraArgument(getFirebase)
    ),
    applyMiddleware(middleware),
    reactReduxFirebase(config, { newEntry: 'entry', enableLogging: false })
  )
);


ReactDOM.render(
  <MuiThemeProvider >
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// muiTheme={getMuiTheme(darkBaseTheme)}