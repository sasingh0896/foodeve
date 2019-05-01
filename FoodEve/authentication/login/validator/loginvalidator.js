var Joi = require('joi');
var validator = require('../../../validator/validator')

var apiReferenceModule = "smsLogin";
exports.loginValidator = function (req, res, next) {
  req.apiReference = {
    module: apiReferenceModule,
    api: "smsLogin"
  };
  var schema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required()
  });
  var validFields = validator.validateFields(req.apiReference, req.body, res, schema);
  if (validFields) {
    next();
  }
};
