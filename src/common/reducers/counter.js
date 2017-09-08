export function counter(state = 2, action) {
	switch (action.type) {
		case 'INCREMENT':
			state += 1;
			return state;
		case 'DECREMENT':
			state -= 1;
			return state;
		default:
			return state;
	}
}
