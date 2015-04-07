var should = require('./base-test').should;

describe('Basic test example', function () {
  it('#should.be.true ', function () {
    var a = true;
    a.should.be.true;
  });

  it('#should.not.exist', function () {
    var und = null;
    should.not.exist(und);
  });
});
