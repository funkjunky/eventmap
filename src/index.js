import React from 'react';
import { render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers.js';
import App from './components/app.js';


let store = createStore(reducers);

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);