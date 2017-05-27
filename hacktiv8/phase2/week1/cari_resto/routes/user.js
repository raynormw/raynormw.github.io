const router = require('express').Router();
const users_controller = require('../controllers/users_controller');
const check = require("../helpers/util");


router.post('/new', check.isLogin, check.isAuthorized , users_controller.insert);// admin only
router.get('/all_users', check.isLogin, check.isAuthorized , users_controller.findAll);// admin only
router.get('/find/:id', check.isLogin, check.isItYours , users_controller.findById);// admin and current user
router.delete('/delete/:id', check.isLogin, check.isItYours , users_controller.deleteById);// admin and current user
router.post('/edit/:id', check.isLogin, check.isItYours , users_controller.updateById);// admin and current user


module.exports = router;
