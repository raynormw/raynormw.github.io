var express = require('express');
var router = express.Router();
var db = require('../models')
const bodyParser = require('body-parser');
let parseUrlEncoded = bodyParser.urlencoded({extended : false})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('search');
  // res.render('./partials/menu');
});


router.get('/search', function(req, res, next) {
  db.Foodcourt.findAll()
  .then(foodcourts => {
    res.render('dataFoodcourt',{ foodcourt : foodcourts});
    //next();
  })
  .catch(err => {
    res.send(err);
  })
});