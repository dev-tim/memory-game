var React = require('react');
var Reflux = require('reflux');
var t = require('tcomb-form');
var Router = require('react-router');
var Form = t.form.Form;

var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Players = t.list(t.Str);

var actions = require('actions');

module.exports = React.createClass({

	contextTypes: {
		router: React.PropTypes.func
	},

	onClick: function () {
		var players = this.refs.form.getValue();

		if (players) {
			actions.addPlayers(players);

			// TODO make an separate action
			setTimeout(function(){
				this.context.router.transitionTo('game');
			}.bind(this), 1000);
		}
	},

	render: function () {
		return (
			<div className="form">
				<Form ref="form" type={Players} />
				<button className="btn btn-success btn-lg" onClick={this.onClick}>Click me</button>
			</div>
		);
	}
});