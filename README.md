Real-Time Weather Monitoring System Project Overview This project is a
real-time weather monitoring system developed using the MERN stack. The
system fetches weather data from the OpenWeatherMap API at configurable
intervals, processes it, and displays the data in the frontend. The
project includes key features like daily weather summaries, alerting
mechanisms based on user-configurable thresholds\*\*, and visualizations
for weather trends and alerts.

Features Real-Time Weather Data: The system fetches real-time weather
updates at specified intervals for major cities in India. Daily Weather
Summaries: The weather data is rolled up daily to compute summaries such
as: Average temperature Maximum temperature Minimum temperature Dominant
weather condition Alerting System: Configurable alerts trigger when:
Temperature exceeds a defined threshold Specific weather conditions
(e.g., rain) occur Visualizations: The frontend displays historical
weather data, daily summaries, and triggered alerts. User Configurable
Settings: Users can set thresholds for triggering alerts based on
temperature or specific weather conditions. Project Structure bash

/weather-monitoring ├── backend │ ├── controllers │ │ └──
weatherController.js │ ├── models │ │ └── WeatherData.js │ ├── routes │
│ └── weatherRoutes.js │ └── server.js ├── frontend │ ├── public │ │ └──
index.html │ ├── src │ │ ├── components │ │ │ └── WeatherDisplay.js │ │
├── utils │ │ │ └── weatherAPI.js │ │ └── App.js ├── README.md ├──
package.json └── .env

Technologies Used Frontend React.js: For the user interface. Chart.js:
To visualize the weather data trends. Axios: For making HTTP requests to
the backend API. Backend Node.js: For the server-side application.
Express.js: For handling API routes and server logic. MongoDB: For
storing weather data and daily summaries. Mongoose: For database schema
management. Nodemailer: For sending email alerts when thresholds are
breached. External API OpenWeatherMap API: To fetch real-time weather
data. Installation and Setup Prerequisites Node.js (v14 or later)
MongoDB (local or cloud instance) OpenWeatherMap API Key: You need to
sign up for an API key from OpenWeatherMap. 1. Clone the repository

git clone https://github.com/your-username/weather-monitoring.git cd
weather-monitoring 2. Backend Setup Navigate to the backend folder:

cd backend Install the required dependencies:

npm install Create a .env file in the backend folder with the following
environment variables:

make PORT=5000 MONGO_URI=your_mongodb_connection_string
OPENWEATHER_API_KEY=your_openweathermap_api_key Run the backend server:

npm start The backend will be running at http://localhost:5000.

3.  Frontend Setup Navigate to the frontend folder:

cd ../frontend Install the required dependencies:

npm install Create a .env file in the frontend folder with the following
environment variables:

REACT_APP_API_URL=http://localhost:5000/api Run the frontend development
server:

npm start The frontend will be running at http://localhost:3000.

4.  MongoDB Setup If you don't have MongoDB set up, you can either:

Install MongoDB locally on your machine. Use MongoDB Atlas for a cloud
database instance. Set your MONGO_URI environment variable accordingly.

Functionality 1. Real-Time Weather Data Fetching The system fetches
weather data for predefined cities at regular intervals (configurable,
e.g., every 5 minutes) using the OpenWeatherMap API. This data is stored
in the MongoDB database and displayed in the frontend.

2.  Daily Weather Summary At the end of each day, the system performs
    rollups and aggregates the weather data into daily summaries,
    including:

Average temperature for the day. Maximum and minimum temperatures
recorded. Dominant weather condition (e.g., sunny, rainy). These
summaries are stored in the database for future analysis and
visualizations.

3.  Alerting System The system tracks the latest weather data and
    compares it with user-configurable thresholds. Users can set alerts
    for:

Temperature: If the temperature exceeds a certain threshold (e.g.,
35°C). Weather Conditions: If specific weather conditions (e.g., rain)
are detected. Example Code Snippet for Alerts: void checkAlerts(const
WeatherData& latestData, const float temperatureThreshold, const string&
alertCondition) { if (latestData.temperature \> temperatureThreshold) {
cout \<\< "Alert! Temperature exceeds threshold:" \<\<
latestData.temperature \<\< "°C" \<\< endl; }

    if (latestData.condition == alertCondition) {
        cout << "Alert! Weather condition is: " << alertCondition << endl;
    }

} 4. Visualizations The frontend provides visualizations for:

Historical weather trends using Chart.js. Display of daily summaries.
Real-time display of triggered alerts. 5. Configurable Intervals and
Alerts Users can configure:

The interval at which the system fetches new weather data. The
thresholds for triggering alerts, such as maximum temperature or
specific weather conditions. Testing and Evaluation Functionality: The
project covers real-time weather updates, rollups, alerting, and
visualization. Accuracy: Data accuracy is ensured by fetching reliable
information from OpenWeatherMap and properly processing it. Efficiency:
Efficient rollups and real-time processing. Code Quality: The code
follows a modular structure with clear separation of concerns. Future
Enhancements Support for Additional Cities: Easily extendable to track
weather data from more cities. Forecasting: Implement support for
weather forecasts from the OpenWeatherMap API. Notification System:
Extend the alerting system to support SMS or push notifications.
Conclusion This project provides a full-stack solution for real-time
weather monitoring with key features like data rollups, alerts, and
visualizations. By following the setup instructions, you can run the
application locally and customize it to your needs.
