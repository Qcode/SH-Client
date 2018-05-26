import {
  SET_GAME_STATE,
  JOIN_GAME,
  START_GAME,
  SUBMIT_CHANCELLOR,
  VOTE_FOR_CHANCELLOR,
  DISCARD_CARD,
} from './reducers/eventTypes';
import { socket } from './objects';

function connectToServer(username) {
  return (dispatch) => {
    socket.emit(JOIN_GAME, { username }, () => {
      dispatch({
        type: SET_GAME_STATE,
        newState: 'lobby',
      });
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

export { connectToServer, startGame, submitChancellor, voteForChancellor, submitDiscardCard };
