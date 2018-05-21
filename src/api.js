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

export { connectToServer, startGame };
