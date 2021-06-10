import { combineReducers } from 'redux';

import cards from './cards'
import filters from "./filters";

const rootReducer = combineReducers({
    cards: cards,
    filters: filters
});

export default rootReducer;