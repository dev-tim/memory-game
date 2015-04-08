var React = require('react');
var Reflux = require('reflux');

var PlayGrid = require('./grid');
var Stats = require('./stats');

module.exports = React.createClass({
	render: function () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-7 col-sm-6">
						<PlayGrid/>
					</div>
					<div className="col-lg-4 col-md-5 col-sm-6">
						<Stats/>
					</div>
				</div>
			</div>
		);
	}
});