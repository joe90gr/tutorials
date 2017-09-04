import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import RouterLayer from './components/RouterLayer';

ReactDOM.render(<BrowserRouter><RouterLayer/></BrowserRouter>, document.getElementsByClassName('root')[0]);
