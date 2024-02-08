import React from 'react';
import './WeatherDisplay.css'; 

function WeatherDisplay({ weatherData }) {
  return (
    <div className="weather-display">
      {weatherData.map((item, index) => (
        <div key={index} className="weather-item">
          <h2>{item.city}</h2>
          <p>Temperature: {item.temperature}</p>
          <p>Weather: {item.weather}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherDisplay;