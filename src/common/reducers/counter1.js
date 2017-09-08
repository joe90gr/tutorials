export function counter1(state = 1, action) {
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
