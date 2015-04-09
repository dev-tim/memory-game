var React = require('react');
require('reflux');

var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var RouteHandler = Router.RouteHandler;

var MainScreen = require('./screens/main');
var AboutPage = require('./screens/about');
var PlayersPage = require('./screens/players');

var App = React.createClass({
	render: function(){
		return (<RouteHandler/>)
	}
});

var routes = (
	<Route path='/' handler={App}>
		<Route name='game' handler={MainScreen}/>
		<Route name='about' handler={AboutPage}/>
		<Route name='players' handler={PlayersPage}/>
		<Redirect from='/' to='players'/>
	</Route>
);

Router.run(routes, function runner (Handler, state) {
	React.render(<Handler params={state.params}/>, document.body);
});

module.exports = {};
