/**
 * Created by pasha on 18.02.2017.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/User.js');

/* GET /todos listing. */
router.post('/', function(req, res) {
    // create a sample user
    var user = new User({
        name: req.body.name,
        password: req.body.password,
        admin: false
    });
    // save the sample user
    user.save(function (err) {
        if (err) throw err;
        console.log('User saved successfully');
        res.json({success: true});
    });
});

router.get('/',function (req,res) {
    User.find({},function (err,users) {
        res.status(200).json(users);
    })
})




module.exports = router;  
