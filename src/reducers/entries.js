import { ENTRY_SAVED } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ENTRY_SAVED:
      return [ ...state, action.entry ];
    default:
      return state;
  }
}