import ActionTypes from './types';

const entrySaved = (emotion, rating, message) => ({
  type: ActionTypes.ENTRY_SAVED,
  emotion,
  rating,
  message
});

export const addEntry = (emotion, rating, message) =>
  (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();
  firebase.push('entry', {emotion, rating, message})
    .then(() => dispatch(entrySaved(emotion, rating, message)))
};
