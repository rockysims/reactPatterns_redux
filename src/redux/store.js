import { createStore } from 'redux';
import { initialState } from './actions';

const reducer = 
	(state = initialState, { reduce }) =>
		reduce ? reduce(state) : state;

export default createStore(reducer);