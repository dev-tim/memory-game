var Reflux = require('reflux');
var _ = require('lodash');

var actions = require('actions');
var photosService = require('services/photos-service');

var deviceStore = Reflux.createStore({
	init: function init () {
		this.listenTo(discoveryStore, this.onDiscoveryUpdate);
		this.listenTo(actions.fetchCards, this.onFetchCards);
		this.onFetchCards();
		this.cardsList = [];
	},

	getInitialState: function getInitialState () {
		return this.cardsList;
	},

	onDiscoveryUpdate: function onDisoveryUpdate () {
		this.onFetchList();
	},

	onFetchCards: function onFetchCards () {
		var self = this;
		photosService.fetchPhotos()
			.then(self.updateModel.bind(self))
			.catch(self.updateError.bind(self))
	},

	updateModel: function updateModel (cards) {
		cards = cards || [];
		this.cardsList = _.shuffle(cards);
		this.trigger(this.cardsList);
	},

	updateError: function updateError (error) {
		this.deviceList = {
			error: error
		};
		this.trigger(this.deviceList);
	}
});

module.exports = deviceStore;