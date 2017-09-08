import React from 'react';
import ReactDom from 'react-dom/server';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

import { StaticRouter } from 'react-router-dom';

import express from 'express';

import Index from '../views/Index';
import ErrorPage from '../views/Error';
import reducers from '../../common/reducers';

const router = express.Router();
const context = {};

router.get('*', function (req, res) {
	const store = createStore(reducers);

	res.send('<!doctype html>\n' + ReactDom.renderToStaticMarkup(
		<StaticRouter location={req.url} context={context}>
			<Provider store={ store }>
				<Index preloadedState={ store.getState() }/>
			</Provider>
		</StaticRouter>
	));
});

export function error404(req, res, next) {
	const err = new Error('Not Found');

	err.status = 404;
	next(err);
}

export function error500(err, req, res) {
	res.status(err.status || 500);
	res.send('<!doctype html>\n' + ReactDom.renderToStaticMarkup(
		<ErrorPage message={ err.message } error={ err.status }/>
	));
}

export default router;

