import React from 'react';

import RouterLayer from '../../site/components/RouterLayer';

function Index() {
	return (
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="/styles/style.css" />
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
