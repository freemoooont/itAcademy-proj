const initialState = {
    item: [],
    errors: [],
    isLoaded: false,
};

const event = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EVENT_BY_ID':
            return {
                ...state,
                item: action.payload,
                isLoaded: true
            };

        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            };

        default:
            return state;
    }
};

export default event;