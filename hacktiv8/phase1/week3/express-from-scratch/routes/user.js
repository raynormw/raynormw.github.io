const express = require('express');
const db = require('../models');
const bodyParser = require('body-parser');
let parseUrlEncoded = bodyParser.urlencoded({ extended: false});

let router = express.Router();

router.get('/user', (req, res) => {
  db.Users.findAll()
  .then((Users) => {
    console.log('Success!');
    res.render('layout', { user: Users })
  })
  .catch((err) => {
    console.log("Error : " + err.message);
  });
  console.log('\nGetting user...');
});

router.get('/add', (req, res) => {
  res.render('form', { message: 'Insert', action: "/user" });
});

router.post('/user', parseUrlEncoded, (req, res) => {
  let response = {
    Username: req.body.username,
    Email: req.body.email
  };

  db.Users.create({
    username  : response.Username,
    email     : response.Email,
    createdAt : new Date(),
    updatedAt : new Date()
  })
  .then(Users => {
    console.log('\nInsert data success!');
    res.render('success', { result: response.Username, message: 'Insert data' });
  })
  .catch(err => {
    console.log("Error : " + err.message);
  });
});

router.get('/delete/:id', (req, res) => {
  let id = req.params.id;
  db.Users.destroy({
    where : {
      id : id
    }
  })
  .then(() => {
    console.log('\nDelete record success!');
    res.redirect('/user');
  })
  .catch((err) => {
    console.log(err.message);
  });
});

router.get('/user/edit/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  res.render('form', { message: 'Update', action: '/user/edit/' + id });
});

router.post('/user/edit/:id', parseUrlEncoded, (req, res) => {
  let response = {
    Username: req.body.username,
    Email: req.body.email
  };

  db.Users.update({
    username  : response.Username,
    email     : response.Email,
  },{
    where: {
      id: req.params.id
    }
  })
  .then(Users => {
    console.log('\nUpdate data success!');
    res.render('success', { result: response.Username, message: 'Update data' });
  })
  .catch(err => {
    console.log("Error : " + err.message);
  });
});

module.exports = router;
