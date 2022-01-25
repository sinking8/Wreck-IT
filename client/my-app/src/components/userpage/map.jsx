import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { API_KEY } from '../../config/googlemaps';
import { server_URL } from '../../config/urls';
import axios from 'axios';

const style = {
  maxWidth: '1100px',
  height: '625px',
  overflowX: 'hidden',
  overflowY: 'hidden',
};
const containerStyle = {
  maxWidth: '1100px',
  height: '625px',
};

export class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
    };
  }

  componentDidMount() {
    axios.post(server_URL + 'fetch_shipwreck').then(results => {
      this.setState({ markers: results.data });
    });
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={style}
        containerStyle={containerStyle}
        initialCenter={{
          lat: '13.045812998652254',
          lng: '80.25544339744059',
        }}
      >
        {this.state.markers &&
          this.state.markers.map(marker => {
            return (
              <Marker
                key={marker._id}
                position={{
                  lat: marker.latdec,
                  lng: marker.londec,
                }}
              ></Marker>
            );
          })}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(GoogleMap);
