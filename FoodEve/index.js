const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
config                                     = require('config');
const startupService = require('./services/startupService');
const envProperties = require('./properties/envProperties');

app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


startupService.initializeServer();
app.set('port', envProperties.port);

//FOOD EVE APIs

require('./authentication');
require('./payment');
require('./itemManagement');
require('./cartManagement');
require('./emailGateway/controller/sendMailForOtp')
