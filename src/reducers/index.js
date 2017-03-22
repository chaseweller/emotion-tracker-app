import  { combineReducers } from 'redux';
import  { routerReducer } from 'react-router-redux';
import entries from './entries';
import { firebaseStateReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    entries,
    routing: routerReducer,
    firebase: firebaseStateReducer

});

export default rootReducer;