// backend/models/WeatherAlert.js
const mongoose = require('mongoose');

const WeatherAlertSchema = new mongoose.Schema({
    city: { type: String, required: true },
    condition: { type: String, required: true },
    triggered: { type: Boolean, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('WeatherAlert', WeatherAlertSchema);

