var React = require('react');
var PropTypes = React.PropTypes;
var moment = require('moment');
var styles = {
  detailView: {
    margin: '35px',
    textAlign: 'center',
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
  weatherDetails: {
    margin: '35px auto 0',
    textAlign: 'center',
    fontSize: '35px',
    fontWeight: '100',
  },
};

function Detail(props) {
  var dayData = props.dayData;
  var iconClasses = 'wi wi-owm-' + dayData.weather[0].id;
  var date = moment.unix(dayData.dt).format('dddd, MMM DD');
  return (
    <div className="detail-view" style={styles.detailView}>
      <i className={iconClasses} style={styles.weatherIcon} />
      <h2 className="date" style={styles.date}>{date}</h2>
      <div className="weather-details" style={styles.weatherDetails}>
        <p>{props.city}</p>
        <p>{dayData.weather[0].description}</p>
        <p>min temp: {Math.round(dayData.temp.min)} degrees</p>
        <p>max temp: {Math.round(dayData.temp.max)} degrees</p>
        <p>humidity: {dayData.humidity}</p>
      </div>
    </div>
  );
}

Detail.propTypes = {
  dayData: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
};

module.exports = Detail;
