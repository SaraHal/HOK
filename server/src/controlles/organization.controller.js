


import Organization from '../models/organization.model';
import Customer from '../models/customer.model';
import Project from '../models/project.model';



const get = function (req, res, next) {
    Organization.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
};

const getById = function (req, res, next) {
    Organization.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
};


const create = function (req, res, next) {
    Organization.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
};


const update = function (req, res, next) {
    Organization.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
};

const getCustomers = function (req, res, next) {
    const { id: organization } = req.params;
    Customer.find({ organization }, function (err, customer) {
        if (err) return next(err);
        res.json(customer);
    });
};

const getPrograms = function (req, res, next) {
    const { id: organization } = req.params;
    Project.find({ organization }, function (err, project) {
        if (err) return next(err);
        res.json(project);
    });
};

export default { get, getById, create, update, getCustomers, getPrograms }

