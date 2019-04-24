import React, { Component } from 'react';
import './Weather.css';

class Weather extends Component {

  render() {
    console.log(this.props.weather, 'ello')
    const { name, wind, weather, main } = this.props.weather;
    return (
        <div>
          <p className="Weather-title">{name}</p>
          <p className="Detail-title">High: {main.temp_max}°</p>
          <p className="Detail-title">Low: {main.temp_min}°</p>
          <p className="Detail-title">Humidity: {main.humidity}%</p>
          <p className="Detail-title">Forecast: {weather[0].main}</p>
          <p className="Weather-title">Wind Speed: {wind.speed}</p>
        </div>
    );
  }
}

export default Weather;
