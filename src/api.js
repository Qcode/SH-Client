import io from 'socket.io-client';
import { CHANGE_GAME_STATE } from './reducers/eventTypes';

const socket = io('http://localhost:8080');

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

function sendAnotherThing() {}

export { connectToServer, sendAnotherThing };
