import React from 'react';
import { connect } from 'react-redux';

import EventMap from '../containers/event-map.js';
import { updateLocationByGps } from '../actions.js';

const App = ({ dispatch }) => {
    dispatch(updateLocationByGps());
    return (
        <div>
            <EventMap />
        </div>
    );
};

export default connect()(App);
