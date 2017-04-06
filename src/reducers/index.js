import  { combineReducers } from 'redux';
import  { routerReducer as router } from 'react-router-redux';
import  { firebaseStateReducer as firebase } from 'react-redux-firebase';

import entries from './entries';

export default combineReducers({
    entries,
    router,
    firebase
});

