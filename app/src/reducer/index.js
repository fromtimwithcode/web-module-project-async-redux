import data from '../data'

const initialState = {
    gifs: data,
    loading: false,
    error:''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return(state);
    }
}

export default reducer;