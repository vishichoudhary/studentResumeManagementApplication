'use strict';

const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: {
        type: String,
        min: 36,
        max: 36
    },
    firstName: String,
    middleName: String,
    lastName: String,
    email: String,
    isVerified: Boolean,
    password: String,
    mobileNo: {
        type: String,
        min: 10,
        max: 10
    },
    branch: String,
    rollNo: String
});

module.exports = mongoose.model('studentDb', schema);

