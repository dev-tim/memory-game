var Reflux = require('reflux');
var _ = require('lodash');

var actions = require('actions');

function addPlayerToModel (p){
	if (p) {
		var players = this.players.model.players;
		var player  = {
			name: p
		};

		var idx = _.findIndex(players, function (p) {
			// raw assumption
			return p.name == player.name;
		});

		// check for not having duplicates
		if (idx === -1) {
			players.push(player);
			this.updateModel({
				currentPlayer: _.first(players),
				players: players
			})
		}
	}
}

module.exports = Reflux.createStore({
	init: function init () {
		this.listenTo(actions.cardsMatchFailed, this.onCardsMatchFailed);
		this.listenTo(actions.addPlayers, this.onAddPlayers);

		this.players = {
			model: {
				currentPlayer: null,
				players: []
			}
		};
	},

	getInitialState: function getInitialState () {
		return this.players;
	},

	onAddPlayers: function onAddPlayers (playersArray) {
		playersArray.map(addPlayerToModel.bind(this));
	},

	onCardsMatchFailed: function onCardsMatchFailed () {
		var players = this.players.model.players;
		var currentPlayer = this.players.model.currentPlayer;

		var idx = _.findIndex(players, function (p) {
			// raw assumption
			return p.name == currentPlayer.name;
		});

		if (players.length <= idx + 1) {
			// then we need to start over
			currentPlayer = _.first(players);
		} else {
			currentPlayer = players[idx + 1];
		}

		this.updateModel({
			currentPlayer: currentPlayer,
			players: players
		})
	},

	updateModel: function updateModel (stats) {
		this.players.model = stats;
		this.trigger(this.players);
	},

	updateError: function updateError (error) {
		this.players = {
			error: error
		};
		this.trigger(this.players);
	}
});