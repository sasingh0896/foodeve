var Joi                                         = require('joi');
var _                                           = require('underscore');
var logging                                     = require('../logging/logging');
var responses                                   = require('../routes/responses');
var constants                                   = require('../properties/constants');

exports.minPasswordLength                       = 6;
exports.emailMinDomainAtoms                     = 2;

exports.validateFields = function (apiReference, req, res, schema) {
    logging.log(apiReference, {REQUEST_BODY: req});
    var validation = Joi.validate(req, schema);
    if(validation.error) {
        var errorReason =
                validation.error.details !== undefined
                    ? validation.error.details[0].message
                    : 'Parameter missing or parameter type is wrong';
        logging.log(apiReference, validation.error.details);
        responses.sendResponse(res,errorReason, constants.responseFlags.PARAMETER_MISSING);
        return false;
    }
    return true;
};