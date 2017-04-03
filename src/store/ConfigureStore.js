import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';


// react-redux-firebase options
const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
  profileFactory: (userData) => {
    const { user } = userData
    return {
      email: user.email
    }
  }
};


// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAJCfOD-ESXHmnuYhe9AlvS3JoWH6UJFzo",
  authDomain: "emotion-tracker-fc3ab.firebaseapp.com",
  databaseURL: "https://emotion-tracker-fc3ab.firebaseio.com",
  storageBucket: "emotion-tracker-fc3ab.appspot.com",
  messagingSenderId: "635552038798"
};

// firebase.initializeApp(firebaseConfig);

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseConfig, config)
)(createStore);

// Create store with reducers and initial state

export default initialState => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk.withExtraArgument(getFirebase)),
      reactReduxFirebase(firebaseConfig, config)
    )
  )
}