var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div>I´m h header
				{this.props.children}
			</div>
		);
	}
});