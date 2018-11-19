'use strict';
const passport = require('passport');

module.exports = {
    isLoggedIn: function (req, res, next) {
        passport.authenticate('jwt', { session: false }, function (err, user) {
            req.user = user;
        })(req, res, next);
    }
}