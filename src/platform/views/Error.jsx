import React from 'react';
import { string } from 'prop-types';

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
ErrorPage.propTypes = {
	message: string,
	error: string
};

export default ErrorPage;
