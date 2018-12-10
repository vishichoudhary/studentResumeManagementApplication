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
        type: String,
        min: 36,
        max: 36
    },
    president: {
        type: String,
        min: 36,
        max: 36
    },
    vicePresident: {
        type: String,
        min: 36,
        max: 36
    },
    totalMembers: Number,
    members: Array 
});

module.exports = mongoose.model('clubsDb', schema);