import { INCREMENT, DECREMENT } from '../actionConstants/counterConstants';

export const increment = { type: INCREMENT };
export const decrement = { type: DECREMENT };

export function incrementIfOdd(dispatch, getState, el) {
	console.log('ELEMENT CONTEXT', el);

	if (getState().counter % 2 !== 0) {
		dispatch(increment);
	}
}

export function incrementAsync(dispatch) {
	setTimeout(() => (dispatch(increment)), 1000);
}
