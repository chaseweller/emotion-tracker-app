import { NEW_ENTRY } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case NEW_ENTRY.ADD_ENTRY:
            return [...state, action.payload];
        default:
            return state;

    }
}


