const dbHandler = require("../../../database/mySqlLib");

exports.emailExists=emailExists;
exports.phoneExists=phoneExists;
exports.insertUserData=insertUserData;

async function emailExists(emails) {
  let query = "SELECT * FROM food_users WHERE email=?";
  var email = [];
  email.push(emails);
  var result = await dbHandler.mysqlQueryPromise({ module: "signup", api: "signup" }, "EmailExist", query, email);
  try {
    if (result[0].user_id)
      return false;
  }
  catch (error) {
    return true;
  }
}
async function phoneExists(phones) {
  let query = "SELECT * FROM food_users WHERE phoneno=?";
  var phone = [];
  phone.push(phones);
  var result = await dbHandler.mysqlQueryPromise({ module: "signup", api: "signup" }, "PhoneExist", query, phone);
  try {
    if (result[0].user_id)
      return false;
  }
  catch (error) {
    return true;
  }
}

async function insertUserData(data) {
  let query = "INSERT INTO food_users(username," +
    "password,is_dispatcher,phoneno,email,access_token,creation_datetime)" +
    "VALUES(?,?,1,?,?,?,NOW())";
  let result = await dbHandler.mysqlQueryPromise({ module: "insertUserData", api: "signup" }, "userDetail", query, data);
  if(result.affectedRows) {
    let resultSend = {access_token: data[4], email: data[3]};
    return resultSend;
  }
}