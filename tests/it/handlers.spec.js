var should = require('../base-test').should;
var supertest = require("supertest");
var app = require('../../src/app');


describe('Node handlers', function () {
	it('# should return hello world message on "/"', function (done) {
		supertest(app).get('/')
			.expect({
				msg: 'Hello world'
			}, done)
	});

});
