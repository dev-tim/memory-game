var Reflux = require('reflux');
var _ = require('lodash');

var actions = require('actions');

var deviceStore = Reflux.createStore({
	init: function init () {
		this.listenTo(actions.cardsMatchedWin, this.onCardsMatchFailed);
		this.listenTo(actions.cardsMatchFailed, this.onCardsMatchFailed);

		this.stats = {};
	},

	getInitialState: function getInitialState () {
		return this.stats;
	},

	onCardsMatchWin: function onFetchList () {
		this.updateModel({})
	},
	onCardsMatchFailed: function onFetchList () {
		this.updateModel({})
	},

	updateModel: function updateModel (stats) {
		this.stats = stats
	},

	updateError: function updateError (error) {
		this.deviceList = {
			error: error
		};
		this.trigger(this.deviceList);
	}
});

module.exports = deviceStore;
