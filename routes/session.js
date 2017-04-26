var express = require('express');
var router = express.Router();
var Session = require('../models/Session.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Session.find(function (err, session) {
    if (err) return next(err);
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    res.status(200).json(session);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  Session.create(req.body, function (err, session) {
    if (err) return next(err);
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    res.status(201).json(session);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Session.findById(req.params.id, function (err, session) {
    if (err) return next(err);
    res.json(session);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Session.findByIdAndUpdate(req.params.id, req.body, function (err, session) {
    if (err) return next(err);  
    res.json(session);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Session.findByIdAndRemove(req.params.id, req.body, function (err, session) {
    if (err) return next(err);   
    res.json(session);
  });
});

module.exports = router;
