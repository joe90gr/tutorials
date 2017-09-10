import React from 'react';
import { object } from 'prop-types';

import { App } from '../../site/components/App';

function Index({ preloadedState }) {
	return (
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="/styles/style.css" />
				<script dangerouslySetInnerHTML={ { __html: `window.__PRELOADED_STATE__ = ${ JSON.stringify(preloadedState).replace(/</g, '\\u003c')}` } }/>
			</head>
			<body>
				<div className="root"><App/></div>
				<script type="text/javascript" src="/js/bundle.js" />
			</body>
		</html>
	);
}

Index.displayName = 'Index';
Index.propTypes = { preloadedState: object };

export default Index;
