var React = require('react');
var ReactRouter = require('react-router');
var axios = require('axios');
var openWeatherApiKey = '2b3dd66b51800fd1f93096c40ba1318d';

var helpers = {
  getForecastForCity: function(city) {
    var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' +
      encodeURIComponent(city) + '&type=accurate&units=imperial&APPID=' + openWeatherApiKey;
    return axios.get(url)
      .then(function(response) {
        return response.data.list;
      })
      .catch(function(error) {
        console.warn('Error in getForecastForCity: ' + error);
      });
  }
}

module.exports = helpers;
