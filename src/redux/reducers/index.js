import { combineReducers } from 'redux';

import cards from './cards'
import filters from "./filters";
import event from "./event";

const rootReducer = combineReducers({
    cards: cards,
    filters: filters,
    event: event
});

export default rootReducer;