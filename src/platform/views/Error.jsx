import React from 'react';

function ErrorPage({ message, error }) {
	return (
		<html>
			<head></head>
			<body>
				<div className="react-wrapper">
					<h1>{ error }</h1>
					<div>{ message }</div>
				</div>
			</body>
		</html>
	);
}

ErrorPage.displayName = 'Error';

export default ErrorPage;
