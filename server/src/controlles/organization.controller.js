
import Organization from '../schemas/organization.schema';

const create = function (req, res, next) {
    Organization.create(req.body, function (err, organization) {
        if (err) return next(err);
        res.json(organization);
    });
};

const update = function (req, res, next) {
    Organization.findByIdAndUpdate(req.params.id,req.body,
        {safe: true, upsert: true, new : true}, function (err, organization) {
        if (err) return next(err);
        res.json(organization);
    });
}

const get = function (req, res, next) {
    Organization.find(req.query,function (err, organizations) {
        if (err) return next(err);
        res.json(organizations);
    });
};

const getById = function (req, res, next) {
    Organization.findById(req.params.id, function (err, organization) {
        if (err) return next(err);
        res.json(organization);
    });
};

export default { get, getById, create, update}

