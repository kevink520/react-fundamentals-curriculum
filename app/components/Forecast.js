var React = require('react');
var weatherHelpers = require('../utils/weatherHelpers');
var Loading = require('../components/Loading');
var moment = require('moment');

var styles = {
  h1: {
    margin: '50px 0 30px',
    textAlign: 'center',
    fontSize: '65px',
    fontWeight: '100',
    color: '#333',
  },
  h3: {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: '100',
  },
  fiveDayForecast: {
    maxWidth: '1200px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '50px auto',
  },
  dayForecast: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '35px',
    cursor: 'pointer',
  },
  weatherIcon: {
    fontSize: '130px',
    color: '#83a5b3',
  },
  date: {
    fontSize: '30px',
    fontWeight: '100',
    color: '#333',
  },
};

var Forecast = React.createClass({
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
        console.log(forecast);
        this.setState({
          forecast: forecast,
          isLoading: false,
        });
      }.bind(this));
  },
  transitionToDetailView: function(day) {
    this.context.router.push({
      pathname: '/detail/' + this.props.params.city,
      state: {
        dayData: day,
      },
    });
  },
  render: function() {
    var city = this.props.params.city;
    var forecast = this.state.forecast.slice(0, 5);
    var fiveDayForecast = forecast.map(function(day, i) {
      var iconClasses = 'wi wi-owm-' + day.weather[0].id;
      var date = moment.unix(day.dt).format('dddd, MMM DD');
      return (
        <div className="day-forecast" key={i} onClick={function() {
          this.context.router.push({
            pathname: '/detail/' + this.props.params.city,
            state: {
              dayData: day,
            },
          });
        }.bind(this)} style={styles.dayForecast}>
          <i className={iconClasses} style={styles.weatherIcon} />
          <h2 className="date" style={styles.date}>{date}</h2>
        </div>
      );
    }.bind(this));

    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <div className="forecast-view">
        <h1 style={styles.h1}>{city}</h1>
        <h3 style={styles.h3}>Select a day</h3>
        <div className="five-day-forecast" style={styles.fiveDayForecast}>
          {fiveDayForecast}
        </div>
      </div>
    );
  },
});

module.exports = Forecast;
