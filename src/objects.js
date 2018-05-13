import io from 'socket.io-client';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

const socket = io('http://localhost:8080');
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
window.store = store;

export { socket, store };
