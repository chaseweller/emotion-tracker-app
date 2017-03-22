import 'babel-polyfill';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes';
import configureStore from './store/ConfigureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();



ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
        <Router history={history} routes={routes} />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
