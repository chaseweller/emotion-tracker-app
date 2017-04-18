import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { tealA200 } from 'material-ui/styles/colors';
import Router from './router';
import './styles/global.css';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
        <Router />
  </MuiThemeProvider>,
  document.getElementById('root')
);