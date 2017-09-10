import { compose } from 'recompose';
import { connect } from 'react-redux';

import { increment, decrement, incrementIfOdd, incrementAsync } from '../../actionCreators/counterActions';

import Counter from './Counter';

const mapStateToProps = state => ({ number: state });

const mapDispatchToProps = dispatch => ({
	increment: () => dispatch(increment),
	decrement: () => dispatch(decrement),
	incrementIfOdd: (el) => dispatch((dispatch, getState) => incrementIfOdd(dispatch, getState, el)),
	incrementAsync: () => dispatch(incrementAsync)
});

export const enhance = compose(
	connect(mapStateToProps, mapDispatchToProps)
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
