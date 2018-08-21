
import Program from '../models/program.model';

const create = function (req, res, next) {
    Program.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
};

const update = function (req, res, next) {
    Program.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
};

const getById = function (req, res, next) {
    Program.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
};

export default { create, update, getById };

