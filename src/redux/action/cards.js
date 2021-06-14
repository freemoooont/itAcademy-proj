import axios from "axios";
import {sanitizeData} from "../../Services/Santizer"

export const fetchCards = () => dispatch => {
    axios.get('https://open.istu.edu/api/get_all_events.php',{
        params:{
            _limit: 6
        }})
        .then(({ data }) => {
        dispatch(setCards(data))
    })
};

export const setCards = (items) => {

    items = sanitizeData(items);

    items.sort((a,b)=>new Date(a.startdate) - new Date(b.startdate))

    return({
    type: 'SET_CARDS',
    payload: items
})};

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});
