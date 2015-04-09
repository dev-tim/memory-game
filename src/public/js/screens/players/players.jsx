var React = require('react');
var Reflux = require('reflux');

var PlayerForm = require('./player-form');

module.exports = React.createClass({
	render: function () {
		return (
			<div className="container flex-container  center-absolute">
				<div className="players-info">
					<h2>Add some players for the game</h2>

					<p>Each player will get his own score rank</p>
				</div>
				<div className="players-form">
					<PlayerForm/>
				</div>
			</div>
		);
	}
});