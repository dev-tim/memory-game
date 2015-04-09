var React = require('react');
var Reflux = require('reflux');


var GameGrid = require('./grid');
var Stats = require('./stats');

var playersStore = require('stores/players/players-store');

module.exports = React.createClass({

	contextTypes: {
		router: React.PropTypes.func
	},

	mixins: [
		Reflux.connect(playersStore, 'players')
	],

	componentWillMount: function componentWillMount () {
		if (!this.state.players  || this.state.players.model.players.length == 0){
			this.context.router.transitionTo('players');
		}
	},

	render: function () {
		var stats ='';
		if (this.state.players.model.players.length > 0){
			stats = <Stats/>
		}


		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-5 col-sm-6">
						{stats}
					</div>
					<div className="col-lg-8 col-md-7 col-sm-6">
						<GameGrid/>
					</div>
				</div>
			</div>
		);
	}
});