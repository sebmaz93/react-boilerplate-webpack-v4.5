// Reducers
// 1. Reducers are Pure Function
// 2. Never change state or action

import { combineReducers } from 'redux';
import filtersReducer from './filters_reducer';
import expensesReducer from './expenses_reducer';

export default combineReducers({
	expenses: expensesReducer,
	filters: filtersReducer
});
