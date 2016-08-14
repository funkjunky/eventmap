import * as Types from './constants/actiontypes.js';
import { LATLNG } from './constants/defaults.js';

export const updateLocation = (latlng) => ({
    type: Types.UPDATE_LATLNG,
    latlng: latlng,
});

export const updateLocationByGps = () => 
    dispatch => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log('position: ', position, [position.coords.latitude, position.coords.longitude]);
            dispatch(updateLocation([position.coords.latitude, position.coords.longitude]));
        }, () => {
            dispatch(updateLocation(LATLNG));
        });
        return {then: ()=>{}};
    };
