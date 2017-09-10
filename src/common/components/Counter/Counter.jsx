import React from 'react';
import { func, object } from 'prop-types';

const Counter = ({ increment, decrement, incrementIfOdd, incrementAsync, number }) => (
	<div>
		<h2>Redux</h2>
		<p>
			<button id="increment" onClick={ increment }>+</button>
			<button id="decrement" onClick={ decrement }>-</button>
			<button id="incrementIfOdd" onClick={ incrementIfOdd }>Increment if odd</button>
			<button id="incrementAsync" onClick={ incrementAsync }>Increment async</button>
		</p>

		{ number.counter }
		{ number.counter1 }
	</div>
);

Counter.propTypes = {
	increment: func,
	decrement: func,
	incrementIfOdd: func,
	incrementAsync: func,
	number: object
};

export default Counter;
