var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    padding: '5px',
  },
  logo: {
    margin: 0,
  },
  logoLink: {
    color: '#fff',
  },
  cityInput: {
    display: 'inline-block',
    maxWidth: '178px',
  },
  btnSubmit: {
    margin: '10px',
  },
};

function Header(props) {
  return (
    <header style={styles.header}>
      <h2 className="logo" style={styles.logo}>
        <Link to="/" className="logo-link" style={styles.logoLink}>
          Weather Forecast
        </Link>
      </h2>
      <form className="header-form" onSubmit={props.handleHeaderFormSubmit}>
        <input type="text" className="form-control header-city-input" placeholder="St. George, Utah" style={styles.cityInput} />
        <button className="btn btn-success btn-submit" style={styles.btnSubmit}>Get Weather</button>
      </form>
    </header>
  );
}

Header.propTypes = {
  handleHeaderFormSubmit: React.PropTypes.func.isRequired,
};

module.exports = Header;
