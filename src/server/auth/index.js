var config = require('../config/config');
var passport = require('passport');
var EyeemStrategy = require('passport-eyeem').Strategy;
var setup = require('./setup');

// analog of persistent storage
var users = {};

module.exports = function setupPassport (app) {
	setup(app);

	passport.serializeUser(function (user, done) {
		users[user.userId] = user;
		done(null, user.userId);
	});

	passport.deserializeUser(function (id, done) {
		var user = users[id];
		done(null, user);
	});
	passport.use(new EyeemStrategy({
			clientID: config.auth.clientId,
			clientSecret: config.auth.clientSecret,
			callbackURL: config.auth.authCallbackUrl
		},
		function (accessToken, refreshToken, profile, done) {
			console.log('Access token', accessToken);
			profile.token = token;
			return done(null, profile);
		}
	));
};