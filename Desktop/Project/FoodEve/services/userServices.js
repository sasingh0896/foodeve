var Promise = require('bluebird');

const dbHandler = require('../database/mySqlLib')
const logging = require('../logging/logging');



exports.getUser = (apiReference, opts) => {
  return new Promise((resolve, reject) => {
    var values = [];
    opts.columns = opts.columns || '*';
    var sql = `SELECT ${opts.columns} FROM food_users WHERE is_dispatcher = 1 `;

    if (opts.user_id) {
      sql += " AND user_id = ? ";
      values.push(opts.user_id);
    }
    if (opts.access_token) {
      sql += " AND access_token = ? ";
      values.push(opts.access_token);
    }
    if (opts.email) {
      sql += " AND email = ? ";
      values.push(opts.email);
    }
    if (opts.apikey) {
      sql += " AND apikey = ? ";
      values.push(opts.apikey);
    }
    sql += " LIMIT 1";
    dbHandler.mysqlQueryPromise(apiReference, "getUser", sql, values).then((result) => {

      return resolve(result);
    }, (error) => {
      return reject(error);
    });
  });
}
