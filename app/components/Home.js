var React = require('react');
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

function Home(props) {
  return (
    <div className="home" style={styles.patternBg}>
      <div className="main-form-section">
        <h1 className="main-heading" style={styles.mainHeading}>Enter a City and State</h1>
        <form className="main-form" onSubmit={props.handleSubmit} style={styles.mainForm}>
          <input type="text" className="form-control city-input" placeholder="St. George, Utah" style={styles.cityInput} />
          <button className="btn btn-success btn-submit" style={styles.btnSubmit}>Get Weather</button>
        </form>
      </div>
    </div>
  );
}

Home.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

module.exports = Home;
