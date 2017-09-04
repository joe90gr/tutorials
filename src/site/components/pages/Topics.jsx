import React from 'react';
import { Route } from 'react-router-dom';

import Topic from './Topic';
import SecondaryNav from '../../../common/components/SecondaryNav';

const Topics = (props) => {
	const { match: { url } } = props;

	return (
		<div>
			<h2>Topics</h2>
			<SecondaryNav { ...props }/>
			<Route exact path={ url } render={() => (
				<h3>Please select a topic.</h3>
			)}/>
			<Route path={`${url}/:topicId`} component={Topic}/>
		</div>
	);
};

export default Topics;
