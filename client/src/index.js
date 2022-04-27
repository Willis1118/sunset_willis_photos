import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //keep track of a store -- a global state, thus we can access it from any where in the app
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

import './index.css';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk))) //create the global state
//thunk here allows us to return action functions instead of just object
//entire frontend app rendered here
ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)