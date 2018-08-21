
import Customer from '../models/customer.model';
import Program from '../models/program.model';

export default {
    getById: function (req, res, next) {
        Customer.findById(req.params.id, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    },

    create: function (req, res, next) {
        Customer.create(req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    },

    getPrograms: function (req, res, next) {
        const { id: customer } = req.params;
        Program.find({ customer }, function (err, program) {
            if (err) return next(err);
            res.json(program);
        });
    },

    update: function (req, res, next) {
        Customer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    },

    delete: function (req, res, next) {
        Customer.findByIdAndRemove(req.params.id, req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }
};

