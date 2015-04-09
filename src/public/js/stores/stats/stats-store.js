var Reflux = require('reflux');
var _ = require('lodash');

var actions = require('actions');

module.exports = Reflux.createStore({
	init: function init () {
		this.listenTo(actions.cardsMatchedWin, this.onCardsMatchWin);

		this.stats = {
			model: {}
		};
	},

	getInitialState: function getInitialState () {
		return this.stats;
	},

	onCardsMatchWin: function onCardsMatchWin (player) {
		var model = this.stats.model;

		var playerStats = model[player.name] || {};
		playerStats.score = playerStats.score || 0;
		playerStats.score = playerStats.score + 1;
		model[player.name] = playerStats;

		this.updateModel(model);
	},

	updateModel: function updateModel (stats) {
		var result = _.merge(this.stats, stats);
		this.trigger(result);
	},

	updateError: function updateError (error) {
		var result = _.merge(this.stats.error, error);
		this.trigger(result);
	}
});
