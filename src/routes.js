'use strict';

var index = require('./handlers/index');
var statsInfo = require('./handlers/index');


module.exports = function registerRoutes (app) {
	app.get('/', index);

	app.get('/tasks', listTasks);
	app.get('/tasks/list', listTasks);

	app.post('/tasks/add', addTask);
	app.post('/tasks/remove', removeTask);

	app.get('/tasks/info/:id', infoTask);

	app.get('/stats', statsInfo);

	return app;
};
