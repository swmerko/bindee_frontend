/**
 *
 * SearchMap
 *
 */

import React from 'react';
import GoogleMap from 'google-map-react';
import {fitBounds} from 'google-map-react/utils';

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'relative',
  width: '100%',
  height: '100%',
  // left: -K_WIDTH / 2,
  // top: -K_HEIGHT / 2,

  border: '1px solid #f44336',
  // borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 12,
  fontWeight: 'bold',
  padding: 4
};

const MyGreatPlace = (props) => {
  return <div style={greatPlaceStyle}>
    {props.text}
  </div>;
};

class SearchMap extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      width: '41%',
      position: 'fixed',
      right: 0,
      top: '64px',
      bottom: 0
    };
  }

  calculateBounds(markers) {

    var minLatitude = 99999999;
    var maxLatitude = 0;
    var minLongitude = 99999999;
    var maxLongitude = 0;

    for (var marker of markers) {
      if (marker.businessProfileLatitude < minLatitude) {
        minLatitude = marker.businessProfileLatitude;
      }
      if (marker.businessProfileLatitude > maxLatitude) {
        maxLatitude = marker.businessProfileLatitude;
      }
      if (marker.businessProfileLongitude < minLongitude) {
        minLongitude = marker.businessProfileLongitude;
      }
      if (marker.businessProfileLongitude > maxLongitude) {
        maxLongitude = marker.businessProfileLongitude;
      }
    }

    const bounds = {
      nw: {
        lat: maxLatitude,
        lng: minLongitude
      },
      se: {
        lat: minLatitude,
        lng: maxLongitude
      }
    };
    return bounds;
  }

  // calculateCenter(bounds) {
  //
  //   var minLatitude = bounds.se.lat;
  //   var maxLatitude = bounds.nw.lat;
  //   var minLongitude = bounds.nw.lng;
  //   var maxLongitude = bounds.se.lng;
  //
  //   const centerLatitude = parseFloat(minLatitude) + parseFloat(((maxLatitude - minLatitude) / 2));
  //   const centerLongitude = parseFloat(minLongitude) + parseFloat(((maxLongitude - minLongitude) / 2));
  //
  //   const result = {
  //     lat: centerLatitude,
  //     lng: centerLongitude
  //   };
  //
  //   return result
  // }


  render() {
    let defaultMaps = {
      center: {
        lat: 43.8935436000, lng: 12.9028008000
      },
      zoom: 8
    };

    let markers = this.props.markers.map((marker) => {
      return {
        id: marker.id,
        lat: marker.businessProfileLatitude,
        lng: marker.businessProfileLongitude,
        text: marker.businessProfileName
      };
    });

    const size = {
      width: 380, // Map width in pixels
      height: 640, // Map height in pixels
    };

    let bounds = null;
    let center = defaultMaps.center;
    let zoom = defaultMaps.zoom;

    if (markers.length > 0) {
      bounds = this.calculateBounds(this.props.markers);
      let fitter = fitBounds(bounds, size);
      center = fitter.center;
      zoom = fitter.zoom;
    }

    return (
      <div style={this.state}>
        {markers ? <GoogleMap bootstrapURLKeys={{key: 'AIzaSyCBGWSEGLEvgRAw_FR8OGZq4Rm69UJU7hU', language: 'it'}}
                              center={center}
                              zoom={zoom}>
          {markers ? markers.map((marker) => {
            return <MyGreatPlace key={marker.id}
                                 lat={marker.lat}
                                 lng={marker.lng} text={marker.text}/>;
          }) : null}
        </GoogleMap> : null}
      </div>
    );
  }
}

export default SearchMap;
