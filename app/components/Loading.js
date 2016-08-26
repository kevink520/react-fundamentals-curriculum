var React = require('react');
var PropTypes = React.PropTypes;
var styles = {
  marginTop: '30px',
  textAlign: 'center',
  fontSize: '55px',
}

var Loading = React.createClass({
  getInitialState: function() {
    return {
      text: 'Loading',
    }
  },
  componentDidMount: function() {
    var originalText = 'Loading';
    var stopper = originalText + '...';
    this.interval = setInterval(function() {
      if (this.state.text === stopper) {
        this.setState({
          text: originalText,
        });
      } else {
        this.setState({
          text: this.state.text + '.',
        });
      }
    }.bind(this), 400);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <p className="loading" style={styles}>
        {this.state.text}
      </p>
    );
  },
});

module.exports = Loading;
