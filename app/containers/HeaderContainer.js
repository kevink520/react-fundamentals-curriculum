var React = require('react');
var Header = require('../components/Header');

var HeaderContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  handleHeaderFormSubmit: function(e) {
    e.preventDefault();
    var headerCityInput = document.getElementsByClassName('header-city-input')[0];
    var city = headerCityInput.value || '';
    var router = this.context.router;
    router.push('/forecast/' + city);
  },
  render: function() {
    return (
      <Header handleHeaderFormSubmit={this.handleHeaderFormSubmit} />
    );
  }
})

module.exports = HeaderContainer;
