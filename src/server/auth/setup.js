var session = require('express-session')
	, passport = require('passport');

// bootstrap the passport library to handle the authorization
function setup(app) {
	//Setup session
	app.use(session({
		secret: 'omnomomomsecret',
		resave: true,
		saveUninitialized: true
	}));

	app.use(passport.initialize());
	app.use(passport.session());
}

module.exports = setup;