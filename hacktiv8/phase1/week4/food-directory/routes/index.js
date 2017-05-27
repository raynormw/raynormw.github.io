var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Menu.findAll({
    include: [
      {model:db.Resto}
    ],
    order : 'id ASC'
  })
  .then((menus) => {
    // console.log(menus);
    res.render('index', { title: 'Food Directory', menu_index : menus });
    // db.Foodcourt.find({
    //   where : {
    //     id : menus.Resto.id_foodcourt
    //   }
    // })
    // .then((foodcourt) => {
    //
    // })

  })
});
//
// router.get('/', obj, function(req, res, next) {
//
//   db.Resto.findAll({
//     include: [
//       db.Foodcourt
//     ],
//     order : 'id ASC'
//   })
//   .then((restos) => {
//     res.render('index', { title: 'Food Directory', resto_index : restos, menu_index : obj  });
//   })
// });


module.exports = router;
