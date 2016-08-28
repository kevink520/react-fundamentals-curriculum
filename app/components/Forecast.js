var React = require('react');
var PropTypes = React.PropTypes;
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

function Forecast(props) {    
  var fiveDayForecast = props.forecast.map(function(day, i) {
    var iconClasses = 'wi wi-owm-' + day.weather[0].id;
    var date = moment.unix(day.dt).format('dddd, MMM DD');
    return (
      <div className="day-forecast" key={i} onClick={function() {
        props.router.push({
          pathname: '/detail/' + props.city,
          state: {
            dayData: day,
          },
        });
      }} style={styles.dayForecast}>
        <i className={iconClasses} style={styles.weatherIcon} />
        <h2 className="date" style={styles.date}>{date}</h2>
      </div>
    );
  });

  return (
    <div className="forecast-view">
      <h1 style={styles.h1}>{props.city}</h1>
      <h3 style={styles.h3}>Select a day</h3>
      <div className="five-day-forecast" style={styles.fiveDayForecast}>
        {fiveDayForecast}
      </div>
    </div>
  );
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecast: PropTypes.array.isRequired,
  router: PropTypes.object.isRequired,
};

module.exports = Forecast;
