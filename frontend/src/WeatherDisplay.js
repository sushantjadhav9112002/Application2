// frontend/src/WeatherDisplay.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherDisplay.css';

const WeatherDisplay = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [dailySummaries, setDailySummaries] = useState([]);
    const [alerts, setAlerts] = useState([]);

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/weather/');
            setWeatherData(response.data);
        } catch (error) {
            console.error("Error fetching current weather data:", error);
        }
    };

    const fetchDailySummaries = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/weather/daily-summaries');
            setDailySummaries(response.data);
        } catch (error) {
            console.error("Error fetching daily summaries:", error);
        }
    };

    const fetchAlerts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/weather/alerts');
            console.log("Fetched alerts:", response.data); // Log the fetched alerts
            setAlerts(response.data);
        } catch (error) {
            console.error("Error fetching alerts:", error);
        }
    };

    useEffect(() => {
        fetchWeatherData();
        const interval = setInterval(fetchWeatherData, 5 * 60 * 1000); // Fetch every 5 minutes
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Weather Monitoring System</h1>
            <div className='button-container'>
            <button onClick={fetchWeatherData}>Fetch Current Weather Data</button>
            <button onClick={fetchDailySummaries}>Fetch Daily Summaries</button>
            <button onClick={fetchAlerts}>Fetch Alerts</button>

            </div>

            

            <h2>Current Weather Data</h2>
            <ul>
                {weatherData.length > 0 ? (
                    weatherData.map((data, index) => (
                        <li key={index}>
                            {data.city}: 
                            Avg Temp: {(data.avgTemp !== undefined) ? data.avgTemp.toFixed(2) : 'N/A'} °C, 
                            Max Temp: {(data.maxTemp !== undefined) ? data.maxTemp.toFixed(2) : 'N/A'} °C, 
                            Min Temp: {(data.minTemp !== undefined) ? data.minTemp.toFixed(2) : 'N/A'} °C, 
                            Perceived Temp: {(data.perceivedTemp !== undefined) ? data.perceivedTemp.toFixed(2) : 'N/A'} °C, 
                            Condition: {data.dominantCondition || 'N/A'}, 
                            Updated At: {data.timestamp ? new Date(data.timestamp).toLocaleString() : 'N/A'}
                        </li>
                    ))
                ) : (
                    <li>No weather data available.</li>
                )}
            </ul>

            <h2>Daily Weather Summaries</h2>
            <ul>
                {dailySummaries.length > 0 ? (
                    dailySummaries.map((summary, index) => (
                        <li key={index}>
                            {summary.city} - Date: {new Date(summary.date).toLocaleDateString()}: 
                            Avg Temp: {(summary.avgTemp !== undefined) ? summary.avgTemp.toFixed(2) : 'N/A'} °C, 
                            Max Temp: {(summary.maxTemp !== undefined) ? summary.maxTemp.toFixed(2) : 'N/A'} °C, 
                            Min Temp: {(summary.minTemp !== undefined) ? summary.minTemp.toFixed(2) : 'N/A'} °C, 
                            Condition: {summary.dominantCondition || 'N/A'}
                        </li>
                    ))
                ) : (
                    <li>No daily summaries available.</li>
                )}
            </ul>

            <h2>Alerts</h2>
            <ul>
                {alerts.length > 0 ? (
                    alerts.map((alert, index) => (
                        <li key={index}>
                            {alert.city}: Alert for {alert.condition} - Triggered: {alert.triggered ? 'Yes' : 'No'}
                        </li>
                    ))
                ) : (
                    <li>No alerts available.</li>
                )}
            </ul>
        </div>
    );
};

export default WeatherDisplay;
