import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
//import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const adminReducer = (state = [], action) => {
    if (action.type === 'GOT_HISTORY') {
        return action.payload;
    }
    return state;
}

const feelingReducer = (state = [], action) => {
    if (action.type === 'ADD_FEELING') {
        return action.payload;
    }
    return state;
}

const understandingReducer = (state = [], action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

const supportReducer = (state = [], action) => {
    if (action.type === 'ADD_SUPPORT') {
        return action.payload;
    }
    return state;
}

const commentsReducer = (state = [], action) => {
    if (action.type === 'ADD_COMMENTS') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
    applyMiddleware(logger),
);




ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
//registerServiceWorker();

