import axios from "axios";
import {sanitizeData} from "../../Services/Santizer"

export const fetchEventById = (id) => dispatch => {
    axios.get(`https://open.istu.edu/api/get_all_events.php?course_id=${id}`)
        .then(({ data }) => {
            dispatch(setEventById(data))
        })
};

export const setEventById = (item) => ({
        type: 'SET_EVENT_BY_ID',
        payload: sanitizeData(item)
    });

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});