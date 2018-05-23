import io from 'socket.io-client';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

const socket = io('http://localhost:8080');
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
window.store = store;

const userPropTypesShape = PropTypes.shape({
  username: PropTypes.string,
  host: PropTypes.bool,
  isLiberal: PropTypes.bool,
  isHitler: PropTypes.bool,
  id: PropTypes.string,
});

const gameStagePropTypes = PropTypes.oneOf([
  'chooseChancellor',
  'voteForChancellor',
  'presidentPolicySelect',
]);

export { socket, store, userPropTypesShape, gameStagePropTypes };
