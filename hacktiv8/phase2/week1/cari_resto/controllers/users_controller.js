require('dotenv').config();
const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;
const passport = require('passport')
const Strategy = require('passport-local').Strategy

function index(req, res) {
  console.log("Our site is alive, yeay..");
  res.redirect('login');
}

function getRegister(req, res) {
  res.render('register');
}

function register(req, res) {
  let hash = bcrypt.hashSync(req.body.password, 8);
  User.create({
    name : req.body.name,
    username : req.body.username,
    password : hash,
    location : req.body.location,
    role : req.body.role || "user"
  }, function(err, data) {
    err ? res.json({err}) : res.json( data )
  })
}

function getLogin(req, res) {
  res.render('login');
}

function login(req, res){
  console.log(req.body.username);
  console.log(req.body.password);
  User.findOne({username : req.body.username}, function(err, user){
    if(err){
      res.json({err})
    } else {
      if(!user){
        res.send('/');
      }
      else if(bcrypt.compareSync(req.body.password, user.password)){
        let token = jwt.sign({username: user.username,role: user.role,location: user.location,id: user._id},secret, {expiresIn:'1h'})
        console.log('success');
        res.send('/restaurants/search');
        //res.send(token);
      } else {
        console.log(3);
        console.log('failed');
        res.send('/');
      }
    }
  })
}

function insert(req, res) {
  User.create( req.body, function(err, data) {
    err ? res.json({ err }) : res.json( data )
  })
}
function findAll(req, res) {
  User.find( {}, function(err, data) {
    err ? res.json({ err }) : res.json( data )
  })
}
function findById(req, res) {
  User.findById( req.params.id, function(err, data) {
    err ? res.json({ err }) : res.json( data )
  })
}
function deleteById(req, res) {
  User.findByIdAndRemove( req.params.id, function(err, data) {
    err ? res.json({ err }) : res.json( data )
  })
}
function updateById(req, res) {
  User.findById( req.params.id, function(err, data) {
    if(err){
      res.json({err})
    } else {
      let hash = bcrypt.hashSync(req.body.password, 8);
      User.update({_id : req.params.id}, {
        $set:{
          name : req.body.name || data.name,
          username : req.body.username || data.username,
          password : hash || data.password,
          location : req.body.location || data.location
        }
      }, function( err, data ){
        err ? res.json({ err }) : res.json(data)
      })
    }
  })
}

function token(req, res){
  console.log("req.user",req.user);
  User.findOne({username : req.user.username}, function(err, user){
    if(err){
      res.json({err})
    } else {
        let token = jwt.sign({username: user.username,role: user.role,location: user.location,id: user._id,token : user.token,tokenSecret : user.tokenSecret},secret, {expiresIn:'1h'})
        res.json({token})
    }
  })
}

// function passportLocal(req, res) {
//     passport.use(new LocalStrategy(
//       function(username, password, cb) {
//         User.findOne({ username: req.body.username }, function(err, user){
//           err ? cb(err)
//           (!user) ? cb(null, false)
//           (!user.verifyPassword(req.body.password)) ? cb(null, false)
//
//           cb(null, user)
//         })
//       }
//     ))
// }


module.exports = {
  index,
  getRegister,
  register,
  getLogin,
  login,
  insert,
  findAll,
  findById,
  deleteById,
  updateById,
  token
}
