var express = require('express');
var config = require('../config/config');
var passport = require('passport');
var EyeemStrategy = require('passport-eyeem').Strategy;


passport.use(new EyeemStrategy({
		clientID: config.clientId,
		clientSecret: config.clientSecret,
		callbackURL: "http://localhost:3000/auth/eyeem/callback"
	},
	function(accessToken, refreshToken, profile, done) {
		console.log('Access token', accessToken);
		// asynchronous verification, for effect...
		process.nextTick(function () {
			return done(null, profile);
		});
	}
));