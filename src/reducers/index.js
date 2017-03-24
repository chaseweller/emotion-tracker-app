import  { combineReducers } from 'redux';
import  { routerReducer } from 'react-router-redux';
import entries from './entries';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';


const rootReducer = combineReducers({
    entries,
    routing: routerReducer,
    firebase

});

export default rootReducer;