import {RequestApi} from "../../Services/api/applyApi";

export const fetchApplyData = (payload) => dispatch =>{

    const { data } = RequestApi.applyInCourse(payload);
    dispatch(data);

    return({
    type: 'SET_APPLY_DATA',
    payload
})}

export const setResponseFromApi = (payload) => ({
    type: 'SET_RESPONSE_FROM_API',
    payload
})