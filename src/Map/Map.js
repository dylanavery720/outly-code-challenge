import React, { Component } from 'react';
import ReactMapGL, {Popup} from 'react-map-gl';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
        popUp: false,
        style: 'mapbox://styles/mapbox/streets-v11',
        viewport: {
            lng: 33,
            lat: 33,
            zoom: 1.5,
            height: window.innerHeight,
            width: window.innerWidth
        }
    };
  }

  //this props weather should be a <Weather /> card

  onViewportChange = viewport => { 
    const {...etc} = viewport
    this.setState({viewport: etc})
  } 

  closePopUp() {
      this.setState({popUp: false})
  }

  displayPopUp(e) {
      this.setState({popUp:true, popUpLat: e.lngLat[1], popUpLon: e.lngLat[0]})
  }

  render() {
    const {viewport, style, popUpLat, popUpLon} = this.state  
    return (
      <div className="Map">
      <ReactMapGL onClick={(e) => this.displayPopUp(e)} mapStyle={style} {...viewport} onViewportChange={viewport => this.onViewportChange(viewport)}>
        {this.state.popUp && <Popup onClose={() => this.closePopUp()} latitude={popUpLat} longitude={popUpLon} closeButton={true} closeOnClick={true} anchor="top">
      {/* <div>{...this.props.weather}</div> */}
        </Popup>}
      </ReactMapGL>
      </div>
    );
  }
}

export default Map;
