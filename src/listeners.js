import { socket, store } from './objects';
import {
  SYNC_USERS,
  SYNC_USER,
  SET_GAME_STATE,
  SET_GAME_STAGE,
  SYNC_SCORE,
  GAME_OVER_REASON,
} from './reducers/eventTypes';

socket.on(SYNC_USERS, (data) => {
  store.dispatch({ type: SYNC_USERS, users: data });
});

socket.on(SYNC_USER, (data) => {
  store.dispatch({ type: SYNC_USER, user: data });
});

socket.on(SET_GAME_STATE, (data) => {
  store.dispatch({ type: SET_GAME_STATE, newState: data });
});

socket.on(GAME_OVER_REASON, (data) => {
  store.dispatch({ type: GAME_OVER_REASON, reason: data });
});

socket.on(SET_GAME_STAGE, (data) => {
  store.dispatch({ type: SET_GAME_STAGE, newStage: data });
});

socket.on(SYNC_SCORE, (data) => {
  store.dispatch({ type: SYNC_SCORE, score: data });
});
