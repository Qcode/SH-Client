import {
  SET_GAME_STATE,
  JOIN_GAME,
  START_GAME,
  SUBMIT_CHANCELLOR,
  VOTE_FOR_CHANCELLOR,
  DISCARD_CARD,
  ENACT_FASCIST_POWER,
  SUBMIT_VETO_REQUEST,
  RESPOND_VETO_REQUEST,
  LOGIN_ERROR,
} from './reducers/eventTypes';
import { socket } from './objects';

function connectToServer(username) {
  return (dispatch) => {
    socket.open();
    socket.emit(JOIN_GAME, { username }, (returnValue) => {
      if (returnValue === true) {
        dispatch({
          type: SET_GAME_STATE,
          newState: 'lobby',
        });
      } else {
        dispatch({
          type: LOGIN_ERROR,
          error: returnValue,
        });
      }
    });
  };
}

function startGame() {
  socket.emit(START_GAME);
}

function submitChancellor(chancellorId) {
  socket.emit(SUBMIT_CHANCELLOR, chancellorId);
}

function voteForChancellor(vote) {
  socket.emit(VOTE_FOR_CHANCELLOR, vote);
}

function submitDiscardCard(card) {
  socket.emit(DISCARD_CARD, card);
}

function enactFascistPower(info) {
  socket.emit(ENACT_FASCIST_POWER, info);
}

function submitVetoRequest() {
  socket.emit(SUBMIT_VETO_REQUEST);
}

function respondVetoRequest(decision) {
  socket.emit(RESPOND_VETO_REQUEST, decision);
}

export {
  connectToServer,
  startGame,
  submitChancellor,
  voteForChancellor,
  submitDiscardCard,
  enactFascistPower,
  submitVetoRequest,
  respondVetoRequest,
};
