var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Customer = require('../models/Customer.js');
var Program = require('../models/Program.js');

router.get('/:id', function (req, res, next) {
    Customer.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.post('/', function (req, res, next) {
    Customer.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.get('/:id/program', function (req, res, next) {
    const { id: customer } = req.params;
    Program.find({ customer }, function (err, program) {
        if (err) return next(err);
        res.json(program);
    });
});


router.put('/:id', function (req, res, next) {
    Customer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.delete('/:id', function (req, res, next) {
    Customer.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
