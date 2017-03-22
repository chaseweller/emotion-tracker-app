import { NEW_RATING } from '../actions/types';


export default (state = '', action) => {
    switch (action.type) {
        case NEW_RATING.ADD_RATING:
            return ['', action.payload];
        default:
            return state;
    }
}
