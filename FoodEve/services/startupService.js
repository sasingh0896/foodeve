var apiReferenceModule = "startup";

var Promise = require('bluebird');

const logging          = require('../logging/logging');
const envProperties    = require('../properties/envProperties');
const mysqlLib         = require('../database/mySqlLib');
const httpLib          = require('./httpService')


exports.initializeServer = () => {

    return new Promise(async (resolve, reject) => {
        var apiReference = {
            module: apiReferenceModule,
            api: "initialize"
        };


        Promise.coroutine(function* () {
            connection = yield mysqlLib.initializeConnectionPool(envProperties.databaseSettings.mysql.master);
            server = yield httpLib.startHttpServer(envProperties.port);

        })().then((data) => {
            resolve(data);
        }, (error) => {
            logging.logError(apiReference, error);
            reject(error);
        });
    });
}