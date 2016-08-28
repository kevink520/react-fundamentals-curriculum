var React = require('react');
var HeaderContainer = require('./HeaderContainer');
require('../css/weather-icons.min.css');
require('../css/main.css');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main">
        <HeaderContainer />
        {this.props.children}
      </div>
    );
  }
}); 

module.exports = Main;
