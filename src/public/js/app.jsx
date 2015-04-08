var React = require('react');
require('reflux');

var Router = require('react-router');
var Route = Router.Route;

var MainScreen = require('./screens/main');
var AboutPage = require('./screens/about');

var routes = (
<Route path='/' handler={MainScreen}>
	<Route name='about' path='about' handler={AboutPage}/>
</Route>
);

Router.run(routes, function runner (Handler, state) {
	React.render(<Handler params={state.params}/>, document.body);
});
