const express = require('express');
const router = express.Router();
const zomato_controller = require('../controllers/zomato_controller');
const gmaps_controller = require('../controllers/gmaps_controller');
const check = require("../helpers/util");

router.get('/go/', gmaps_controller.getDirection);
router.get('/search', zomato_controller.searchHelp);
router.get('/', zomato_controller.searchResto);
router.get('/:id', zomato_controller.showResto);


// router.get('/go/', check.isLogin, gmaps_controller.getDirection);
// router.get('/help', check.isLogin, zomato_controller.searchHelp);
// router.get('/', check.isLogin, zomato_controller.searchResto);
// router.get('/:id', check.isLogin, zomato_controller.showResto);


/*
SAMPEL URL:
Lihat kategori dll
localhost:3000/restaurants/search

search restoList
localhost:3000/restaurants?category=2&establishment=1&sort=cost&order=asc&cuisines=30

ambil satuan restoran
localhost:3000/restaurants/18349559

driving location
localhost:3000/restaurants/go?origin=-6.2187662,106.7519429&destination=-6.1921944444,106.8218305556&avoid=tolls|highways|ferries&units=metrics&mode=transit
*/
module.exports = router;
