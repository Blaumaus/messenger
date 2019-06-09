var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.post("/api" , function(req , res , next){
    if(req.body.email && req.body.username && req.body.password && req.body.passconf){
                    // Register Section 
    }else{
        User.authenthicate(req.body.log_user , req.body.log_pass , function(error , user){
            if(error || !user){
                    var err = new Error("Wrong Username or Password");
                    err.status = 401;
                    return next(err);
            }else{
                    req.session.userId = user._id;
                    return res.redirect("/client/chat_page.ejs");
            }
        });
    }
})