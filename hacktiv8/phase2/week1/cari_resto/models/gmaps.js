require('dotenv').config();
const direction = require('google-maps-direction');
const weather = require('openweather-apis');

const getDirection = (req,res) => {

  let destination = req.query.destination.split(',');
  let search = {}
  for(let key in req.query ) search[key] = req.query[key];

  direction(search)
  .then((result)=>{
    // let start_address = result.routes[0].legs[0].start_address;
    // let departure_time = result.routes[0].legs[0].departure_time.text;
    // let end_address = result.routes[0].legs[0].end_address;
    // let arrival_time = result.routes[0].legs[0].arrival_time.text;
    // let distance = result.routes[0].legs[0].distance.text;
    // let duration = result.routes[0].legs[0].duration.text;
    //
    // let dir =
    // `AWAL : ${start_address} (${departure_time})\nAKHIR : ${end_address} (${arrival_time})\nJarak : ${distance}\nDurasi : ${duration}\n`;
    // let steps = '-----------------------------------------------------------------------------------------\n';
    // result.routes[0].legs[0].steps.forEach((step)=> {
    //   steps += `${step.travel_mode} - ${step.html_instructions} (${step.distance.text} - ${step.duration.text})\n`;
    // })
    // dir += steps;

    // cek weather
    weather.setLang('en');
    weather.setCoordinate(destination[0],destination[1]);
    weather.setUnits('metric');
    weather.setAPPID(process.env.WEATHER_KEY);
    weather.getTemperature(function(err, temp){
      if (err) console.log(err.message);
      else {
        weather.getDescription(function(err, desc) {
          let pattern = /(rain)/g;
          if (err) console.log(err.message);
           else {
             let cuaca = (pattern.test(desc)? `Temperature : ${temp}\xB0C Weather: ${desc} Don't forget to bring an umbrella..`: `Temperature : ${temp}\xB0C Weather: ${desc}`);
            //  res.send(dir+'\n'+cuaca+'\n'+'Have Fun!');
            res.render('restaurants/goto',{result,weather:cuaca,lat:destination[0],long:destination[1]})
           }
        });
      }
    });
  //end cek weather
  });
}

module.exports = {getDirection}

// http://maps.googleapis.com/maps/api/directions/json?origin=-6.2187662,106.7519429&destination=-6.2243333333,106.8425000000&mode=driving&avoid=tolls&units=metrtics
