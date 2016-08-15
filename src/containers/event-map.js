import React from 'react';
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import { updateZoom, updateLocation } from '../actions.js';
        //onMouseup={(e) => dispatch(updateLocation([e.latlng.lat, e.latlng.lng])) }
const EventMap = ({ dispatch, latlng }) => (
    <Map
        center={latlng} zoom={15} style={{height: 400, width: 400}}
        onZoomend={(e) => dispatch(updateZoom(e.target._zoom))}
        onMoveend={(e) => dispatch(updateLocation([e.target.getCenter().lat, e.target.getCenter().lng]))}
        >
        <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={latlng}>
            <Popup>
                <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
            </Popup>
        </Marker>
    </Map>
);

export default connect(({ latlng }) => ({latlng}))(EventMap);
