/**
 * Created by pasha on 18.02.2017.
 */

var express = require('express');
var router = express.Router();
// var jwt    = require('jsonwebtoken');
 var User = require('../models/User.js');

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
router.post('/', function(req, res) {
    // find the user
    User.findOne({
        name: req.body.name
    }, function(err, user) {
        if (err) throw err;
        if (!user) {
             var user = new User({
                name: req.body.name,
                password: req.body.password,
                admin: false
            });
            // save the sample user
            user.save(function (err) {
                if (err) throw err;
                console.log('User saved successfully');
                res.json({success: true, message: 'User saved successfully'});
            });
            //res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {
                // if user is found and password is right
                // create a token
                //var token = jwt.sign(user, 'pasha7896', {
                    //expiresInMinutes: 1440 // expires in 24 hours
               // });
                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Authenticated',
                   /* token: ""*/
                });
            }
        }
    });
});
module.exports = router;
