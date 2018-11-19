'use strict';

module.exports = {
    profile: function(req, res, next){
        console.log("am i called");
        next();
    },
}