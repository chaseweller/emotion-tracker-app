import ActionTypes from '../actions/types';

export default (state = [], action) => {

  switch (action.type) {
    case ActionTypes.ENTRY_SAVED:
      return [ ...state, action.entry ];
  }
  return state;
}