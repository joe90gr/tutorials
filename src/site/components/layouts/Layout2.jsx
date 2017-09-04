import React from 'react';
import { Route } from 'react-router-dom';

import PrimaryNav from '../../../common/components/PrimaryNav';

function Layout2({ exact, path, children }) {
	return (
		<Route exact={exact} path={ path } render={ (props) => (
			<div className="layout2">
				<h2>Layout 2</h2>
				<PrimaryNav/>
				<hr/>
				{ React.cloneElement(children, props) }
			</div>
		) }/>
	);
}

Layout2.displayName = 'Layout2';

export default Layout2;
