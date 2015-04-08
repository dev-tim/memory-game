'use strict';

var passport = require("passport");
var isAuthenticated = require('./auth/authHepler');

var index = require('./handlers/index');
var photosList = require('./handlers/photos/list');
var statsInfo = require('./handlers/index');
var authLogout = require('./handlers/auth/logout');
var authLogin = require('./handlers/auth/login');

module.exports = function registerRoutes (app) {
	app.get('/', index);

//	app.get('/login', authLogin);
	app.get('/photos', photosList);
	app.get('/stats', statsInfo);

	//app.get('/auth/eyeem',
	//	passport.authenticate('eyeem'),
	//	function (req, res) {
	//		// The request will be redirected to Eyeem for authentication, so this
	//		// function will not be called.
	//		console.log('BOOM!!!! ======================== \n It was called!!!', arguments)
	//	});
	//
	//app.get('/auth/eyeem/callback',
	//	passport.authenticate('eyeem', {
	//		failureRedirect: '/login'
	//	}), function (req, res) {
	//		res.redirect('/');
	//	});

	app.get('/logout', authLogout);
	return app;
};
