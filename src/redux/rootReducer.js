import { combineReducers } from 'redux';
import itemsReducer from './items/phone-book-items-slice';
import filterReducer from './filter/phoneBookFilter-slice';

const rootReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default rootReducer;
