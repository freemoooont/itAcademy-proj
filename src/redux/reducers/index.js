import { combineReducers } from 'redux';

import cards from './cards'
import filters from "./filters";
import event from "./event";
import registeredData from "./registeredData";

const rootReducer = combineReducers({
    cards: cards,
    filters: filters,
    event: event,
    registeredData: registeredData
});

export default rootReducer;