const Product = require('../models/product.model');

module.exports.create = (req, res, next) => {
  //TODO meter por defecto el id de la Home cuando hayamos hecho autenticación
  Product.create(req.body)
    .then((product) => res.status(201).json(product))
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Product.find()
    .then((products) => res.json(products))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Product.deleteOne({ _id: req.product.id })
    .then(() => res.status(204).send())
    .catch(next)
};

module.exports.update = (req, res, next) => {
  Object.assign(req.product, req.body);

  req.product
    .save()
    .then((product) => res.json(product))
    .catch(next)
}
