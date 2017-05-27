const gmaps = require('../models/gmaps');

const getDirection = (req,res) => {
  gmaps.getDirection(req,res)
};

module.exports = {
  getDirection
}