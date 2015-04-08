var React = require('react');
var Reflux = require('reflux');


module.exports = React.createClass({
	render: function () {
		return (
			<div className="container">
				<div className="row">
					<div className="small-8">
						Hellos
					</div>
					<div className="small-4">
						World
					</div>
				</div>
			</div>
		);
	}
});