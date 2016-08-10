import React from 'react';
import { connect } from 'react-redux';

const App = () => (
    <div>
        <span>Hello World!</span>
    </div>
);

export default connect()(App);
