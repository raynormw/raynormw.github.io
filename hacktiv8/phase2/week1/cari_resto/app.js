const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const passport = require('passport');
const path = require("path")
const favicon = require('serve-favicon');

const index = require('./routes/index');
const bmi = require('./routes/bmi');
const restaurants = require('./routes/restaurants');
const user = require('./routes/user');
const twitter = require('./routes/twitter');

mongoose.connect('mongodb://localhost/cari_resto')

passport.serializeUser(function(user, cb) {
  cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index);
app.use('/restaurants', restaurants);
app.use('/bmi', bmi);
app.use('/user', user);
app.use('/twitter', twitter);

app.listen(3000, () => console.log("Listening on port 3000"));
