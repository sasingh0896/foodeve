const md5 = require('md5');

var dbHandler = require("../../../database/mySqlLib");
var Key = require("../../../routes/generate");
const response = require('../../../routes/responses');
const signupService=require('./../services/signupService');

exports.signupController = async (req, res) => {
    try {
        var emailExist = await signupService.emailExists((req.body.email));
        if (!emailExist) {
            response.sendResponse(res, "Email Already Exist")
            return false;
        }
        var phoneExist = await signupService.phoneExists((req.body.phoneno));
        if (!phoneExist) {
            response.sendResponse(res, "Phone Number Already Exist");
            return false;
        }
        var token = Key.generateToken();
        var userDetail = [
            req.body.fullName,
            md5(req.body.password),
            req.body.phoneno,
            req.body.email,
            token,
        ];

        let result=await signupService.insertUserData(userDetail);
        if(result)
            return response.actionCompleteResponse(res, result);
    } catch (error) {
        console.log(error);
        return error;
    }
};



