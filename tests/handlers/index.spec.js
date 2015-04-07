var expect = require('../base-test').expect;
var proxyquire = require('proxyquire');

var indexHandler = require('../../src/handlers/index');


describe('Index handler', function () {
	it('# should return hello world object', function () {
		indexHandler({}, {
			json : function(data){
				expect(data).to.deep.equal({
					msg: 'Hello world'
				})
			}
		})
	})
});

