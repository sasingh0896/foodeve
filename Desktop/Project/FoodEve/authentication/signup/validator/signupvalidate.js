var Joi = require('joi');
var validator = require('../../../validator/validator')

var apiReferenceModule = "smsSignup";
exports.signupValidator = function (req, res, next) {
  req.apiReference = {
    module: apiReferenceModule,
    api: "smsSignup"
  };
  var schema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
    phoneno: Joi.string().required(),
    fullName: Joi.string().required()
  });
  var validFields = validator.validateFields(req.apiReference, req.body, res, schema);
  if (validFields) {
    next();
  }
};
