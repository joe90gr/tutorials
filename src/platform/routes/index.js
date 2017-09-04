import React from 'react';
import ReactDom from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';

import express from 'express';

import Index from '../views/Index';
import ErrorPage from '../views/Error';

const router = express.Router();
const context = {};

router.get('*', function (req, res) {
	res.send('<!doctype html>\n' + ReactDom.renderToStaticMarkup(
		<StaticRouter location={req.url} context={context}><Index/></StaticRouter>
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

