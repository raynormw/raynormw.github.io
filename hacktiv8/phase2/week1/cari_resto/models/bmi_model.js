const bodyMassIndex = require('body-mass-index');

function bmi(weight, height) {
  let bmi = bodyMassIndex(weight, height).toString();
  return bmi;
}

module.exports = {
  bmi
};
