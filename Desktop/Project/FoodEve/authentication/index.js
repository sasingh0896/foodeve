const loginValidator = require('./login/validator/loginvalidator');
const loginController = require('./login/controller/logincontroller');
const signupController=require('./signup/controller/signupController');
const signupValidator=require('./signup/validator/signupvalidate');

app.post('/signup',signupValidator.signupValidator , signupController.signupController);
app.post('/login', loginValidator.loginValidator, loginController.loginController);