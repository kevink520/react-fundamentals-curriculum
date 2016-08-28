var React = require('react');
var weatherHelpers = require('../utils/weatherHelpers');
var Loading = require('../components/Loading');
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState: function() {
    return {
      forecast: [],
      isLoading: true,
    };
  },
  componentDidMount: function() {
    var city = this.props.params.city;
    weatherHelpers.getForecastForCity(city)
      .then(function(forecast) {
        this.setState({
          forecast: forecast,
          isLoading: false,
        });
      }.bind(this));
  },
  render: function() {
    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <Forecast city={this.props.params.city} forecast={this.state.forecast.slice(0, 5)} router={this.context.router} />
    );
  },
});

module.exports = ForecastContainer;
