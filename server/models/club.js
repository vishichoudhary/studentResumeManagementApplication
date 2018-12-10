'use strict';

const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: {
        type: String,
        min: 36,
        max: 36
    },
    name: String,
    facultyCoordinator: {
        _id: {
            type: String,
            min: 36,
            max: 36
        },
        name: String
    },
    president: {
        _id: {
            type: String,
            min: 36,
            max: 36
        },
        name: String
    },
    vicePresident: {
        _id: {
            type: String,
            min: 36,
            max: 36
        },
        name: String
    },
    totalMembers: Number,
    members: Array
});

module.exports = mongoose.model('clubsDb', schema);