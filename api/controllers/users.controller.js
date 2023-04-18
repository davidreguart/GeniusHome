const User = require('../models/user.model');
const createError = require('http-errors');

module.exports.list =(req, res, next) => {
  User.find()
    .then((users) => res.json(users))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  User.create(req.body)
    .then((user) => res.status(201).json(user))
    .catch(next);
};

module.exports.detail = (req, res, next) => res.json(req.user);

module.exports.delete = (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next (createError(403, "Forbidden"));
  }

  User.deleteOne({ _id:req.user.id })
  .then(() => res.status(204).send())
  .catch(next)
};

module.exports.update = (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next (createError(403, "Forbidden"));
  }

  Object.assign(req.user, req.body);

  req.user
  .save()
  .then((user) => res.json(user))
  .catch(next)
};