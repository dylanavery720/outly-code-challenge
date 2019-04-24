import React, { Component } from 'react';
import './Weather.css';

class Weather extends Component {
  render() {
    const { name, wind, weather, main } = this.props.weather;
    return (
      <div>
        <p className="Weather-title name">{name === '' ? 'Uncharted' : name}</p>
        <p className="Weather-title">Humidity: {main.humidity}%</p>
        <p className="Weather-title">Forecast: {weather[0].main}</p>
        <p className="Weather-title">Wind Speed: {wind.speed}mph</p>
        <p className="Weather-title high">High: {main.temp_max}°</p>
        <p className="Weather-title low">Low: {main.temp_min}°</p>
      </div>
    );
  }
}

export default Weather;
