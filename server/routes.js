const express = require("express");
const app = express();

app.all('/heartbeat', function(req, res, next){
    res.send("ok");
});

require(__dirname + '/routes/').forEach(function(a){
    app.use('/api' + a.prefix, a.app);
});

module.exports = app;