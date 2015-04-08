var React = require('react');
var Reflux = require('reflux');

module.exports = React.createClass({
	render: function () {
		return (
			<div className="container">
				<ul class="list-group">
					<li class="list-group-item">
						<span class="badge">14</span>
						Player 1
					</li>
					<li class="list-group-item">
						<span class="badge">2</span>
						Player 2
					</li>
					<li class="list-group-item">
						<span class="badge">1</span>
						Player 3
					</li>
				</ul>
			</div>
		);
	}
});