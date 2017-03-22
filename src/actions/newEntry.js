import 'isomorphic-fetch';

import { NEW_ENTRY, NEW_RATING} from './types';


//const API_URL = ** Needs Firebase hook up here.

export const createEntry = entry => {

        return {
            type: NEW_ENTRY.ADD_ENTRY,
            payload: Promise.resolve(entry)
        }
};

export const selectRating = rating => {

    return {
        type: NEW_RATING.ADD_RATING,
        payload: Promise.resolve(rating)
    }
}

