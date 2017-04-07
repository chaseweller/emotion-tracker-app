import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import Thunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import Router from './router';
import Reducers from './reducers';
import Configuration from './configuration';

import './styles/global.css';


const history = createHistory();
const middleware = routerMiddleware(history);


const store = createStore(
  Reducers,
  {},
  compose(
    applyMiddleware(
      Thunk.withExtraArgument(getFirebase)
    ),
    applyMiddleware(middleware),
    reactReduxFirebase(Configuration, { userProfile: 'users', enableLogging: false })
  )
);

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider >
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// muiTheme={getMuiTheme(darkBaseTheme)}

//
// import MenuItem from 'material-ui/MenuItem';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import IconButton from 'material-ui/IconButton';
// import IconMenu from 'material-ui/IconMenu';
//
// const Logged = (props) => (
//   <IconMenu
//     {...props}
//     iconButtonElement={
//       <IconButton><MoreVertIcon /></IconButton>
//     }
//     targetOrigin={{horizontal: 'right', vertical: 'top'}}
//     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
//   >
//     <MenuItem primaryText="Profile" />
//     <MenuItem primaryText="About" />
//     <MenuItem primaryText="Sign out" />
//   </IconMenu>
// );
//
// Logged.muiName = 'IconMenu';