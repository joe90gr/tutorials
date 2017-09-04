import React from 'react';
import { Route } from 'react-router-dom';

import PrimaryNav from '../../../common/components/PrimaryNav';

function Layout1({ exact, path, children }) {
	return (
		<Route exact={exact} path={ path } render={ (props) => (
			<div className="layout1">
				<h2>Layout 1</h2>
				<PrimaryNav/>
				<hr/>
				{ React.cloneElement(children, props) }
			</div>
        ) }/>
	);
}

Layout1.displayName = 'Layout1';

export default Layout1;
