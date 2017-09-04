import React, { PropTypes } from 'react';

const Topic = ({ match }) => (
	<div>
		<h3>{match.params.topicId}</h3>
	</div>
);

Topic.displayName = 'Topic';

export default Topic;
