import axios from "axios";

const now = new Date(2021, 0, 2);
const oneDay = 1000*3600*24;

export const fetchCards = () => dispatch => {
    axios.get('https://open.istu.edu/api/get_all_events.php')
        .then(({ data }) => {
        dispatch(setCards(data))
    })
};

export const setCards = (items) => {
    items.map(function(obj){
        const start = new Date(0);
        start.setSeconds(obj.startdate);
        obj.startdate = start;
        const daysRemain = Math.ceil( (start.getTime() - now.getTime()) / oneDay);
        daysRemain <= 0 ? obj.status = false : obj.status = true;
        return (
            obj.daysRemain = daysRemain <= 0 ? 0 : daysRemain
        )
    })

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
