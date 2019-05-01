var Joi = require('joi');
var validator = require('../../validator/validator')

var apiReferenceModule = "itemValidator";
exports.addItemValidator = function (req, res, next) {
  req.apiReference = {
    module: apiReferenceModule,
    api: "addItemValidator"
  };
  var schema = Joi.object().keys({
    item_name: Joi.string().required(),
    item_amount: Joi.number().required(),
    item_status: Joi.string().required(),
    item_description: Joi.string().optional()
  });
  var validFields = validator.validateFields(req.apiReference, req.body, res, schema);
  if (validFields) {
    next();
  }
};
exports.deleteItemValidator = function (req, res, next) {
  req.apiReference = {
    module: apiReferenceModule,
    api: "deleteItemValidator"
  };
  var schema = Joi.object().keys({
    item_id: Joi.number().required(),
  });
  var validFields = validator.validateFields(req.apiReference, req.body, res, schema);
  if (validFields) {
    next();
  }
};
exports.editItemValidator = function (req, res, next) {
  req.apiReference = {
    module: apiReferenceModule,
    api: "editItemValidator"
  };
  var schema = Joi.object().keys({
    item_id: Joi.number().required(),
    item_name: Joi.string().required(),
    item_amount: Joi.number().required(),
    item_status: Joi.string().required(),
    item_description: Joi.string().optional()
  });
  var validFields = validator.validateFields(req.apiReference, req.body, res, schema);
  if (validFields) {
    next();
  }
};
