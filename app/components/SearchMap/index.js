/**
 *
 * SearchMap
 *
 */

import React from 'react';
import GoogleMap from 'google-map-react';

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
    }
    ;
  }


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
    if (markers.length > 0) {
      defaultMaps.center.lat = markers[0].lat;
      defaultMaps.center.lng = markers[0].lng;
    }

    return (
      <div style={this.state}>
        {markers ? <GoogleMap bootstrapURLKeys={{key: 'AIzaSyCBGWSEGLEvgRAw_FR8OGZq4Rm69UJU7hU', language: 'it'}}
                              defaultCenter={defaultMaps.center}
                              defaultZoom={defaultMaps.zoom}>
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
