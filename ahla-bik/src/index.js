import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from './reducers'

import './index.css';
import App from './components/App';

import { configureFakeBackend } from './components/authentication/_helpers';
configureFakeBackend();

const loggerMiddleware = createLogger();

 const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
// var store=createStore(reducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


