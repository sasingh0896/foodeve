
var constants = require('./../properties/constants');
exports.actionCompleteResponse = actionCompleteResponse;
exports.authenticationErrorResponse = authenticationErrorResponse;
exports.authenticationErrorResponses = authenticationErrorResponses;
exports.authenticateEmailNotExists = authenticateEmailNotExists;
exports.sendError = sendError;
exports.invalidAccessError = invalidAccessError;
exports.wrongPasswordError = wrongPasswordError;
exports.sendPaymentFailedError = sendPaymentFailedError;


exports.sendResponse = sendResponse;
exports.sendDataTableResponse = sendDataTableResponse;
exports.somethingWentWrongError = somethingWentWrongError;

function invalidAccessError(res, data, msg) {
  res.send(JSON.stringify(getInvalidAccessError(data, msg)));
}

function actionCompleteResponse(res, data, msg, values) {
  var response = {
    message: msg || constants.responseMessages.ACTION_COMPLETE,
    status: constants.responseFlags.ACTION_COMPLETE,
    data: data || {}
  };
  if (values) {
    response.values = values;
  }
  res.send(JSON.stringify(response));
}


function authenticationErrorResponse(res, data) {
  var response = {
    message: constants.responseMessages.INVALID_ACCESS_TOKEN,
    status: constants.responseFlags.INVALID_ACCESS_TOKEN,
    data: data || {}
  };
  res.send(JSON.stringify(response));
}

function authenticationErrorResponses(res, data) {
  var response = {
    message: constants.responseMessages.INVALID_API_KEY,
    status: constants.responseFlags.INVALID_API_KEY,
    data: data || {}
  };
  res.send(JSON.stringify(response));
}
function authenticateEmailNotExists(res) {
  var response = {
    message: constants.responseMessages.EMAIL_NOT_EXISTS,
    status: constants.responseFlags.SHOW_ERROR_MESSAGE,
    data: {}
  };
  res.send(JSON.stringify(response));
}


function sendError(res, data, message) {
  var response = {
    message: message || constants.responseMessages.ERROR_IN_EXECUTION,
    status: constants.responseFlags.ERROR_IN_EXECUTION,
    data: data || {}
  };
  res.send(JSON.stringify(response));
}



function wrongPasswordError(res, data) {
  var response = {
    message: constants.responseMessages.WRONG_PASSWORD,
    status: constants.responseFlags.WRONG_PASSWORD,
    data: data || {}
  };
  res.send(JSON.stringify(response));
}



function sendPaymentFailedError(res, data) {
  var response = {
    message: constants.responseMessages.PAYMENT_FAILED,
    status: constants.responseFlags.PAYMENT_FAILED,
    data: data || {}
  };
  res.send(JSON.stringify(response));
}


function sendResponse(res, msg, status, data, values) {
  var response = {
    message: msg,
    status: status,
    data: data || {}
  };
  if (values) {
    response.values = values;
  }
  res.send(JSON.stringify(response));
}


function sendDataTableResponse(res, iTotalDisplayRecords, iTotalRecords, sEcho, aaData) {
  var response = {
    iTotalDisplayRecords: iTotalDisplayRecords || 0,
    iTotalRecords: iTotalRecords || 0,
    sEcho: sEcho || 0,
    aaData: aaData || []
  };
  res.send(JSON.stringify(response));
}


function somethingWentWrongError(res) {
  var response = {
    message: constants.responseMessages.SOMETHING_WENT_WRONG,
    status: constants.whitelabelFormConstants.INTERNAL_ERROR_STATUS,
    data: {}
  };
  res.send(JSON.stringify(response));
}

