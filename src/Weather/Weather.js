import React, { Component } from 'react';
import './Weather.css';

class Weather extends Component {

  render() {
    console.log(this.props.weather, 'ello')
    const { name, wind, weather, main } = this.props.weather;
    return (
        <div>
          <p className="Weather-title">{name}</p>
          {/* <p onClick={() => this.handleClick()} className="Detail-link">
            BACK
          </p> */}
          {/* <img className="Detail-image" src={image_url} alt={name} /> */}
          <p className="Detail-title">High: {main.temp_max}°</p>
          <p className="Detail-title">Low: {main.temp_min}°</p>
          <p className="Detail-title">Humidity: {main.humidity}%</p>
          <p className="Detail-title">Forecast: {weather[0].main}</p>
          <p className="Weather-title">Wind Speed: {wind.speed}</p>
          {/* <p className="Weather-title">
            Retailers: {this.state.retailers.join(', ')}
          </p> */}
        </div>
    );
  }
}

export default Weather;
