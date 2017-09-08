import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import RouterLayer from './components/RouterLayer';

import { createStore } from 'redux';
import reducers from '../common/reducers';
import { Provider } from 'react-redux';

const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducers, preloadedState);

delete window.__PRELOADED_STATE__;

ReactDOM.render(<BrowserRouter>
    <Provider store={ store }>
        <RouterLayer/>
    </Provider>
</BrowserRouter>, document.getElementsByClassName('root')[0]);
