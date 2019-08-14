import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer } from 'react-router-redux';
import rootSaga from './effects';

import usersReducer from './reducers/usersReducer';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  combineReducers({
    users: usersReducer,
    routing: routerReducer
  }),
  {},
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
)

sagaMiddleware.run(rootSaga);