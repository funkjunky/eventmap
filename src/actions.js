import * as Types from './constants/actiontypes.js';
import { LATLNG } from './constants/defaults.js';

export const updateLocation = (latlng) => ({
    type: Types.UPDATE_LATLNG,
    latlng,
});

export const updateZoom = (zoom) => ({
    type: Types.UPDATE_ZOOM,
    zoom,
});

export const updateLocationByGps = () => 
    dispatch => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log('gps: ', position, [position.coords.latitude, position.coords.longitude]);
            dispatch(updateLocation([position.coords.latitude, position.coords.longitude]));
        }, () => {
            //dispatch(updateLocation(LATLNG));
            //TODO: show an error
            console.warning('Couldnt get GPS location...');
        });
        return {then: ()=>{}};  //TODO: return a proper promise.
    };
