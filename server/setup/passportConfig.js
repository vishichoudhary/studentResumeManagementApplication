'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('models'),
    Student = models.student;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    function (email, password, cb) {
        Student.findOne({ email: email, isVerified: true }, function (err, user) {
            if (!user) {
                return cb(null, false, { message: 'Incorrect email' });
            }
            else if (!bcrypt.compareSync(password, user.password)) {
                return cb(null, false, { message: 'Incorrect password' });
            }
            else {
                return cb(null, user, { message: 'Logged In Successfully' });
            }
        });
    }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_jwt_secret'
},
    function (jwtPayload, cb) {
        return Student.findOne({ _id: jwtPayload._id })
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));