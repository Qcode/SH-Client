import io from 'socket.io-client';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

const socket = io('http://localhost:8080', {
  autoConnect: false,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
window.store = store;

const userPropTypesShape = PropTypes.shape({
  id: PropTypes.string,
  username: PropTypes.string,
  host: PropTypes.bool,
  isLiberal: PropTypes.bool,
  isHitler: PropTypes.bool,
  isChancellor: PropTypes.bool,
  isPresident: PropTypes.bool,
  voteCast: PropTypes.oneOf([0, 1, 'uncast']),
  cards: PropTypes.arrayOf(PropTypes.oneOf(['liberal', 'fascist'])),
  isDead: PropTypes.bool,
  isTermLimited: PropTypes.bool,
  roleImage: PropTypes.number,
});

const gameStagePropTypes = PropTypes.oneOf([
  'chooseChancellor',
  'voteForChancellor',
  'presidentPolicySelect',
  'chancellorPolicySelect',
  'fascistPower',
]);

const memoPropTypesShape = PropTypes.shape({
  text: PropTypes.string,
  graphics: PropTypes.arrayOf(PropTypes.string),
});

export { socket, store, userPropTypesShape, gameStagePropTypes, memoPropTypesShape };
