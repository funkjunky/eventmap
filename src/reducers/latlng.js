import * as Types from '../constants/actiontypes.js';
import { LATLNG } from '../constants/defaults.js';

const latlng = (state = LATLNG, action) => {
    switch(action.type) {
        case Types.UPDATE_LATLNG:
            return action.latlng;
        default:
            return state;
    }
};

export default latlng;
