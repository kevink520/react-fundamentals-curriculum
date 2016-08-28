var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
  render: function() {
    return (
      <Detail dayData={this.props.location.state.dayData} city={this.props.params.city} />
    );
  }
});

module.exports = DetailContainer;
