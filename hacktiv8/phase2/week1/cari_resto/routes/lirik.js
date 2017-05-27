const bodyMassIndex = require('body-mass-index');

const express = require('express');
const router = express.Router();

router.post('/',function(req,res,next){
  req.get.tinggi
  let bmi = bodyMassIndex('90.17kg 1lb 100g', '145.27cm 1ft 0.30m').toString();
  console.log(bmi)
  // music.trackSearch({q:"Chet Faker - Gold ",page:1,page_size:3})
  // .then(function(data){
  //         console.log(data)
  // }).catch(function(err){
  //         console.log(err);
  // })
});
module.exports = router;

