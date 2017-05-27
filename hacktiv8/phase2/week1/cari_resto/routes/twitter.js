const route = require('express').Router()
const twitter_controller = require('../controllers/twitter_controller')

route.get('/', function(req, res){
  res.send("hai")
})
route.get('/search/:search', twitter_controller.search)
route.post('/tweet', twitter_controller.tweet)
// route.get('/recent/:screen_name', twitter_controller.recent)

module.exports = route
