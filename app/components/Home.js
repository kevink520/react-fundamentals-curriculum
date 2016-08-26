var React = require('react');
var weatherHelpers = require('../utils/weatherHelpers');
var styles = {
  patternBg: {
    display: 'flex',
    width: '100%',
    height: 'calc(100vh - 64px)',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'url("/app/images/pattern.svg") no-repeat left top / 100% 100%',
  },
  mainHeading: {
    marginTop: '0',
    textAlign: 'center',
    fontSize: '45px',
    fontWeight: '100',
    color: '#fff',
  },
  mainForm: {
    maxWidth: '300px',
    margin: 'auto',
    textAlign: 'center',
  },
  cityInput: {
    display: 'inline-block',
    maxWidth: '178px',
  },
  btnSubmit: {
    margin: '10px',
  },
};

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var cityInput = e.target.getElementsByClassName('city-input')[0];
    var city = cityInput.value || '';
    this.context.router.push('/forecast/' + city);
  },
  render: function() {
    return (
      <div className="home" style={styles.patternBg}>
        <div className="main-form-section">
          <h1 className="main-heading" style={styles.mainHeading}>Enter a City and State</h1>
          <form className="main-form" onSubmit={this.handleSubmit} style={styles.mainForm}>
            <input type="text" className="form-control city-input" placeholder="St. George, Utah" style={styles.cityInput} />
            <button className="btn btn-success btn-submit" style={styles.btnSubmit}>Get Weather</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Home;
