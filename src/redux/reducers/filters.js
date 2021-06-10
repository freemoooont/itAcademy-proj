const initialState = {
    query: "",
};

const filters = (state = initialState, action) => {
    if (action.type === 'SET_FIND_CARDS') {
        return {
            ...state,
            query: action.payload,
        };
    }
    return state;
};

export default filters;