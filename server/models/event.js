'use strict';

const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: {
        type: String,
        min: 36,
        max: 36
    },
    name: String,
    from: String,
    to: String,
    description: String,
    interested: Number,
    notIntereseted: Number,
    comments: Array,
    createdAt: Date
});

module.exports = mongoose.model('eventsDb', schema);

