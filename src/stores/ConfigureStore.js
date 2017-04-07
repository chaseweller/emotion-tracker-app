import rootReducer from '../reducers';
import thunk from 'redux-thunk';

//
// // react-redux-firebase options
// const config = {
//   userProfile: 'users', // firebase root where user profiles are stored
//   enableLogging: false, // enable/disable Firebase's database logging
//   Entry: 'Entry',                                                           //?????
//   profileFactory: (userData) => {
//     const { user } = userData;
//     return {
//       email: user.email
//     }
//   }
// };


// // Add redux Firebase to compose
// const createStoreWithFirebase = compose(
//   reactReduxFirebase(firebaseConfig, config)
// )(createStore);
