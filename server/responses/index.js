'use strict';

module.exports = {
    genericResponse: function(req, res){
        if(!req.resp.hasOwnProperty("statusCode")) req.resp.statusCode = 500
        if(!req.resp.hasOwnProperty("data")) req.resp.data = {}
        if(!req.resp.hasOwnProperty("msg")) req.resp.msg = ""
        res.send(req.resp);
    }
}