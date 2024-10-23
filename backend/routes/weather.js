// backend/routes/weather.js
const express = require('express');
const router = express.Router();
const Weather = require('../models/Weather');
const DailyWeatherSummary = require('../models/DailyWeatherSummary');
const { getWeatherData } = require('../services/weatherService');
const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];
const WeatherAlert = require('../models/WeatherAlert'); // Make sure this path is correct
// const WeatherAlert = require('../models/WeatherAlert');


const fetchWeatherForAllCities = async () => {
    await Weather.deleteMany({});
    
    for (const city of cities) {
        const weatherData = await getWeatherData(city);
        const weatherSummary = {
            city: weatherData.name,
            avgTemp: weatherData.main.temp,
            maxTemp: weatherData.main.temp_max,
            minTemp: weatherData.main.temp_min,
            perceivedTemp: weatherData.main.feels_like, // Store perceived temperature
            dominantCondition: weatherData.weather[0].main,
            timestamp: new Date(weatherData.dt * 1000) // Convert Unix timestamp to Date
        };

        // Save to database
        await Weather.create(weatherSummary);

        // Daily Weather Summary Calculation
        const existingSummary = await DailyWeatherSummary.findOne({ 
            city: city, 
            date: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) } 
        });

        if (existingSummary) {
            existingSummary.avgTemp = (existingSummary.avgTemp + weatherSummary.avgTemp) / 2; // Average
            existingSummary.maxTemp = Math.max(existingSummary.maxTemp, weatherSummary.maxTemp);
            existingSummary.minTemp = Math.min(existingSummary.minTemp, weatherSummary.minTemp);
            await existingSummary.save();
        } else {
            const dailySummary = new DailyWeatherSummary(weatherSummary);
            await dailySummary.save();
        }
    }
};



// Fetch alerts
// backend/routes/weather.js
// backend/routes/weather.js
// const express = require('express');

// const router = express.Router();
// const axios = require('axios');

// Function to create an alert
const createAlert = async (city, condition, triggered) => {
    const newAlert = new WeatherAlert({
        city,
        condition,
        triggered,
    });

    await newAlert.save();
};

// Function to check weather conditions
const checkWeatherConditions = async (weatherData) => {
    for (const data of weatherData) {
        const { city, temp } = data; // Assuming data contains city and temperature
        if (temp > 35) { // Example threshold
            await createAlert(city, "High Temperature", true);
        }
    }
};

// Fetch current weather data (example function)
router.get('/weather', async (req, res) => {
    try {
        // Fetch data from OpenWeatherMap API
        const weatherResponse = await axios.get('YOUR_API_URL_HERE');
        const weatherData = weatherResponse.data; // Parse your response as needed

        // Check conditions for alerts
        await checkWeatherConditions(weatherData);

        res.json(weatherData);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).json({ message: 'Error fetching weather data', error });
    }
});

// Fetch alerts
router.get('/alerts', async (req, res) => {
    try {
        const alerts = await WeatherAlert.find({});
        res.json(alerts);
    } catch (error) {
        console.error("Error fetching alerts:", error);
        res.status(500).json({ message: 'Error fetching alerts', error });
    }
});

module.exports = router;





// backend/routes/weather.js
// ... existing imports and code ...

// Route to fetch daily summaries
// backend/routes/weather.js
router.get('/daily-summaries', async (req, res) => {
    try {
        const summaries = await DailyWeatherSummary.find({});
        res.json(summaries);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching daily summaries', error });
    }
});

// router.get('/alerts', async (req, res) => {
//     try {
//         const alerts = await WeatherAlerts.find({});
//         res.json(alerts);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching alerts', error });
//     }
// });

// ... existing code ...



// Route to fetch weather data
router.get('/', async (req, res) => {
    try {
        await fetchWeatherForAllCities();
        const weatherData = await Weather.find();
        res.status(200).json(weatherData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        await fetchWeatherForAllCities();
        const weatherData = await Weather.find();
        res.status(200).json(weatherData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Set interval for fetching weather data every 5 minutes
setInterval(fetchWeatherForAllCities, 5 * 60 * 1000); // 5 minutes

module.exports = router;

