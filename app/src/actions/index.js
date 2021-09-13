import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getGifs = (searchTerm) => {
    return(dispatch => {
        dispatch(fetchStart());
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=rkfXfbFIpvUmH7shbEXLLbrJLoKpbTgj&q=${searchTerm}&limit=10&offset=0&rating=g&lang=en`)
            .then(res => {
                dispatch(fetchSuccess(res.data.data));
            })
            .catch(err => {
                dispatch(fetchFail(err.meta.msg));
            })
    })
}

export const fetchStart = () => {
    return ({ type: FETCH_START });
}

export const fetchSuccess = (gifs) => {
    return ({ type: FETCH_SUCCESS, payload: gifs });
}

export const fetchFail = (error) => {
    return ({ type: FETCH_FAIL, payload: error });
}