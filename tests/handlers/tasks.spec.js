var expect = require('../base-test').expect;
var PromiseHepler = require('es6-promise-helper');
var proxyquire = require('proxyquire');


var tasksListHandler = require('../../src/handlers/tasks/list');

describe('Tasks handlers', function () {
	describe('-List handler', function () {
		it('# should return an array of german tasks', function () {
			tasksListHandler({}, {
				json: function (data) {
					expect(data).to.deep.equal([{
						title: 'Test title',
						content: '*some content*'
					}])
				}
			})
		})
		;


	});


});
