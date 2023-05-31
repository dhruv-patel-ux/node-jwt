const express = require('express');
const router= express.Router();
const user= require('../controller/user');
const jwt = require('jsonwebtoken');


router.post('/add_user',user.addUser);
router.get('/profile',getToken,user.profile);

function getToken(req,res,next){
    if(req.headers){
        let bearerToken= req.headers.authorization.split(' ');
        const token = bearerToken[1];
        req.token = token;
        next();
    }
    else{
        res.send('invalide token');
    }

}

module.exports= router;