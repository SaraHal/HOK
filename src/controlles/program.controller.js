import Program from '../schemas/program.schema';

const create = function (req, res, next) {
    Program.create(req.body, function (err, program) {
        if (err) return next(err);
        res.json(program);
    });
};

const update = function (req, res, next) {
    Program.findByIdAndUpdate(req.params.id, req.body, function (err, program) {
        if (err) return next(err);
        res.json(program);
    });
}

const get = function (req, res, next) {
    Program.find(req.query,function (err, programs) {
        if (err) return next(err);
        res.json(programs);
    });
};

const getById = function (req, res, next) {
    Program.findById(req.params.id).populate('organization').exec(function (err, program) {
        if (err) return next(err);
        res.json(program);
    });
};


export default { get, getById, create, update}

