import axios from 'axios';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer } from 'react-router-redux';
import rootSaga from './effects';

import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/auth.reducer';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
    combineReducers({
        auth: authReducer,
        users: usersReducer,
        routing: routerReducer
    }),
    {},
    composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
)

sagaMiddleware.run(rootSaga);

axios.interceptors.request.use(
    function(config) {
        const token = localStorage.getItem('token');

        if (token != null) {
            config.headers.Authorization = token;
        }

        config.baseURL = `http://localhost:8081/api`;

        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    undefined,
    function(err) {
        switch(err.response.status) {
            case 401: {
                localStorage.removeItem('g_user');
                localStorage.removeItem('token');
                window.location.replace('/account/login');
                break;
            }
        }
        return Promise.reject(err);
    }
);
