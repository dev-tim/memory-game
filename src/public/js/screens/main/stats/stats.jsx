var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var Router = require('react-router');
var Link = Router.Link;

var statsStore = require('stores/stats/stats-store');
var playersStore = require('stores/players/players-store');

module.exports = React.createClass({

	mixins: [
		Reflux.connect(statsStore, 'stats'),
		Reflux.connect(playersStore, 'players')
	],



	render: function render () {
		var players = this.state.players.model.players.map(function (player, id) {
			var playerStats = this.state.stats.model[player.name] || {};
			return (<li className="list-group-item">
				<span className="badge">{playerStats.score || 0}</span>
				{player.name}
			</li>);
		}, this);

		return (
			<div>
				<div className="well">
					<h1>Now is {this.state.players.model.currentPlayer.name} trun</h1>
				</div>
				<div className="well">
					<h2>Players scores</h2>
					<ul className="list-group">
						{players}
					</ul>
				</div>
				<Link className="btn btn-danger" to="about">About game</Link>
			</div>
		);
	}
});