const zomato = require('../models/zomato');

const searchHelp = (req,res) => {
  zomato.searchHelp(req,res)
};

const searchResto = (req,res) => {
  zomato.searchResto(req,res);
}

const showResto = (req,res) => {
  zomato.showResto(req,res);
}

module.exports = {
  searchHelp,
  searchResto,
  showResto
}