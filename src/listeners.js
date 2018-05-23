import { socket, store } from './objects';
import { SYNC_USERS, CHANGE_GAME_STATE, CHANGE_GAME_STAGE } from './reducers/eventTypes';

socket.on('users', (data) => {
  store.dispatch({ type: SYNC_USERS, users: data });
});

socket.on('startGame', () => {
  store.dispatch({ type: CHANGE_GAME_STATE, newState: 'game' });
});

socket.on('gameStage', (data) => {
  store.dispatch({ type: CHANGE_GAME_STAGE, newStage: data });
});
