var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', (req, res, next) => {
  res.render('./pages/new', {title: "Sign Up", user: req.session.user, message: ``, error: ``});
})

router.post('/new', (req, res, next) => {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var role = req.body.role;

  db.Users.create({username: username, email: email, password: password, role: role})
  .then ( user => {
    console.log(`created user ${user.username}.`);
    res.render('./pages/login', {title: "Login", user: req.session.user, message: `You have registered as ${user.username}, please login.`, error: ``});

    // check for duplicate user --> user findOrCreate

  })
})


router.get('/login', (req, res, next) => {
  res.render('./pages/login', {title: "Login", user: req.session.user, message: "", error: ""})
})

router.post('/login', (req, res, next) => {

  db.Users.findOne({where: {username: req.body.username, password: req.body.password}})
  .then( user => {

    if (user) {
      console.log(`find user ${user.username}`);
      //set session
      req.session.user = user;
      res.redirect('/home');
    }
    else {
      // res.redirect('/');
      res.render('./pages/login', { title: 'Login', user: req.session.user, message: ``, error: 'Invalid Username or Password.' });
    }

  })
});

router.get('/logout', (req, res, next) => {
  req.session.destroy( () => {
    console.log("user logged out.")
  })
  // res.redirect('/');
  res.render('./pages/index', { title: 'Dummy App',  user: undefined, message: "You have logged out.", error: "" });

});

module.exports = router;
