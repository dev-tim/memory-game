var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var cardsStore = require('stores/cards/cards-store');
var actions = require('actions');

function handleFirstCard (card) {
	this.setState({
		prevCard: card,
		status: 'hasOneChosenCard'
	});
	card.open();
}

function handleSecondCard (card) {
	var prevCard = this.state.prevCard;
	if (card === prevCard) {
		prevCard.succeed();
		actions.cardsMatchedWin()
	} else {
		actions.cardsMatchFailed()
	}
	this.setState({
		prevCard: null,
		status: 'noCardsSelected'
	});
}

module.exports = React.createClass({

	mixins: [
		Reflux.connect(cardsStore, 'cards')
	],

	getInitialState: function getInitialState () {
		return {prevCard: null, status: 'noCardsSelected'};
	},

	chooseCurrentActivity: function chooseCurrentActivity () {
		var map = {};
		map['noCardsSelected'] = handleFirstCard.bind(this);
		map['hasOneChosenCard'] = handleSecondCard.bind(this);
		return map;
	},

	onCardClicked: function (card) {
		var fn = this.chooseCurrentActivity()[this.state.status] || _.noop();
		fn(card);
	}
	,
	render: function () {
		var renderedCards = this.state.cards.map(function (card, index) {
			return <Card card={card} key={index} onCardClicked={this.onCardClicked}/>;
		}, this);

		return (
			<div>
				{renderedCards}
			</div>
		);
	}
});
