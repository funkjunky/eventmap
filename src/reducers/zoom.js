import * as Types from '../constants/actiontypes.js';
import { ZOOM } from '../constants/defaults.js';

const zoom = (state = ZOOM, action) => {
    console.log('new zoom: ', state);
    switch(action.type) {
        case Types.UPDATE_ZOOM:
            return action.zoom;
        default:
            return state;
    }
};

export default zoom;
