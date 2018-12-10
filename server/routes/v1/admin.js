const express = require('express');
const app = express();

const router = express.Router();
const responses = require('responses');

// router.route('/login')
    // .post(authResources.login, authControllers.login, responses.genericResponse);

app.use('/', router);

module.exports = app;