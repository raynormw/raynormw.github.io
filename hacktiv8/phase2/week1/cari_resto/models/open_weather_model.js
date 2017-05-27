const weather = require('openweather-apis');

function weatherNow(latitude,longitude) {
  // let location = req.params.koor; // get koor
  weather.setLang('en');

  // set city by name
  // weather.setCity(location);
  // or set the coordinates (latitude,longitude)
  weather.setCoordinate(latitude, longitude);
  // or set city by ID (recommended by OpenWeatherMap)
  // weather.setCityId(4367872);

  // 'metric'  'internal'  'imperial'
  weather.setUnits('metric');
  weather.setAPPID("46d361034d293ed223d46ada2bcb116d");

  // get the Temperature
  weather.getTemperature(function(err, temp){
    if (err) {
      console.log(err.message);
    } else {
      getResult(temp);
    }
  });
}

function getResult(temp) {
  // get the Description of the weather condition
  weather.getDescription(function(err, desc) {
    if (err) {
      console.log(err.message);
    } else {
      let pattern = /(rain)/g;
      if (pattern.test(desc)) {
        return(`Temperature : ${temp} Weather: ${desc} Don't forget to bring an umbrella..`);
      } else {
        return(`Temperature : ${temp} Weather: ${desc}`);
      }
    }
  });

}
module.exports = {
  weatherNow
}
