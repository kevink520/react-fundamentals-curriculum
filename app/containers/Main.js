var React = require('react');
var Header = require('../components/Header');
require('../css/weather-icons.min.css');
require('../css/main.css');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main">
        <Header />
        {this.props.children}
      </div>
    );
  }
}); 

module.exports = Main;
