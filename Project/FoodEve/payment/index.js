const paytmController =require('./paytm/controller/paytmController');
const paytmValidator =require('./paytm/validator/paytmValidator');

app.post( paytmValidator.paytmValidator,paytmController.payUsingPaytm);