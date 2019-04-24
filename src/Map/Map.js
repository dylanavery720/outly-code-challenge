import React, { Component } from 'react';
import ReactMapGL, {Popup} from 'react-map-gl';
import { getWeather } from '../Requests/requests'
import Weather from '../Weather/Weather'

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
        popUp: false,
        style: 'mapbox://styles/mapbox/streets-v11',
        viewport: {
            lon: 33,
            lat: 33,
            zoom: 1.5,
            height: window.innerHeight,
            width: window.innerWidth,
        },
        weather: {

        }
    };
  }

  onViewportChange = viewport => { 
    const {...etc} = viewport
    this.setState({viewport: etc})
  } 

  closePopUp() {
      this.setState({popUp: false})
  }

  async displayPopUp(e) {
      const weather = await getWeather(e.lngLat[1], e.lngLat[0])
      this.setState({weather})
      this.setState({popUp:true, popUpLat: e.lngLat[1], popUpLon: e.lngLat[0]})
  }

  render() {
    const {viewport, style, popUpLat, popUpLon, weather} = this.state  
    return (
      <div className="Map">
      <ReactMapGL onClick={async (e) => await this.displayPopUp(e)} mapStyle={style} {...viewport} onViewportChange={viewport => this.onViewportChange(viewport)}>
        {this.state.popUp && <Popup onClose={() => this.closePopUp()} latitude={popUpLat} longitude={popUpLon} closeButton={true} closeOnClick={true} anchor="top">
            <Weather weather={weather} />
        </Popup>}
      </ReactMapGL>
      </div>
    );
  }
}

export default Map;
