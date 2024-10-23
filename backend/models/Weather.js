// backend/models/Weather.js
const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    city: String,
    date: { type: Date, default: Date.now },
    avgTemp: Number,
    maxTemp: Number,
    minTemp: Number,
    dominantCondition: String,
    perceivedTemp: Number, // New field for perceived temperature
    timestamp: { type: Date, default: Date.now } // Time of the data update
});

module.exports = mongoose.model('Weather', weatherSchema);
