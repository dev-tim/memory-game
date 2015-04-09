var React = require('react');
var Reflux = require('reflux');
var cx = require('react/lib/cx');

var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({

	render: function () {
		return (
			<div className="container center-absolute">
				<h2>Example body text</h2>

				<p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis
					dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>

				<p>
					<small>This line of text is meant to be treated as fine print.</small>
				</p>
				<p>The following snippet of text is <strong>rendered as bold text</strong>.</p>

				<p>The following snippet of text is <em>rendered as italicized text</em>.</p>

				<p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>

				<Link className="btn  btn-success" to="game"> Back to game </Link>
			</div>
		);
	}
});