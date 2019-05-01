var Joi = require('joi');
var validator = require('../../validator/validator')

var apiReferenceModule = "cartItemValidator";
exports.addToCartValidator = function (req, res, next) {
  req.apiReference = {
    module: apiReferenceModule,
    api: "addToCartValidator"
  };
  var schema = Joi.object().keys({
    item_id: Joi.string().required(),
    customer_name: Joi.string().required()
  });
  var validFields = validator.validateFields(req.apiReference, req.body, res, schema);
  if (validFields) {
    next();
  }
};

exports.editCart = function (req, res, next) {
  req.apiReference = {
    module: apiReferenceModule,
    api: "editCartValidator"
  };
  var schema = Joi.object().keys({
    item_id: Joi.string().required(),
    customer_name: Joi.string().required()
  });
  var validFields = validator.validateFields(req.apiReference, req.body, res, schema);
  if (validFields) {
    next();
  }
};
