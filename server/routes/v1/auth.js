const express = require('express');
const app = express();

const router = express.Router();

router.route('/login')
    .post(function(a){});

app.use('/', router);

module.exports = app;