import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

// this component will return google map 
const MapContainer = (props) => {
    return (
        <Map
            google={props.google}
            resetBoundsOnResize={true}
            zoom={8}
            className='map'
            initialCenter={{ lat: 47.444, lng: -122.176 }}
        >
            <Marker position={{ lat: 48.00, lng: -122.00 }} />
        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAGHM9zze5Yh2swijA2N78rothQTcrDvrA'
})(MapContainer);