import React, { Component } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import Map from './Map/Map'
require('dotenv').config();

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN


class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
