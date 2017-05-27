const models = require('../models/bmi_model');

function getBmi(req, res) {
  let weight = req.body.weight + ' kg';
  let height = req.body.height + ' cm';
  let message = '';
  let bmi = models.bmi(weight, height);

  if (bmi < 18.5) {
    message = "You are underweight, please eat more carbo and meat!!";
  } else if (bmi >= 18.5 && bmi <= 25) {
    message = "You are healthy, you can eat whatever you want :)";
  } else {
    message = "You have obesity :( Diet pleaseee.. Avoid junk food and carbs";
  }
  message = `Your weight: ${weight}\nYour height: ${height}\nYour Body Mass Index: ${bmi}\n${message}`
  res.render('result-bmi',{message});
}

module.exports = {
  getBmi
}
