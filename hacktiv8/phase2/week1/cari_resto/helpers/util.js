require('dotenv').config();
const jwt = require('jsonwebtoken');
const db = require('../models/user_model')

module.exports = {
  isLogin: function(req, res, next) {
    jwt.verify(req.headers.token, process.env.SECRET_KEY, function(err, decoded) {
      if (decoded) {
        next()
      } else {
        res.send('You must login to view this page!')
      }
    })
  },
  isAuthorized: function(req, res, next) {
    jwt.verify(req.headers.token, process.env.SECRET_KEY, function(err, decoded) {
      if (decoded.role == "admin") {
        next()
      } else {
        res.send('You are not Authorized to view this page!')
      }
    })
  },
  isItYours: function(req, res, next) {
    jwt.verify(req.headers.token, process.env.SECRET_KEY, function(err, decoded) {
      if (decoded.id == req.params.id || decoded.role == "admin") {
        next()
      } else {
        res.send('This is not your account, check your ID!')
      }
    })
  },
  isUnique: function(req, res, next) {
    db.User.findOne({ where: {username:req.body.username} })
      .then(user => {
        if( user ) {
          res.send("username already exist")
        } else {
          next()
        }
      })
  }
}
