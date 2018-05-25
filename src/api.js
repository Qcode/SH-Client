import { CHANGE_GAME_STATE } from './reducers/eventTypes';
import { socket } from './objects';

function connectToServer(username) {
  return (dispatch) => {
    socket.emit('join', { username }, () => {
      dispatch({
        type: CHANGE_GAME_STATE,
        newState: 'lobby',
      });
    });
  };
}

function startGame() {
  socket.emit('startGame');
}

function submitChancellor(chancellorId) {
  socket.emit('submitChancellor', chancellorId);
}

function voteForChancellor(vote) {
  socket.emit('chancellorVote', vote);
}

function submitDiscardCard(card) {
  socket.emit('discardCard', card);
}

export { connectToServer, startGame, submitChancellor, voteForChancellor, submitDiscardCard };
