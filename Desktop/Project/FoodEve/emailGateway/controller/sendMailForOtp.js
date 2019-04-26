var nodemailer                                  = require("nodemailer");

var smtpTransport                               = undefined;

function sendEmail(apiReference,opts){
  return new Promise((resolve, reject) =>{
      var receiverMailId = opts.emailId;
      var message ="OTP:75757";
      var subject = opts.subject;
      var userId      = opts.userId;
      var userName    = opts.userName;
      var companyName = "FOOD EVE";
      var getUserOpts = {
        from_name : companyName,
        user_id : userId,
        from : from
      };


    if (smtpTransport === undefined) {
      smtpTransport = nodemailer.createTransport({
        host: config.get('emailCredentials.host'),
        port: config.get('emailCredentials.port'),
        auth: {
          user: config.get('emailCredentials.senderEmail'),
          pass: config.get('emailCredentials.senderPassword')
        }
      });
    }

      var senderEmail = "durgeshkashyap63@gmail.com";
      var mailOptions = {
        from: senderEmail, // sender address
        to: receiverMailId, // list of receivers
        subject: subject, // Subject line
        text : message
      };

      // if (from) {
      //   mailOptions.headers = { "Reply-To" : from };
      // }

      smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
          console.log("Error"+error+response)
        } else {
          console.log("Successfully")
        }
    })
  });
}

sendEmail();