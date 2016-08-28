var React = require('react');
var Home = require('../components/Home');

var HomeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var cityInput = e.target.getElementsByClassName('city-input')[0];
    var city = cityInput.value || '';
    var router = this.context.router;
    router.push('/forecast/' + city);
  },
  render: function() {
    return <Home handleSubmit={this.handleSubmit} />;
  }
});

module.exports = HomeContainer;
