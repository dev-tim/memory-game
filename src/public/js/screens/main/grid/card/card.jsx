var React = require('react');
var Reflux = require('reflux');
var cx = require('react/lib/cx');


module.exports = React.createClass({

	getInitialState: function () {
		return {
			opened: false
		};
	},

	onClickCaught: function () {
		if (!this.state.opened) {
			this.props.onCardClicked(this);
		}
	},

	open: function () {
		this.setState({
			opened: true
		});
	},

	fail: function () {
		this.setState({
			opened: true,
			wrong: true
		});
		setTimeout((function () {
			this.setState({
				opened: false,
				wrong: false
			});
		}).bind(this), 2000);
	},

	succeed: function () {
		this.setState({flipped: true, correct: true});
	},

	equalToAnotherCard: function equalToAnotherCard (anotherCard) {
		return this.props.card.url
			=== anotherCard.props.card.url;
	},


	render: function () {
		var classes = cx({
			'flex-item': true,
			'card': true,
			'opened': this.state.opened,
			'correct': this.state.correct,
			'wrong': this.state.wrong
		});

		return (
			<div className={classes} onClick={this.onClickCaught}>
				<div className="flipper">
						<img src="/assets/img/question.png" className="front img-circle"/>
						<img src={this.props.card.url} className="back img-circle"/>
				</div>
			</div>
		);
	}
});