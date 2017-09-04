import React from 'react';
import { NavLink } from 'react-router-dom';

const SecondaryNav = ({ match: { url } }) => (
    <ul>
        <li><NavLink to={`${url}/rendering`}>Rendering with React</NavLink></li>
        <li><NavLink to={`${url}/components`}>Components</NavLink></li>
        <li><NavLink to={`${url}/props-v-state`}>Props v. State</NavLink></li>
    </ul>
);

export default SecondaryNav;
