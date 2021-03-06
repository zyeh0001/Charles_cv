import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Grid } from '@material-ui/core';
import './Map.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
/* eslint import/no-webpack-loader-syntax: off */
mapboxgl.workerClass =
  require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
mapboxgl.accessToken =
  'pk.eyJ1Ijoic3NpbjAwNjkiLCJhIjoiY2t0bjRpejBjMGZpZzJxbjU3azRsY3V2aSJ9.d_2VxfEhFX2ff-TnQaQY5g';
class Map extends React.Component {
  constructor(props) {
    super();
    this.state = {
      lng: 144,
      lat: -37,
      zoom: 5,
      selectedHosp: null,
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
    });
    map.addControl(directions, 'top-right');

    const geolocate = new mapboxgl.GeolocateControl({
      style: {
        top: 0,
        left: 0,
        margin: 50,
      },
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      fitBoundsOptions: { maxZoom: 10 },
    });
    map.addControl(geolocate);
    map.on('load', () => {
      geolocate.trigger();
    });
    map.on('render', () => {
      map.resize();
    });
  }
  render() {
    return (
      <Grid container className='mapContainer'>
        <Grid item xs={12}>
          <div ref={(el) => (this.mapWrapper = el)} className='mapWrapper' />
        </Grid>
      </Grid>
    );
  }
}
export default Map;
