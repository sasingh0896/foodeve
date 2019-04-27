var Promise = require('bluebird');
var request = require('request');
var _ = require('underscore');
var http = require('http');


exports.startHttpServer = startHttpServer;

function startHttpServer(port) {
  return new Promise((resolve, reject) => {
    var server = http.createServer(app).listen(port, function () {

      console.error("###################### Express connected ##################", app.get('port'), app.get('env'));
      resolve(server);
    });
  });
}
