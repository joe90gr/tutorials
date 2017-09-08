import { counter } from '../../common/reducers/counter';
import { counter1 } from '../../common/reducers/counter1';
import { combineReducers } from 'redux';

const combined = combineReducers({
	counter,
	counter1
});

export default combined;

