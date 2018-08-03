var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Program = require('../models/Program.js');


router.post('/', function (req, res, next) {
    console.log(req);
    Program.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/:id', function (req, res, next) {
    Program.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });    
});


router.get('/:id', function (req, res, next) {    
    Program.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


module.exports = router;
