import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  missionsReducer, rocketsReducer,
});

const store = createStore(
  reducer, applyMiddleware(logger, thunk),
);

export default store;
