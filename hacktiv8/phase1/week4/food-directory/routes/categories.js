var express = require('express');
var router = express.Router();
var db = require('../models')
const bodyParser = require('body-parser');
let parseUrlEncoded = bodyParser.urlencoded({extended : false})
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('user');
//   // res.render('./partials/menu');
// });

// router.get('/:category', function(req, res) {
//   let cat = req.params.category;
//
//   db.Menu.findAll({
//     include:[
//       db.Resto
//     ],
//     where : {
//       tag : cat
//     }
//   })
//   .then(menus => {
//     console.log(menus);
//      res.render('category', { menu : menus});
//   })
//   .catch(err => {
//     res.send(err);
//   })
// });

//
router.get('/seafood', function(req, res, next) {
  // res.send('test success');
  db.Resto.findAll({
    include:[
      db.Foodcourt
    ],
    order : 'id DESC'
  })
  .then(restos => {
     res.render('category', { resto : restos});
  })
  .catch(err => {
    res.send(err);
  })
});
//
// router.get('/pizza_pasta', function(req, res, next) {
//   // res.send('test success');
//   db.Menu.findAll({
//     include:[
//       db.Resto
//     ],
//     order : 'id DESC'
//   })
//   .then(menus => {
//     console.log(menus);
//      res.render('category', { menu : menus});
//   })
//   .catch(err => {
//     res.send(err);
//   })
// });
//
// router.get('/mie', function(req, res, next) {
//   // res.send('test success');
//   db.Menu.findAll({
//     include:[
//       db.Resto
//     ],
//     order : 'id DESC'
//   })
//   .then(menus => {
//     console.log(menus);
//      res.render('category', { menu : menus});
//   })
//   .catch(err => {
//     res.send(err);
//   })
// });

module.exports = router;