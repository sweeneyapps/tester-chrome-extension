import { combineReducers } from 'redux';
import worker from './worker';
import socket from './socket';
import plugin from './plugin';
import notifications from './notifications';

export const reducers = Object.freeze({
  worker,
  socket,
  plugin,
  notifications,
});

const pluginApp = combineReducers(reducers);

export default pluginApp;
