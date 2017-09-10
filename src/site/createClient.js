import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { App } from './components/App';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../common/reducers';
import { Provider } from 'react-redux';

const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducers, preloadedState, applyMiddleware(thunk));

delete window.__PRELOADED_STATE__;

ReactDOM.render(<BrowserRouter>
    <Provider store={ store }>
        <App/>
    </Provider>
</BrowserRouter>, document.getElementsByClassName('root')[0]);
