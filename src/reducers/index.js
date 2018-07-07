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

// const demoState = {
// 	expenses: [
// 		{
// 			id: '123',
// 			desc: 'Jan Rent',
// 			note: 'this was House Rent',
// 			amound: 300,
// 			createdAt: 0
// 		}
// 	],
// 	filters: {
// 		text: 'rent',
// 		sortBy: 'amount', // Date or Amount
// 		startDate: undefined,
// 		endDate: undefined
// 	}
// };
