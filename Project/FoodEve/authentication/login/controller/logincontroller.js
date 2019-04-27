const _ = require("underscore");
const md5 = require("md5");


const logging = require("../../../logging/logging");
const userService = require("../../../services/userServices");
const responses = require("../../../routes/responses");

exports.loginController = async (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  try {
    let userInfo = await userService.getUser(req.apiReference, {
      email: email
    });
    console.log(userInfo);
    if (_.isEmpty(userInfo)) {
      return responses.authenticateEmailNotExists(res);
    }
    if (md5(password) != userInfo[0].password) {
      return responses.wrongPasswordError(res);
    }
    return responses.actionCompleteResponse(res, userInfo[0])
  } catch (error) {
    logging.logError(req.apiReference, {
      EVENT: "authenticateUser ERROR",
      ERROR: error
    });
    return responses.sendError(res, error);
  }
};