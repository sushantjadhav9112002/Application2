// backend/routes/weather.js
const express = require('express');
const WeatherAlert = require('../models/WeatherAlert');
const router = express.Router();

// Fetch alerts
router.get('/alerts', async (req, res) => {
    try {
        const alerts = await WeatherAlert.find({});
        console.log("Fetched alerts:", alerts); // Log fetched alerts
        res.json(alerts);
    } catch (error) {
        console.error("Error fetching alerts:", error);
        res.status(500).json({ message: 'Error fetching alerts', error });
    }
});

module.exports = router;
