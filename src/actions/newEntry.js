import 'isomorphic-fetch';

import { ENTRY_SAVED, NEW_RATING } from './types';


//const API_URL = ** Needs Firebase hook up here.

export const entrySaved = entry => {
  return {
    type: ENTRY_SAVED,
    entry
  }
};


export const addEntry = entry => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    firebase.push('/entries', entry)
      .then(() => {
        dispatch(entrySaved(entry))
      })
  }
};

export const selectRating = rating => {

  return {
    type: NEW_RATING.ADD_RATING,
    payload: Promise.resolve(rating)
  }
}

