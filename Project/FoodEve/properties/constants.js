
function define(obj, name, value) {
  Object.defineProperty(obj, name, {
    value       : value,
    enumerable  : true,
    writable    : false,
    configurable: true
  });
}
exports.responseMessages = {
    "PARAMETER_MISSING": "PARAMETER_MISSING",
    "INVALID_ACCESS_TOKEN": "INVALID_ACCESS_TOKEN",
    "WRONG_PASSWORD": "WRONG_PASSWORD",
    "ACTION_COMPLETE": "ACTION_COMPLETE",
    "SHOW_ERROR_MESSAGE": "SHOW_ERROR_MESSAGE",
    "ERROR_IN_EXECUTION": "ERROR_IN_EXECUTION",
    "INVALID_ACCESS": "INVALID_ACCESS",
    "EMAIL_NOT_EXISTS": "EMAIL_NOT_EXISTS",
    "CARD_NOT_ADDED_ERROR": "CARD_NOT_ADDED_ERROR",
    "USER_NOT_FOUND": "USER_NOT_FOUND",
    "PAYMENT_FAILED": "PAYMENT_FAILED",
    "SOMETHING_WENT_WRONG": "SOMETHING_WENT_WRONG",
    "LOW_MINIMUM_BALANCE": "LOW_MINIMUM_BALANCE",
    "LOW_RC_AMOUNT": "LOW_RC_AMOUNT",
    "INVALID_API_KEY": "INVALID_API_KEY",
  }
  
  
  //FOR FLAGS
  exports.responseFlags = {
    PARAMETER_MISSING: 100,
    INVALID_ACCESS_TOKEN: 101,
    INVALID_ACCESS: 201,
    WRONG_PASSWORD: 201,
    ACTION_COMPLETE: 200,
    SHOW_ERROR_MESSAGE: 201,
    ERROR_IN_EXECUTION: 404,
    USER_NOT_FOUND: 201,
    EMAIL_NOT_EXISTS: 400,
    PAYMENT_FAILED: 401,
    INVALID_API_KEY: 402
  };
  


exports.whitelabelFormConstants = {
    INTERNAL_ERROR_STATUS: 500,
  };


exports.taskCreatedBy = {
  "USER"                  :   0,
  "DISPATCHER"            :   1,
  "FLEET"                 :   2,
  "VENDOR"                :   3,
  "VENDOR_APP"            :   4,
  "API"                   :   5,
  "YELO"                  :   7,
  "ANDROID"               :  10,
  "IOS"                   :  11,
  "WEBAPP"                :  12
};

exports.paytmTxnType = {};
define(exports.paytmTxnType, 'ADD_MONEY', 1);
define(exports.paytmTxnType, 'WITHDRAW', 2);
define(exports.paytmTxnType, 'REFUND', 3);
define(exports.paytmTxnType, 'TRANSFER', 4);


exports.paytmTxnStatus = {};
define(exports.paytmTxnStatus, 'STARTED', 10);
define(exports.paytmTxnStatus, 'PENDING', 15);
define(exports.paytmTxnStatus, 'PENDING_1', 25);
define(exports.paytmTxnStatus, 'SUCCESS', 30);
define(exports.paytmTxnStatus, 'FAILURE', -30);

exports.PAYTM_HTML = {
  ERROR       : '/error.html',
  PENDING     : '/pending.html',
  SUCCESS     : '/success.html',
};

exports.paytmTxnStatusResponse = {
  SUCCESS: "TXN_SUCCESS",
  FAILED : "TXN_FAILURE",
  PENDING: "PENDING"
};