import {combineReducers} from 'redux';

//TODO: this tiny reducers seem ridiculous...
import latlng from './reducers/latlng.js';
import zoom from './reducers/zoom.js';

const reducers = combineReducers({latlng, zoom});

export default reducers;
