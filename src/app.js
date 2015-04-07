var express = require('express');
var routes = require('./routes');



//register routes
var app = routes(express());


module.exports = app;
