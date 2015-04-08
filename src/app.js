var express = require('express');
var hbs = require('express-hbs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var setupRoutes = require('./server/routes');
var setupPassport = require('./server/auth/setup');
var cors = require('cors');

var app = express();

//setup view engine
app.engine('hbs', hbs.express4({
	partialsDir: __dirname + '/server/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/server/views');
app.use(express.static(__dirname + '/public'));


//setup express stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(cors());

setupPassport(app);
setupRoutes(app);

module.exports = app;
