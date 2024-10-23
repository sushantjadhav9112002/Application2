# **Real-Time Weather Monitoring System**

## **Project Overview**
This project is a real-time weather monitoring system developed using the **MERN stack**. The system fetches weather data from the **OpenWeatherMap API** at configurable intervals, processes it, and displays the data in the frontend. The project includes key features like **daily weather summaries**, **alerting mechanisms** based on **user-configurable thresholds**, and **visualizations** for weather trends and alerts.

## **Features**
- **Real-Time Weather Data**: The system fetches real-time weather updates at specified intervals for major cities in India.
- **Daily Weather Summaries**: The weather data is rolled up daily to compute summaries such as:
  - Average temperature
  - Maximum temperature
  - Minimum temperature
  - Dominant weather condition
- **Alerting System**: Configurable alerts trigger when:
  - Temperature exceeds a defined threshold
  - Specific weather conditions (e.g., rain) occur
- **Visualizations**: The frontend displays historical weather data, daily summaries, and triggered alerts.
- **User Configurable Settings**: Users can set thresholds for triggering alerts based on temperature or specific weather conditions.

## **Project Structure**


```bash
/weather-monitoring
├── backend
│   ├── controllers
│   │   └── weatherController.js
│   ├── models
│   │   └── WeatherData.js
│   ├── routes
│   │   └── weatherRoutes.js
│   └── server.js
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   └── WeatherDisplay.js
│   │   ├── utils
│   │   │   └── weatherAPI.js
│   │   └── App.js
├── README.md
├── package.json
└── .env


