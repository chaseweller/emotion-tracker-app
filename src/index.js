import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Router from './router';
import './styles/global.css';

// const muiTheme = getMuiTheme({
//   palette: {
//     background: deepOrange500
//   },
//
//   tableRowColumn: {
//     height: 48,
//     spacing: 48,
//   }
// });

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Router />
  </MuiThemeProvider>,
  document.getElementById('root')
);