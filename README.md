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

##

## Technologies Used
### Frontend
- **React.js**: For the user interface.
- **Chart.js**: To visualize the weather data trends.
- **Axios**: For making HTTP requests to the backend API.

### Backend
- **Node.js**: For the server-side application.
- **Express.js**: For handling API routes and server logic.
- **MongoDB**: For storing weather data and daily summaries.
- **Mongoose**: For database schema management.
- **Nodemailer**: For sending email alerts when thresholds are breached.

### External API
- **OpenWeatherMap API**: To fetch real-time weather data.

## Installation and Setup
### Prerequisites
- Node.js (v14 or later)
- MongoDB (local or cloud instance)
- OpenWeatherMap API Key: You need to sign up for an API key from OpenWeatherMap.

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-monitoring.git
   cd weather-monitoring
2. **Backend Setup**
   ```bash
   cd backend
   npm install
3. **Create a .env file with the following environment variables:**
   ```make
   PORT=5000
    MONGO_URI=your_mongodb_connection_string
    OPENWEATHER_API_KEY=your_openweathermap_api_key

4. **Run the backend server:**
   ```bash
   nodemon server.js
5. **Frontend Setup**
   ```bash
   cd ../frontend
    npm install

6. **Create a .env file with the following environment variable:**
   ```make
   REACT_APP_API_URL=http://localhost:5000/api

7. **Run the frontend development server:**
   ```bash
   npm start
8. **MongoDB Setup If you don’t have MongoDB set up, you can either:**
   ```bash
   Install MongoDB locally on your machine.
    Use MongoDB Atlas for a cloud database instance.
    Set your MONGO_URI environment variable accordingly.
  





   
