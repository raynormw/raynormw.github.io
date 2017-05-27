var express = require('express');
var router = express.Router();
const db = require('../models');
const bodyParser = require('body-parser');
let parseUrlEncoded = bodyParser.urlencoded({ extended: false});

router.get('/', (req, res) => {
  db.Users.findAll()
  .then (Users => {
    db.Todos.listMemo( Todos => {
      res.render('index', { title: 'Express CRUD app', message: 'Welcome to Express CRUD app', memos: Todos, users: Users });
    });
  })
});

router.post('/add', parseUrlEncoded, (req, res) => {
  let response = {
    user_id: req.body.user_id,
    title: req.body.title
  };

  db.Todos.create({
    title: response.title,
    is_complete: false,
    createdAt : new Date(),
    updatedAt : new Date(),
    user_id: response.user_id
  })
  .then ( () => {
    console.log('\nInsert todo success!\n');
    res.redirect('/');
  })
  .catch ( err => {
    console.log(err.message);
  });
});

router.get('/delete/:id', (req, res) => {
  let id = req.params.id;
  db.Todos.destroy({
    where : {
      id : id
    }
  })
  .then(() => {
    console.log('\nDelete todo success!\n');
    res.redirect('/');
  })
  .catch((err) => {
    console.log(err.message);
  });
});

router.get('/edit/:id', (req, res) => {
  let id = req.params.id;
  res.render('form', { title: 'Express CRUD app', message: 'Update Memo:', action: '/users/edit/' + id});
});

router.post('/edit/:id', parseUrlEncoded, (req, res) => {
  let status = (req.body.status == 'completed') ? true : false;
  let response = {
    title       : req.body.title,
    is_complete : status,
  };

  db.Todos.update({
    title       : response.title,
    is_complete : response.is_complete,
  },{
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    console.log('\nUpdate data success!\n');
    res.redirect('/');
  })
  .catch(err => {
    console.log(err.message);
  });
});

module.exports = router;
