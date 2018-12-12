'use strict';

module.exports = {
    profile: function(req, res, next){
        console.log("am i called");
        next();
    },
    createEvent: function(req, res, next) {
        next();
    }
}