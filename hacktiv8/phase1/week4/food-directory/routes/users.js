var express = require('express');
var router = express.Router();
var db = require('../models')
const bodyParser = require('body-parser');
let parseUrlEncoded = bodyParser.urlencoded({extended : false})

/* Admin Dashboard */
router.get('/', function(req, res) {
  res.render('user');
});

/* --------------- Foodcourt ----------------- */
/* List */
router.get('/data-foodcourt', function(req, res) {
  db.Foodcourt.findAll({
    order: "id ASC"
  })
  .then(foodcourts => {
    res.render('dataFoodcourt', { foodcourt : foodcourts});
  })
  .catch(err => {
    res.send(err);
  })
});

/* Input */
router.get('/input-foodcourt', function(req, res) {
  db.Foodcourt.findAll()
  .then(foodcourts => {
    res.render('addFoodcourt', { data : foodcourts});
  })
  .catch(err => {
    res.send(err);
  })
});

/* Create */
router.post('/createFoodcourt', parseUrlEncoded, function(req, res) {
  db.Foodcourt.create({
    name     : req.body.name,
    address  : req.body.address,
    city     : req.body.city,
    picture  : req.body.picture || ''
  })
  .then(() => {
    res.redirect('/users');
  })
  .catch((err) => {
    res.redirect(err)
  })
})

/* Edit */
router.get('/edit-foodcourt/:id', function(req, res) {
  db.Foodcourt.find({
    where : {
      id : req.params.id
    }
  })
  .then(foodcourts => {
    res.render('editFoodcourt', { data : foodcourts});
  })
  .catch(err => {
    res.send(err);
  })
});

/* Update */
router.post('/update-foodcourt/:id', parseUrlEncoded, function(req, res) {
  db.Foodcourt.update({
    name     : req.body.name,
    address  : req.body.address,
    city     : req.body.city,
    picture  : req.body.picture || ''
  }, {
    where : {
      id : req.params.id
    }
  })
  .then(() => {
    res.redirect('/users/data-foodcourt');
  })
  .catch((err) => {
    res.redirect(err)
  })
})
/* --------------- End of Foodcourt ------------ */


/* --------------- Resto ----------------- */
/* List */
router.get('/data-resto', function(req, res) {
  db.Resto.findAll({
    include: [
      db.Foodcourt
    ],
    order: 'id ASC'
  })
  .then(restos => {
    res.render('dataResto', { resto : restos});
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  })
});

/* Input */
router.get('/input-resto', function(req, res) {
  db.Foodcourt.findAll()
  .then(foodcourts => {
    console.log(foodcourts);
    res.render('addResto', { foodcourt : foodcourts});
  })
  .catch(err => {
    res.send(err);
  })
});

/* Create */
router.post('/createResto', parseUrlEncoded, function(req, res) {
  db.Resto.create({
    name : req.body.name,
    category : req.body.category,
    picture : req.body.picture,
    id_foodcourt: req.body.id_foodcourt || ''
  })
  .then(() => {
    res.redirect('/users');
  })
  .catch((err) => {
    res.send(err)
  })
})

/* Edit */
router.get('/edit-resto/:id', function(req, res) {
  db.Resto.find({
    where : {
      id : req.params.id
    },
    include : [db.Foodcourt]
  })
  .then(restos => {
    db.Foodcourt.findAll()
    .then(foodcourts => {
      res.render('editResto', {data : restos, foodcourt: foodcourts});
    })
    .catch(err => {
      res.send(err);
    })
  })
  .catch(err => {
    res.send(err);
  })
});

/* Update */
router.post('/update-resto/:id', parseUrlEncoded, function(req, res) {
  db.Resto.update({
    name : req.body.name,
    category : req.body.category,
    picture : req.body.picture,
    id_foodcourt: req.body.id_foodcourt || ''
  }, {
    where : {
      id : req.params.id
    }
  })
  .then(() => {
    res.redirect('/users/data-resto');
  })
  .catch((err) => {
    res.redirect(err)
  })
})
/* --------------- End of Resto ------------ */


/* --------------- Menu ----------------- */
/* List */
router.get('/data-menu', function(req, res) {
  db.Menu.findAll({
    include:[
      db.Resto
    ],
    order: 'id DESC'
  })
  .then(menus => {

     res.render('dataMenu', { menu : menus});
  })
  .catch(err => {
    res.send(err);
  })
});

/* Input */
router.get('/input-menu', function(req, res) {
  db.Resto.findAll()
  .then(restos => {
    res.render('addMenu', { resto : restos});
  })
  .catch(err => {
    res.send(err);
  })
});

/* Create */
router.post('/createMenu', parseUrlEncoded, function(req, res) {
  db.Menu.create({
    name : req.body.name,
    price : req.body.price,
    tag : req.body.tag,
    picture : req.body.picture,
    id_resto : req.body.id_resto
  })
  .then(() => {
    res.redirect('/users')
  })
  .catch((err) => {
    res.redirect(err)
  })
})
/* --------------- End of Menu ------------ */

module.exports = router;
