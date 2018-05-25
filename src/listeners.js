import { socket, store } from './objects';
import {
  SYNC_USERS,
  SYNC_USER,
  CHANGE_GAME_STATE,
  CHANGE_GAME_STAGE,
  GET_SCORE,
  GAME_OVER_REASON,
} from './reducers/eventTypes';

socket.on('users', (data) => {
  store.dispatch({ type: SYNC_USERS, users: data });
});

socket.on('user', (data) => {
  store.dispatch({ type: SYNC_USER, user: data });
});

socket.on('CHANGE_GAME_STATE', (data) => {
  store.dispatch({ type: CHANGE_GAME_STATE, newState: data });
});

socket.on(GAME_OVER_REASON, (data) => {
  store.dispatch({ type: GAME_OVER_REASON, reason: data });
});

socket.on('gameStage', (data) => {
  store.dispatch({ type: CHANGE_GAME_STAGE, newStage: data });
});

socket.on('score', (data) => {
  store.dispatch({ type: GET_SCORE, score: data });
});
