import React from 'react';

import RouterLayer from '../../site/components/RouterLayer';

function Index({ preloadedState }) {
	return (
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="/styles/style.css" />
				<script dangerouslySetInnerHTML={ { __html: `window.__PRELOADED_STATE__ = ${ JSON.stringify(preloadedState).replace(/</g, '\\u003c')}` } }/>
			</head>
			<body>
				<div className="root"><RouterLayer/></div>
				<script type="text/javascript" src="/js/bundle.js" />
			</body>
		</html>
	);
}

Index.displayName = 'Index';

export default Index;
