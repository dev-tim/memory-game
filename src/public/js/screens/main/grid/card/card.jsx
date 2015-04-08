var React = require('react');
var Reflux = require('reflux');
var cx = React.addons.classSet;


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

	reveal: function () {
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


	render: function () {
		var classes = cx({
			'opened': this.state.opened,
			'correct': this.state.correct,
			'wrong': this.state.wrong
		});

		return (
			<div className={'brick '+ (classes || '')} onClick={this.onClickCaught}>
				<div className="front">?</div>
				<div className="back">
					<img src={this.props.url} className="img-thumbnail"/>
				</div>
			</div>
		);
	}
});