import React from 'react';
import './App.css';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import weatherData from './weatherData.json'; 

function App() {
  return (
    <div className="App">
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default App;