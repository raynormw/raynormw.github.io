var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('./pages/index', { title: 'Dummy App',  user: req.session.user, message: "", error: "" });
});


function checkSignIn(req, res, next){
    if(req.session.user){
        next();     //If session exists, proceed to page
    } else {
        var err = new Error("Not logged in!");
        console.log(req.session.user);
        next(err);  //Error, trying to access unauthorized page!
    }
}


router.get('/home', checkSignIn, (req, res) => {
  res.render('./pages/home', {title: "Home", user: req.session.user, message: "", error: ""})
})



module.exports = router;
