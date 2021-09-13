import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions/index';

import data from '../data'

const initialState = {
    gifs: data,
    loading: false,
    error:''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                gifs: action.payload,
                loading: false,
                error: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return(state);
    }
}

export default reducer;