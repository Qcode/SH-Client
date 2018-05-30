import { socket, store } from './objects';
import {
  SYNC_USERS,
  SYNC_USER,
  SET_GAME_STATE,
  SET_GAME_STAGE,
  SYNC_SCORE,
  GAME_OVER_REASON,
  FASCIST_POWER,
  FASCIST_INFO,
  GET_MEMO,
  SYNC_FAILED_GOVERNMENTS,
  RECEIVE_VETO_REQUEST,
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

socket.on(FASCIST_POWER, (data) => {
  store.dispatch({ type: FASCIST_POWER, power: data });
});

socket.on(FASCIST_INFO, (data) => {
  store.dispatch({ type: FASCIST_INFO, info: data });
});

socket.on(GET_MEMO, (data) => {
  store.dispatch({ type: GET_MEMO, memo: data });
});

socket.on(SYNC_FAILED_GOVERNMENTS, (failedGovernments) => {
  store.dispatch({ type: SYNC_FAILED_GOVERNMENTS, failedGovernments });
});

socket.on(RECEIVE_VETO_REQUEST, () => {
  store.dispatch({ type: RECEIVE_VETO_REQUEST });
});
