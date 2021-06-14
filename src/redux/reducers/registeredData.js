const initialState = {
    items: [],
    response: [],
    success: false
};

const registeredData = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_APPLY_DATA':
            return {
                ...state,
                items: action.payload
            };
        case 'SET_SUCCESS_RESPONSE_FROM_API':
            return{
                ...state,
                success: true,
                response: action.payload
            }

        default:
            return state;
    }
};

export default registeredData;