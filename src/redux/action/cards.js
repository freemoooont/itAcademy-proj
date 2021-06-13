import axios from "axios";
import {sanitizeData} from "../../Services/Santizer"

export const fetchCards = () => dispatch => {
    axios.get('https://open.istu.edu/api/get_all_events.php')
        .then(({ data }) => {
        dispatch(setCards(data.slice(0,10)))
    })
};

export const setCards = (items) => {

    items = sanitizeData(items);

    items.sort(function(a){
        if (a.status) {
            return -1
        }
        if (a.status===false){
            return 1
        }
        return 0
    })

    return({
    type: 'SET_CARDS',
    payload: items
})};

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});
