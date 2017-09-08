import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ dispatch, number }) => (
	<div>
		<h2>Redux</h2>
		<p>
			<button id="increment" onClick={ () => dispatch({ type: 'INCREMENT' }) }>+</button>
			<button id="decrement" onClick={ () => dispatch({ type: 'DECREMENT' }) }>-</button>
			<button id="incrementIfOdd" onClick={ () => {
				if (number % 2 !== 0) {
					dispatch({ type: 'INCREMENT' });
				}
			} }>Increment if odd</button>
			<button id="incrementAsync" onClick={ () => {
				setTimeout(() => dispatch({ type: 'INCREMENT' }), 1000);
			} }>Increment async</button>
		</p>

		{ number.counter }
		{ number.counter1 }
	</div>
);

export default connect((state) => ({ number: state }))(Counter);
