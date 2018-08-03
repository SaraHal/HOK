var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Organization = require('../models/Organization.js');
var Customer = require('../models/Customer.js');




router.get('/', function (req, res, next) {
    Organization.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});


router.get('/:id', function (req, res, next) {
    Organization.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
router.get('/:id/customer', function (req, res, next) {
    const { id: organization } = req.params;
    Customer.find({ organization }, function (err, customer) {
        if (err) return next(err);
        res.json(customer);
    });
});



router.post('/', function (req, res, next) {
    console.log('---------------');
    Organization.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.put('/:id', function (req, res, next) {
    Organization.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.delete('/:id', function (req, res, next) {
    Organization.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
