import { socket, store } from './objects';
import { SYNC_USERS } from './reducers/eventTypes';

socket.on('users', (data) => {
  store.dispatch({ type: SYNC_USERS, users: data });
});
