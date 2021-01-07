const express = require('express');
const router = express.Router();
const {usersController} = require('../controllers');
//const passport = require('passport');
//require('../services/passport');
const {AuthMiddleware} = require('../middleware');



    
router.post('/login', usersController.login);
router.post('/register',usersController.register);
router.get('/protected', AuthMiddleware.jwt, (req, res, next) => {
   // console.log(req.user);
    res.status(200).json({
        success: true,
        msg: "You are successfully authenticated to this route!"
    });
});

module.exports = router;