var Joi = require('joi');
var validator = require('../../../validator/validator')

var apiReferenceModule = "paytmValidator";
exports.paytmValidator = function (req, res, next) {
  req.apiReference = {
    module: apiReferenceModule,
    api: "paytmValidator"
  };
  var schema = Joi.object().keys({
    user_id: Joi.number().required(),
    name: Joi.string().required(),
    amount: Joi.number().required(),
    email: Joi.string().email().required(),
    phoneno: Joi.number().required()
  });
  var validFields = validator.validateFields(req.apiReference, req.body, res, schema);
  if (validFields) {
    next();
  }
};
