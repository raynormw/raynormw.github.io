const models = require('../models/open_weather_model');

function getWeather(req, res) {
  return models.weatherNow(req, res);
}

module.exports = {
  getWeather
}
